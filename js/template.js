;(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this)
          .siblings('.nav-dropdown')
          .slideToggle()
        $('.nav-dropdown')
          .not($(this).siblings())
          .hide()
        e.stopPropagation()
      })
      $('html').click(function() {
        $('.nav-dropdown').hide()
      })
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active')
      })
    })
  })(jQuery)
  let mybutton = document.getElementById("buttonTop");


  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = -5; 
    document.documentElement.scrollTop = -5; 
  }
  