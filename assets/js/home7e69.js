/**
 * area
 */
var areaShow = function (){
  $(".js-areaShow").on('click', function(){
    var area = $(this).data('area');
    $('.home_areaBoxInner.is-all').toggleClass('is-hide');
    $('.home_areaBoxInner.' + area).toggleClass('is-show');
  });
}

var areaBack = function (){
  $(".js-areaBack").on('click', function(){
    $('.home_areaBoxInner.is-all').toggleClass('is-hide');
    $(this).closest('.home_areaBoxInner').toggleClass('is-show');
  });
}

var areaShowS = function (){
  $(".js-areaShow2").on('click', function(){
    var area = $(this).data('area');
    $('.home_areaBoxInnerS.is-all').toggleClass('is-hide');
    $('.home_areaBoxInnerS.' + area).toggleClass('is-show');
  });
}

var areaBackS = function (){
  $(".js-areaBack2").on('click', function(){
    $('.home_areaBoxInnerS.is-all').toggleClass('is-hide');
    $(this).closest('.home_areaBoxInnerS').toggleClass('is-show');
  });
}

var showToday = function(){
  var theToday = new Date();
  var year = theToday.getFullYear();
  var month = theToday.getMonth() + 1;
  var day = theToday.getDate();
  $('.js-today').html(year + '/' + month + '/' + day +'更新');
}


jQuery.event.add(window,"load",function() {
  areaShow();
  areaBack();
  areaShowS();
  areaBackS();
  showToday();
});


/**
 * easysearch
 */

function sendEasyform() {
  var $form = $('#easyForm');
  var dataString = $form.serialize();
  $("#ken2").html('');
  $("#gai2").html('');
  $(".js-countEasy").html('<img src="/assets/images/home/img_loading.gif" style="width:55px;height:14px" alt="">');
  $.when(
    $.ajax({
      type: "POST", url: "/r/get_count.php", data: dataString, cache: false, success:
        function (html) {
          $(".js-countEasy").html(html);
        }
    })
  ).done(function () {
    $("#ken2").html('件');
    $("#gai2").html('該当求人数');
  });
};

var setEasySearch = function (_this) {
  var jbTxt = '';
  var jbTxtArray = [];
  var cfTxt = '';
  var cfTxtArray = [];
  var jbVal = [];
  var cfVal = [];
  var prVal = '';
  var _name = _this.attr('name');


  //職種
  $('#easyJbInput input[type=checkbox]').each(function (index, element) {
    if ($(element).prop('checked')) {
      var _parent = $(element).closest('.input-checkbox');
      var _val = $(element).val();
      jbTxtArray.push($('.input-checkboxTxt', _parent).text());
      jbVal.push(_val);
    }
  })
  for (var i = 0, len = jbTxtArray.length; i < len; ++i) {
    if(i !== 0){
      jbTxt += '、' + jbTxtArray[i];
    } else{
      jbTxt += jbTxtArray[i];
    }
  }
  if (_name === 'jb[]') {
    $('#easy-jb').remove();
    if (jbVal.length > 0){
      $('#easyForm').prepend('<input type="hidden" name="jb[]" id="easy-jb" value="' + jbVal + '">');
    }
  }

  //資格
  $('#easyCfInput input[type=checkbox]').each(function (index, element) {
    if ($(element).prop('checked')) {
      var _parent = $(element).closest('.input-checkbox');
      var _val = $(element).val();
      cfTxtArray.push($('.input-checkboxTxt', _parent).text());
      cfVal.push(_val);
    }
  })
  for (var i = 0, len = cfTxtArray.length; i < len; ++i) {
    if (i !== 0) {
      cfTxt += '、' + cfTxtArray[i];
    } else {
      cfTxt += cfTxtArray[i];
    }
  }
  if (_name === 'cf[]') {
    $('#easy-cf').remove();
    if (cfVal.length > 0) {
      $('#easyForm').prepend('<input type="hidden" name="cf[]" id="easy-cf" value="' + cfVal + '">');
    }
  }

  //勤務地
  if (_name === 'pr') {
    $('#easy-pr').remove();
    var _val = _this.val();
    $('#easyForm').prepend('<input type="hidden" name="pr" id="easy-pr" value="' + _val + '">');
    var _parent = _this.closest('.input-radio');
    var _txt = $('.input-radioTxt', _parent).text();
    $('#txt-pr').text(_txt);
  }

  //選択された職種と資格のvalueとテキストを反映
  if (jbTxt === '' && cfTxt === ''){
    $('#txt-cfjb').text('職種・資格の選択');
  } else if (jbTxt === ''){
    $('#txt-cfjb').text(cfTxt);
  } else if (cfTxt === '') {
    $('#txt-cfjb').text(jbTxt);
  } else{
    $('#txt-cfjb').text(jbTxt + '・' + cfTxt);
  }

  sendEasyform();

}
$('.js-setEasySearch').on('change', function () {
  setEasySearch($(this));
});

/**
 * Slick
 */


var voiceSlick = function (){
  $('.js-voiceSlick').not('.slick-initialized').slick({
    autoplay: false,
    infinite:false,
    // adaptiveHeight:true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding:'20px',
    cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    lazyLoad: 'progressive',
    initialSlide: 0,
    arrows: true,
    dots:true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true,
        initialSlide: 0,
        slidesToShow: 1,
        swipe:true,
      }
    }]
  });
}


var interviewSlick = function (){
  $('.js-interviewSlick').not('.slick-initialized').slick({
    autoplay: false,
    infinite:false,
    // adaptiveHeight:true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding:'20px',
    cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    lazyLoad: 'progressive',
    initialSlide: 0,
    arrows: true,
    dots:true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true,
        initialSlide: 0,
        slidesToShow: 1,
        swipe:true,
      }
    }]
  });
}


jQuery.event.add(window,"load",function() {
  voiceSlick();
  interviewSlick();
});
