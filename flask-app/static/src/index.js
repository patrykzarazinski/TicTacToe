function clearInput() {
    document.querySelector('#firstInput').value = '';
    document.querySelector('#secondInput').value = '';
}

function main() {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('form').onsubmit = () => {
            const firstName = document.querySelector('#firstInput').value;
            const secondName = document.querySelector('#secondInput').value;
            const pattern = /^[a-zA-Z][a-zA-Z0-9]+$/i;

            console.log(firstName);
            console.log(secondName);

            if (firstName.length == 0 || secondName.length == 0) {
                alert('Please provide names for both players')
                clearInput();
                return false;
            }

            const expectedNameSize = 3;
            if (firstName.length < expectedNameSize || secondName.length < expectedNameSize) {
                alert(`Size of each name must have at least ${expectedNameSize} alphanumeric signs`)
                clearInput();
                return false;
            }

            if (!(pattern.test(firstName) && pattern.test(secondName))) {
                alert('Each name has to be consist of alphanumeric signs and starting with letter');
                clearInput();
                return false;
            }
        }
    });
}

main()