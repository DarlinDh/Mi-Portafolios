const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Modo Claro";
    } else {
        themeToggle.textContent = "Modo Oscuro";
    }
});
