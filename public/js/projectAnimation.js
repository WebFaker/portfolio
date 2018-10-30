$('body').css('overflow', 'hidden');
setTimeout(function(){
    $('#header_presentation').css('transform', 'translate(0,-50%)');
    $('#header_presentation').css('left', '5%');
    $('#header_presentation_text').css('opacity', '1');
    $('#header_presentation_text').css('position', 'static');
}, 1000);
setTimeout(function(){
    $('body').css('overflow', 'auto');
}, 1300);