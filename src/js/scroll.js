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
      $('#header_font_color').css("top", "5%");
      $('#header_font_color').css("left", "5%");
      $('#header_text').css("opacity", "1");
      document.getElementById('header_title').innerHTML = 'martinnicolas<span class="colored">.</span>fr';
  }
  if(height  > 30) {
      $('#theme_button').css("left", "10px");
      $('#theme_button').css("bottom", "15px");
      $('#header_font_color').css("top", "15px");
      $('#header_font_color').css("left", "10px");
      $('#header_text').css("opacity", "0");
      document.getElementById('header_title').innerHTML = 'mn<span class="colored">.</span>fr';
  }
});