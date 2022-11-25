import {
  none,
  cross,
  circle,
  possibilitiesOfGameEnd,
  rowMapTable,
  columnMapTable,
} from "./utils/constants.js";

// prettier-ignore
let board = {
    0: none, 1: none, 2: none,
    3: none, 4: none, 5: none,
    6: none, 7: none, 8: none
}

let crossFlag = true;

function makeWin(i, possibility) {
  const mark = board[i] == cross ? "cross" : "circle";
  for (let item of possibility) {
    const row = rowMapTable[item];
    const column = columnMapTable[item];
    // prettier-ignore
    document.querySelector(`._${row} .${mark}._${column}`).style.backgroundColor = "yellow";
    document.querySelector(`#win-line`).style.zIndex = "2";
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

function main() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cell").forEach(function (cell, i) {
      cell.onclick = takeActionOnClick(i);
    });
  });
}

main();
