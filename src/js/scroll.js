// Scrolling functions

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
  var page = $(this).attr('href'); // Page cible
  var speed = 750; // Durée de l'animation (en ms)
  $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height  >= 0) {
      $('#theme_button').css("left", "5%");
      $('#theme_button').css("bottom", "5%");
  }
  if(height  > 29) {
      $('#theme_button').css("left", "10px");
      $('#theme_button').css("bottom", "15px");
  }
});