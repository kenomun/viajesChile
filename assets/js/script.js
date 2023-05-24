$(function() {
    
    $('[data-toggle="tooltip"]').tooltip();
  
    $('#quienesomos').click(function() {
      alert("Somos la mejor empresa de viajes");
    });
  
    $('#destacados').click(function() {
      alert("Comparte en los mejores lugares de Chile");
    });
  
    $('#contactos').click(function() {
      alert("¡Qué esperas para ser parte de nosotros?");
    });
  
    $('.titulo1').click(function() {
      $('.texto1').toggle();
    });
  
    $('.titulo2').click(function() {
      $('.texto2').toggle();
    });
  
    $('.titulo3').click(function() {
      $('.texto3').toggle();
    });
  
    $(".ocultar-mostrar").click(function() {
      $(".ocultar-mostrar").slideToggle(1000);
      $(".ocultar-mostrar").toggle('show');
    });
  
    $(".ocultar-mostrar2").click(function() {
      $(".ocultar-mostrar2").slideToggle(1000);
      $(".ocultar-mostrar2").toggle('show');
    });
  
    $(".ocultar-mostrar3").click(function() {
      $(".ocultar-mostrar3").slideToggle(1000);
      $(".ocultar-mostrar3").toggle('show');
    });
  
    $('.titulo4').click(function() {
      $('.texto4').toggle();
    });
  
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      if (target !== "#") {
        $(target)[0].scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  