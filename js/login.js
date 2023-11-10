function meuDark() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    let navbar = document.getElementById("navZada");
    navbar.classList.toggle("dark-mode");
    let rodape = document.getElementById("rod");
    rodape.classList.toggle("dark-mode");
    let login = document.getElementById("login");
    login.classList.toggle("dark-mode");
}
let buttonFunc = document.getElementById('envLog');

function pegarDados(){

const email = document.getElementById ("email").value;
const senha = document.getElementById("senha").value;

console.log("email" + email);
console.log("senha" + senha);  
}
