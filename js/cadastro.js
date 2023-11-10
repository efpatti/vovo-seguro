
function meuDark() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}
function pegarDados(){
   
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("emailVovo").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    
     

    console.log("nome:" + nome);
    console.log("email:" + email);
    console.log("telefone:" + telefone);
    console.log("senha:" + senha);

 


}
