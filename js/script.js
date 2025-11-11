

const INIT_TEXT = "Ciekawostka";
const INIT_COLOR = "#3b7e3bff";
const CLICKED_TEXT = "Każde arcydzieło, które tworzę, ma swoją małą historię i duszę.";
const CLICKED_COLOR = "#94a728ff";

const button = document.querySelector(".button");

function toggleButtonTextAndColor() {
    if (button.innerText === INIT_TEXT) {
        button.innerText = CLICKED_TEXT;
        button.style.backgroundColor = CLICKED_COLOR;
    } else {
        button.innerText = INIT_TEXT;
        button.style.backgroundColor = INIT_COLOR;
    }
}

button.addEventListener("click", toggleButtonTextAndColor);
