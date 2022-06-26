/**
 * auto height
 */


var autoHeight = function (){
  if( winSizeCurrent == 'lg'){
    $('.js-autoHeight').removeAttr('style');
    $('.js-autoHeight').autoHeight({column:3,clear:1});
  }
}



jQuery.event.add(window,"load",function() {
  autoHeight();
});

