function meuDark() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    let navbar = document.getElementById("navZada");
    navbar.classList.toggle("dark-mode");
    let rodape = document.getElementById("rod");
    rodape.classList.toggle("dark-mode");
}