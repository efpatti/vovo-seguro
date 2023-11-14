var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function meuDark() {
  let elementBody = document.getElementById("corpo");
  elementBody.classList.toggle("dark-mode");
  let element4 = document.getElementById("pulseirasBgBanner");
  element4.classList.toggle("dark-mode");
  let noite = document.getElementById("noite");
  noite.classList.toggle("ney");
  let dia = document.getElementById("dia");
  dia.classList.toggle("noite");
  let um = document.getElementById("um");
  um.classList.toggle("um");
  let dois = document.getElementById("dois");
  dois.classList.toggle("dois");
  let penta = document.getElementById("unicornio");
  penta.classList.toggle("dark-mode");
  let faq = document.getElementById("faq");
  faq.classList.toggle("dark-mode");
  let element2 = document.getElementById("caracteristicas");
  element2.classList.toggle("dark-mode");
}

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
