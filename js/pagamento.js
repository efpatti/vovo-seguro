(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });

    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);

function meuDark() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.getElementById("navZada");
  navbar.classList.toggle("dark-mode");
  let rodape = document.getElementById("rod");
  rodape.classList.toggle("dark-mode");
}
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
