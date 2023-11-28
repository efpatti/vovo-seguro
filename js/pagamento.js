document.querySelector(`.card-number-input`).oninput = () => {
  document.querySelector(`.card-number-box`).innerHTML =
    document.querySelector(`.card-number-input`).value;
};
document.querySelector(`.card-holder-input`).oninput = () => {
  document.querySelector(`.card-holder-name`).innerHTML =
    document.querySelector(`.card-holder-input`).value;
};
document.querySelector(`.month-input`).oninput = () => {
  document.querySelector(`.exp-month`).innerHTML =
    document.querySelector(`.month-input`).value;
};
document.querySelector(`.year-input`).oninput = () => {
  document.querySelector(`.exp-year`).innerHTML =
    document.querySelector(`.year-input`).value;
};
document.querySelector(`.cvv-input`).onmouseenter = () => {
  document.querySelector(
    `.fron`
  ).style.transform = `perspective(1000px) rotateY(-180deg)`;
  document.querySelector(
    `.back`
  ).style.transform = `perspective(1000px) rotateY(0deg)`;
};
document.querySelector(`.cvv-input`).onmouseleave = () => {
  document.querySelector(
    `.fron`
  ).style.transform = `perspective(1000px) rotateY(0deg)`;
  document.querySelector(
    `.back`
  ).style.transform = `perspective(1000px) rotateY(180deg)`;
};
document.querySelector(`.cvv-input`).oninput = () => {
  document.querySelector(`.cvv-box`).innerHTML =
    document.querySelector(`.cvv-input`).value;
};

let buttonFunc = document.getElementById("botCont");

buttonFunc.onclick = function (e) {
  e.preventDefault();
  location.href = "conclusao.html";
};

$("input.cvv-input").attr("maxLength", "3").keypress(limitMe);

function limitMe(e) {
  if (e.keyCode == 8) {
    return true;
  }
  return this.value.length < $(this).attr("maxLength");
}

$("input.card-number-input").attr("maxLength", "12").keypress(limitMe);

