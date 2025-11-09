
let button = document.querySelector(".button");
let body = document.body;

button.addEventListener("click", () => {
    if (button.innerText === "Ciekawostka") {
        button.innerText = "Każde arcydzieło, które tworzę, ma swoją małą historię i duszę.";
        button.style.backgroundColor = "#94a728ff"; 
    } else {
        button.innerText = "Ciekawostka";
        button.style.backgroundColor = "#3b7e3bff"; 
    }
});
