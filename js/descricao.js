const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});
function url1() {
  const linhanova = document.querySelector(".textao");
  linhanova.innerHTML = `
 <h2> Plano mensal </h2>
   `;
  const linhanova2 = document.querySelector(".textolittle");
  linhanova2.innerHTML = `
 <h5> R$99,90 </h5>
   `;
  const linhanova3 = document.querySelector(".paragrafo");
  linhanova3.innerHTML = `
 <p> No plano mensal, embarcamos em uma jornada curta, mas intensa, rumo à realização de nossos objetivos. É como uma pitada de inspiração a cada 30 dias. Este plano é como um microcosmo da vida, um ciclo que se renova a cada mês. Nele, temos a oportunidade de estabelecer metas, traçar estratégias e trabalhar incansavelmente para alcançá-las. O plano mensal nos permite ser ágeis, ajustando nossos objetivos conforme aprendemos e evoluímos. É a escolha ideal para aqueles que buscam uma abordagem flexível e constante na busca pelo sucesso.</p>
   `;
  const a = document.querySelector("#link");
  a.href = "pagamento1.html";
  console.log(a);
  const p = document.querySelector("#link2");
  p.href = "pix1.html";
  console.log(p);
}
function url2() {
  const linhanova = document.querySelector(".textao");
  linhanova.innerHTML = `
<h4> Plano semestral </h4>
  `;
  const linhanova2 = document.querySelector(".textolittle");
  linhanova2.innerHTML = `
<h5> R$499,99 </h5>
  `;
  const linhanova3 = document.querySelector(".paragrafo");
  linhanova3.innerHTML = `
 <p>Ao optar por um plano semestral, abrimos as portas para uma experiência mais equilibrada. Se o plano mensal é um sprint, o plano semestral é uma corrida de resistência. Durante esse período, nos dedicamos a projetos e metas de longo prazo, permitindo-nos mergulhar profundamente em nosso desenvolvimento pessoal e profissional. Mas o plano semestral não se trata apenas de avançar. É também um momento de reflexão, uma pausa para avaliar o que funcionou, o que precisa ser ajustado e para traçar um curso ainda mais claro para o futuro. É uma oportunidade de crescimento constante, mantendo um olhar atento ao horizonte.</p>
   `;
  const a = document.querySelector("#link");
  a.href = "pagamento2.html";
  console.log(a);
  const p = document.querySelector("#link2");
  p.href = "pix2.html";
  console.log(p);
}

function url3() {
  const linhanova = document.querySelector(".textao");
  linhanova.innerHTML = `
<h2> Plano anual </h2>
  `;
  const linhanova2 = document.querySelector(".textolittle");
  linhanova2.innerHTML = `
<h5> R$1099,90 </h5>
  `;
  const linhanova3 = document.querySelector(".paragrafo");
  linhanova3.innerHTML = `
 <p>No plano anual, nos comprometemos com uma jornada verdadeiramente épica de transformação. É um mergulho profundo em direção a nossos sonhos e aspirações mais ambiciosos. Este é o plano para aqueles que desejam realizar conquistas extraordinárias e deixar um legado duradouro. Durante todo um ano, trabalhamos incansavelmente, atravessando obstáculos e desafiando nossos próprios limites. É um compromisso sério, mas também gratificante, pois ao final, emergimos transformados e mais próximos de nossos objetivos. O plano anual nos ensina a paciência, a resiliência e a importância de manter a visão clara, mesmo quando as tempestades aparecem no horizonte.</p>
   `;
  const a = document.querySelector("#link");
  a.href = "pagamento3.html";
  console.log(a);
  const p = document.querySelector("#link2");
  p.href = "pix3.html";
  console.log(p);
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var body = document.getElementById("corpo");

var navigation = document.querySelector(".navigation");

var carouselExampleFade = document.querySelector("#carouselExampleFade");

var aeroTexto = document.getElementById("aeroTexto");

var firstname = document.querySelector(".firstname");

var formImage = document.querySelector(".form-image");

var center = document.querySelector(".center");

var selectMenu = document.querySelector(".select-menu");

var darkBotaozao = document.querySelector("#darkBotaozao");

var topBotaozao = document.querySelector("#topBotaozao");

btn.onclick = function () {
  modal.style.display = "block";
  navigation.style.filter = "blur(3px)";
  carouselExampleFade.style.filter = "blur(3px)";
  rod.style.filter = "blur(3px)";
  aeroTexto.style.filter = "blur(3px)";
  firstname.style.filter = "blur(3px)";
  formImage.style.filter = "blur(3px)";
  selectMenu.style.filter = "blur(3px)";
  center.style.filter = "blur(3px)";
  darkBotaozao.style.filter = "blur(3px)";
  topBotaozao.style.filter = "blur(3px)";
};

span.onclick = function () {
  modal.style.display = "none";
  navigation.style.filter = "none";
  carouselExampleFade.style.filter = "none";
  rod.style.filter = "none";
  aeroTexto.style.filter = "none";
  firstname.style.filter = "none";
  formImage.style.filter = "none";
  selectMenu.style.filter = "none";
  center.style.filter = "none";
  darkBotaozao.style.filter = "none";
  topBotaozao.style.filter = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    navigation.style.filter = "none";
    carouselExampleFade.style.filter = "none";
    rod.style.filter = "none";
    aeroTexto.style.filter = "none";
    firstname.style.filter = "none";
    formImage.style.filter = "none";
    selectMenu.style.filter = "none";
    center.style.filter = "none";
    darkBotaozao.style.filter = "none";
    topBotaozao.style.filter = "none";
  }
};