function limitMe(e) {
  if (e.keyCode == 8) {
    return true;
  }
  return this.value.length < $(this).attr("maxLength");
}
let fron = document.querySelector("#imgFront");
let back = document.querySelector("#imgBack");
function visa() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/visa1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/visa1.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(45deg, LightSkyBlue, LightSteelBlue)"
  );
  $(".back").css(
    "background",
    "linear-gradient(45deg, LightSkyBlue, LightSteelBlue)"
  );
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "100%");
  $(".botaoDarkMode").attr("onclick", "meuDark()").unbind("click");
  visaWhite();
}
function inter() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/inter1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/inter1.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(25deg, #f12600, #f45700, #f57800, #f59500)"
  );
  $(".back").css(
    "background",
    "linear-gradient(25deg, #f12600, #f45700, #f57800, #f59500)"
  );
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "20%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "100%");
  $(".botaoDarkMode").attr("onclick", "meuDarkInter()").unbind("click");
  interWhite();
}
function mastercard() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/mastercard.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/mastercard.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(-120deg, #cc0000, #ff9900, #000066)"
  );
  $(".back").css(
    "background",
    "linear-gradient(-120deg, #cc0000, #ff9900, #000066)"
  );
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "20%");
  $(".botaoDarkMode").attr("onclick", "meuDarkMastercard()").unbind("click");
  mastercardWhite();
}
function nubank() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/nubank1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/nubank1.png" />
  `;
  $(".fron").css(
    "background",
    "-webkit-linear-gradient(-45deg, #8e2c91 0%, #6b226d 100%)"
  );
  $(".back").css(
    "background",
    "-webkit-linear-gradient(-45deg, #8e2c91 0%, #6b226d 100%)"
  );
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "100%");
  $(".botaoDarkMode").attr("onclick", "meuDarkNubank()").unbind("click");
  nubankWhite();
}

function meuDark() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
  $(".botaoDarkMode").attr("onclick", "normal()").unbind("click");
  $(".visaing").attr("onclick", "visa2()").unbind("click");
  $(".intering").attr("onclick", "inter2()").unbind("click");
  $(".nubanking").attr("onclick", "nubank2()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard2()").unbind("click");
  visa2();
}
function meuDarkInter() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
  $(".botaoDarkMode").attr("onclick", "normalInter()").unbind("click");
  $(".visaing").attr("onclick", "visa2()").unbind("click");
  $(".intering").attr("onclick", "inter2()").unbind("click");
  $(".nubanking").attr("onclick", "nubank2()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard2()").unbind("click");
  inter2();
}
function meuDarkNubank() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
  $(".botaoDarkMode").attr("onclick", "normalNubank()").unbind("click");
  $(".visaing").attr("onclick", "visa2()").unbind("click");
  $(".intering").attr("onclick", "inter2()").unbind("click");
  $(".nubanking").attr("onclick", "nubank2()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard2()").unbind("click");
  nubank2();
}
function meuDarkMastercard() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
  $(".botaoDarkMode").attr("onclick", "normalMastercard()").unbind("click");
  $(".visaing").attr("onclick", "visa2()").unbind("click");
  $(".intering").attr("onclick", "inter2()").unbind("click");
  $(".nubanking").attr("onclick", "nubank2()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard2()").unbind("click");
  mastercard2();
}
function normalInter() {
  $(".botaoDarkMode").attr("onclick", "meuDarkInter()").unbind("click");
  $(".visaing").attr("onclick", "visa()").unbind("click");
  $(".intering").attr("onclick", "inter()").unbind("click");
  $(".nubanking").attr("onclick", "nubank()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard()").unbind("click");
  $(".dark-mode").removeClass("dark-mode");
  inter();
}
function normalNubank() {
  $(".botaoDarkMode").attr("onclick", "meuDarkNubank()").unbind("click");
  $(".visaing").attr("onclick", "visa()").unbind("click");
  $(".intering").attr("onclick", "inter()").unbind("click");
  $(".nubanking").attr("onclick", "nubank()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard()").unbind("click");
  $(".dark-mode").removeClass("dark-mode");
  nubank();
}
function normalMastercard() {
  $(".botaoDarkMode").attr("onclick", "meuDarkMastercard()").unbind("click");
  $(".visaing").attr("onclick", "visa()").unbind("click");
  $(".intering").attr("onclick", "inter()").unbind("click");
  $(".nubanking").attr("onclick", "nubank()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard()").unbind("click");
  $(".dark-mode").removeClass("dark-mode");
  mastercard();
}
function normal() {
  $(".botaoDarkMode").attr("onclick", "meuDark()").unbind("click");
  $(".visaing").attr("onclick", "visa()").unbind("click");
  $(".intering").attr("onclick", "inter()").unbind("click");
  $(".nubanking").attr("onclick", "nubank()").unbind("click");
  $(".mastercarding").attr("onclick", "mastercard()").unbind("click");
  $(".dark-mode").removeClass("dark-mode");
  visa();
}
function visa2() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/visa1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/visa1.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(45deg, LightSkyBlue, LightSteelBlue)"
  );
  $(".back").css(
    "background",
    "linear-gradient(45deg, LightSkyBlue, LightSteelBlue)"
  );
  $(".botaoDarkMode").attr("onclick", "normal()").unbind("click");
  visaBlack();
}
function inter2() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/inter1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/inter1.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(25deg, #f12600, #f45700, #f57800, #f59500)"
  );
  $(".back").css(
    "background",
    "linear-gradient(25deg, #f12600, #f45700, #f57800, #f59500)"
  );
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "20%");
  $(".botaoDarkMode").attr("onclick", "normalInter()").unbind("click");
  interBlack();
}
function mastercard2() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/mastercard.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/mastercard.png" />
  `;
  $(".fron").css(
    "background",
    "linear-gradient(-120deg, #cc0000, #ff9900, #000066)"
  );
  $(".back").css(
    "background",
    "linear-gradient(-120deg, #cc0000, #ff9900, #000066)"
  );
  $(".botaoDarkMode").attr("onclick", "normalMastercard()").unbind("click");
  mastercardBlack();
}
function nubank2() {
  fron.innerHTML = `
  <img src="img/chip.png" />
  <img src="img/nubank1.png" />
  `;
  back.innerHTML = `
  <span>cvv</span>
  <div class="cvv-box"></div>
  <img src="img/nubank1.png" />
  `;
  $(".fron").css(
    "background",
    "-webkit-linear-gradient(-45deg, #8e2c91 0%, #6b226d 100%)"
  );
  $(".back").css(
    "background",
    "-webkit-linear-gradient(-45deg, #8e2c91 0%, #6b226d 100%)"
  );
  $(".botaoDarkMode").attr("onclick", "normalNubank()").unbind("click");
  nubankBlack();
}
function visaWhite() {
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "100%");
}
function interWhite() {
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "20%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "100%");
}
function nubankWhite() {
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "100%");
}
function mastercardWhite() {
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "20%");
}
function visaBlack() {
  $(".visaing").css("opacity", "100%");
  $(".intering").css("opacity", "20%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "20%");
}
function interBlack() {
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "100%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "20%");
}
function nubankBlack() {
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "20%");
  $(".nubanking").css("opacity", "100%");
  $(".mastercarding").css("opacity", "20%");
}
function mastercardBlack() {
  $(".visaing").css("opacity", "20%");
  $(".intering").css("opacity", "20%");
  $(".nubanking").css("opacity", "20%");
  $(".mastercarding").css("opacity", "100%");
}
