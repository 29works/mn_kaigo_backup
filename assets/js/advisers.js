/**
 * voiceToggle
 */
var voiceToggle = function (){
  $(".js-voiceToggle").on('click', function(){
    $(this).closest('p').next().slideToggle();
    $('i',this).toggleClass('icon-arrow-up');
    return false;
  });
}



$(function(){
  voiceToggle();
});

