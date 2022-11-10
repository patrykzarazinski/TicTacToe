const rowMapTable = {
    0: "0", 1: "0", 2: "0",
    3: "1", 4: "1", 5: "1",
    6: "2", 7: "2", 8: "2"
}

const columnMapTable = {
    0: "0", 1: "1", 2: "2",
    3: "0", 4: "1", 5: "2",
    6: "0", 7: "1", 8: "2"
}

const none = 0
const cross = 1
const circle = 2

let board = [
    [none, none, none],
    [none, none, none],
    [none, none, none]
]

let crossFlag = true

function getCell(i) {
    return board[rowMapTable[i]][columnMapTable[i]]
}

function displayCrossOrCircle(i) {
    return () => {
        if (getCell(i) === none) {
            console.log(crossFlag)
            if (crossFlag) {
                document.getElementsByClassName('cross')[i].style.display = "block";
                crossFlag = false;
                board[rowMapTable[i]][columnMapTable[i]] = cross
            } else {
                document.getElementsByClassName('circle')[i].style.display = "block";
                crossFlag = true;
                board[rowMapTable[i]][columnMapTable[i]] = circle
            }
            console.log(board)
        }
    }
}

function main() {
    document.addEventListener('DOMContentLoaded', function () {
        let cells = document.querySelectorAll('.cell')

        for (let i = 0; i < cells.length; i++) {
            console.log("Welcome in every iteration")
            cells[i].onclick = displayCrossOrCircle(i)
        }
    })
}

main()