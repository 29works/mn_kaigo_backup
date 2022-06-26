$(function() {

  var ua = navigator.userAgent;
  if((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('iPad') > 0 || ua.indexOf('Kindle') > 0 || ua.indexOf('Silk') > 0) {
    $('.owl-carousel--sample').owlCarousel('destroy');
  } else if ((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('iPhone') > 0 || ua.indexOf('Blackberry') > 0 || ua.indexOf('iPhone') > 0) {
  } else {
    $('.owl-carousel--sample').owlCarousel('destroy');
  }

  $(window).on('scroll', function() {

    var endPoint = $('#other_info').offset().top - $(window).height();
    if ($(window).scrollTop() >= endPoint) {
      $('.follow_btn').addClass('follow_btn--scrolled');
    } else {
      $('.follow_btn').removeClass('follow_btn--scrolled');
    }

  });

});
