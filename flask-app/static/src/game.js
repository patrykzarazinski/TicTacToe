cross = true

function bindDisplayCrossOrCircle(i) {
    return function displayCrossOrCircle() {
        if (cross) {
            document.getElementsByClassName('cross')[i].style.display = "block";
            cross = false;
        } else {
            document.getElementsByClassName('circle')[i].style.display = "block";
            cross = true;
        }
    }
}

function main() {
    document.addEventListener('DOMContentLoaded', function () {
        let cells = document.querySelectorAll('.cell')

        for (let i = 0; i < cells.length; i++) {
            console.log("Welcome in every iteration")
            cells[i].onclick = bindDisplayCrossOrCircle(i)
        }
    })
}

main()