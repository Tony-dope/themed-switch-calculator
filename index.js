document.addEventListener('DOMContentLoaded', function () {
    const theme1 = document.getElementById('theme1');
    const theme2 = document.getElementById('theme2');
    const theme3 = document.getElementById('theme3');

    // Function to switch themes
    function switchTheme() {
        if (theme1.checked) {
            document.body.className = 'theme1';
        } else if (theme2.checked) {
            document.body.className = 'theme2';
        } else if (theme3.checked) {
            document.body.className = 'theme3';
        }
    }

    // Add event listeners
    theme1.addEventListener('change', switchTheme);
    theme2.addEventListener('change', switchTheme);
    theme3.addEventListener('change', switchTheme);

    // Set the initial theme
    switchTheme();
});


function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
