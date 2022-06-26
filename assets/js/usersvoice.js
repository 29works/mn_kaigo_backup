/**
 * select link
 */


var selectLink = function (){
  $('.js-selectLink').on('change', function(){
    var val = $('select',this).val();
    if(val != ''){
      location.pathname = val;
    }

  });
}


$(function(){
  selectLink();
});

