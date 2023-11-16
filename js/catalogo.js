function meuDark() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
}

const cardS = document.querySelectorAll(".cardS");
const btnsChange = document.querySelector(".teste");
function nextCard() {
  cardS[0].innerHTML = `
  <div class="imgCard">
    <img src="img/img10.png" />
  </div>
  <div class="nome">
    <h1 class="textNome">Minimalista</h1>
  </div>
  <div class="desc">
    <p class="textDesc">A simplicidade transforma.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
  <img src="img/img2.png" />
</div>
<div class="nome">
  <h1 class="textNome">Ajustável</h1>
</div>
<div class="desc">
  <p class="textDec">Fácil de aplicar e ajustável.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
  <img src="img/img3.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Resistente</h1>
</div>
<div class="desc">
  <p class="textDec">Resistência sem igual.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard2()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard2()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}
function prevCard2() {
  cardS[0].innerHTML = `
  <div class="imgCard">
  <img src="img/img2.png" />
</div>
<div class="nome">
  <h1 class="textNome">Ajustável</h1>
</div>
<div class="desc">
  <p class="textDec">Fácil de aplicar e ajustável.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
  <img src="img/img3.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Resistente</h1>
</div>
<div class="desc">
  <p class="textDec">Resistência sem igual.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
  <img src="img/img5.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Aerocy-12</h1>
</div>
<div class="desc">
  <p class="textDec">A segurança importa.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}
function nextCard2() {
  cardS[0].innerHTML = `
  <div class="imgCard">
    <img src="img/img4.webp" />
  </div>
  <div class="nome">
    <h1 class="textNome">Novidade!</h1>
  </div>
  <div class="desc">
    <p class="textDec">Incontáveis modelos.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
    <img src="img/img10.png" />
  </div>
  <div class="nome">
    <h1 class="textNome">Minimalista</h1>
  </div>
  <div class="desc">
    <p class="textDesc">A simplicidade transforma.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
  <img src="img/img2.png" />
</div>
<div class="nome">
  <h1 class="textNome">Ajustável</h1>
</div>
<div class="desc">
  <p class="textDec">Fácil de aplicar e ajustável.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard3()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard3()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}
function prevCard3() {
  cardS[0].innerHTML = `
  <div class="imgCard">
    <img src="img/img10.png" />
  </div>
  <div class="nome">
    <h1 class="textNome">Minimalista</h1>
  </div>
  <div class="desc">
    <p class="textDesc">A simplicidade transforma.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
</div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
  <img src="img/img2.png" />
</div>
<div class="nome">
  <h1 class="textNome">Ajustável</h1>
</div>
<div class="desc">
  <p class="textDec">Fácil de aplicar e ajustável.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
  <img src="img/img3.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Resistente</h1>
</div>
<div class="desc">
  <p class="textDec">Resistência sem igual.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard3()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard3()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}
function nextCard3() {
  cardS[0].innerHTML = `
  <div class="imgCard">
  <img src="img/img5.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Aerocy-12</h1>
</div>
<div class="desc">
  <p class="textDec">A segurança importa.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
    <img src="img/img4.webp" />
  </div>
  <div class="nome">
    <h1 class="textNome">Novidade!</h1>
  </div>
  <div class="desc">
    <p class="textDec">Incontáveis modelos.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
    <img src="img/img10.png" />
  </div>
  <div class="nome">
    <h1 class="textNome">Minimalista</h1>
  </div>
  <div class="desc">
    <p class="textDesc">A simplicidade transforma.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard4()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard4()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}

function nextCard4() {
  cardS[0].innerHTML = `
  <div class="imgCard">
  <img src="img/img3.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Resistente</h1>
</div>
<div class="desc">
  <p class="textDec">Resistência sem igual.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
  <img src="img/img5.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Aerocy-12</h1>
</div>
<div class="desc">
  <p class="textDec">A segurança importa.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
    <img src="img/img4.webp" />
  </div>
  <div class="nome">
    <h1 class="textNome">Novidade!</h1>
  </div>
  <div class="desc">
    <p class="textDec">Incontáveis modelos.</p>
  </div>
  <div class="saibaMais">
  <a href="descricao.html"
  ><button class="btnSaibaMais">Veja Mais</button></a
>
  </div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard5()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard5()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}

function nextCard5() {
  cardS[0].innerHTML = `
  <div class="imgCard">
  <img src="img/img2.png" />
</div>
<div class="nome">
  <h1 class="textNome">Ajustável</h1>
</div>
<div class="desc">
  <p class="textDec">Fácil de aplicar e ajustável.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[1].innerHTML = `
  <div class="imgCard">
  <img src="img/img3.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Resistente</h1>
</div>
<div class="desc">
  <p class="textDec">Resistência sem igual.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  cardS[2].innerHTML = `
  <div class="imgCard">
  <img src="img/img5.webp" />
</div>
<div class="nome">
  <h1 class="textNome">Aerocy-12</h1>
</div>
<div class="desc">
  <p class="textDec">A segurança importa.</p>
</div>
<div class="saibaMais">
<a href="descricao.html"
><button class="btnSaibaMais">Veja Mais</button></a
>
</div>
  `;
  btnsChange.innerHTML = `
  <span class="controls" onclick="prevCard()" id="left-arrow">
  <i class="bx bx-left-arrow-alt" style="color: #2e0d7a"></i>
</span>
<span class="controls" id="right-arrow" onclick="nextCard()">
  <i class="bx bx-right-arrow-alt" style="color: #2e0d7a"></i>
</span>
  `;
}
