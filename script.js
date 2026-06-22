const switchModo = document.getElementById("modoSwitch");
const body = document.body;

// aplicar estado guardado
function aplicarModo() {
    if (localStorage.getItem("modo") === "dark") {
        body.classList.add("dark");
        body.classList.remove("light");
        if (switchModo) switchModo.checked = true;
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        if (switchModo) switchModo.checked = false;
    }
}

aplicarModo();

// solo si existe el switch en la página
if (switchModo) {
    switchModo.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("modo", "dark");
        } else {
            localStorage.setItem("modo", "light");
        }
        aplicarModo();
    });
}