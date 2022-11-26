import {
  none,
  cross,
  circle,
  possibilitiesOfGameEnd,
  rowMapTable,
  columnMapTable,
  _board,
  _crossFlag,
} from "./utils/constants.js";

let board = structuredClone(_board);

let crossFlag = _crossFlag;

function makeWin(i, possibility) {
  const mark = board[i] == cross ? "cross" : "circle";
  for (let item of possibility) {
    const row = rowMapTable[item];
    const column = columnMapTable[item];
    // prettier-ignore
    document.querySelector(`._${row} .${mark}._${column}`).style.backgroundColor = "yellow";
    document.querySelector(`#win-field`).style.zIndex = "2";
  }
}

function doesPossibilityWins(mark, possibility) {
  return (
    board[possibility[0]] == mark &&
    board[possibility[1]] == mark &&
    board[possibility[2]] == mark
  );
}

function checkIfSomeoneWon(i) {
  const possibilities = possibilitiesOfGameEnd[i];
  for (let possibility of possibilities) {
    if (doesPossibilityWins(board[i], possibility)) {
      makeWin(i, possibility);
      return true;
    }
  }
  return false;
}

function takeActionOnClick(i) {
  return () => {
    if (board[i] === none) {
      if (crossFlag) {
        document.getElementsByClassName("cross")[i].style.display = "block";
        crossFlag = false;
        board[i] = cross;
      } else {
        document.getElementsByClassName("circle")[i].style.display = "block";
        crossFlag = true;
        board[i] = circle;
      }
      checkIfSomeoneWon(i);
    }
  };
}

function clearCells(mark) {
  document.querySelectorAll(`.${mark}`).forEach(function (item) {
    item.style.backgroundColor = "";
    item.style.display = "none";
  });
}

function startAgain() {
  board = structuredClone(_board);
  crossFlag = _crossFlag;
  clearCells("cross");
  clearCells("circle");
  document.querySelector(`#win-field`).style.zIndex = "-1";
}

function main() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#button").onclick = () => {
      startAgain();
    };
    document.querySelectorAll(".cell").forEach(function (cell, i) {
      cell.onclick = takeActionOnClick(i);
    });
  });
}

main();
