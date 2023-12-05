const input_cpf = document.getElementById("cpf");

input_cpf.addEventListener("focus", function (event) {
  input_cpf.value = "___.___.___-__";
  setTimeout(function () {
    input_cpf.setSelectionRange(0, 0);
  }, 1);
});

input_cpf.addEventListener("blur", function () {
  this.value = "";
});

input_cpf.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (
    "0123456789".indexOf(event.key) !== -1 &&
    this.value.indexOf("_") !== -1
  ) {
    this.value = this.value.replace(/_/, event.key);
    const next_index = this.value.indexOf("_");
    this.setSelectionRange(next_index, next_index);
  } else if (event.key === "Backspace") {
    this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_");
    const next_index = this.value.indexOf("_");
    this.setSelectionRange(next_index, next_index);
  }
});
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("telefone").onkeyup = function () {
    mascara(this, mtel);
  };
};
function pegaDados() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;
  const mensagem = document.getElementById("mensagem").value;

  console.log("nome: " + nome);
  console.log("telefone: " + telefone);
  console.log("email: " + email);
  console.log("cpf: " + cpf);
  console.log("mensagem: " + mensagem);
}
