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


/**
 * フォーム部品の すべて選択・解除
 */
var checkboxAllChose = function (){

  //フォーム部品の すべて選択・解除
  $(document).on('click', '.js-allChose', function(e){
    var value = $('input',this).prop('value');
    $('input[value="'+ value +'"]').prop('checked', !$('input',this).prop('checked'));
    $('.'+ value +'').prop('checked', $('input',this).prop('checked'));

    //市部にチェックが入っていたら選択中表示
    var i = $('input',this).prop('checked');
    if(i == true){
      if ($(this).hasClass('city-select')) {
        $(this).closest('.is-rosenSet').addClass('is-checked');
      } else {
        $('.ln-cd-' + value + '').addClass('is-checked');
      }
    } else {
      if ($(this).hasClass('city-select')) {
        $(this).closest('.is-rosenSet').removeClass('is-checked');
      } else {
        $('.ln-cd-' + value + '').removeClass('is-checked');
      }
    }

    // 路線は2つまでしか選べない(2つ選ぶと他は非活性とする)
    if ($('.btn-rosen.is-checked').length >= 2) {
      var checkedval = [];
      $('.btn-rosen.is-checked + .rosenWrap .all-station:checkbox').each(function() {
        checkedval.push($(this).val());
      });
      checkboxSetActiveAndNonActive(checkedval);
    } else {
      checkboxSetAllActive();
    }

    sendform();
    return false;
  });


  //どれか選択を外したら「全て選択ボタン」のチェックを外す
  $(document).on('click', '.js-allChoseChild', function(){
    var className = $('input',this).prop('class').split(' ')[0];
    var checkboxNum = 0;
    var checkedNum = 0;
    $('.' + className + '').each(function() {
      if (!$(this).hasClass('check-all')) {
        checkboxNum++;
        if ($(this).prop('checked')) {
          checkedNum++;
        }
      }
    });
    var i = $('.'+ className +'').prop('checked');
    if(i == true){
      // チェックボックスの状態が変わったら再度チェックボックのチェック状態をカウントし直す
      $('input[value="'+ className +'"]').prop('checked', false);
      checkboxNum = 0;
      checkedNum = 0;
      $('.' + className + '').each(function() {
        if (!$(this).hasClass('check-all')) {
          checkboxNum++;
          if ($(this).prop('checked')) {
            checkedNum++;
          }
        }
      });
    }

    $('input[value="'+ className +'"]').prop('checked', checkboxNum === checkedNum);

    //駅にチェックが入っていたら路線に選択中表示
    if(checkedNum > 0) {
      if ($(this).hasClass('city-select')) {
        $(this).closest('.is-rosenSet').addClass('is-checked');
      } else {
        $('.ln-cd-' + className + '').addClass('is-checked');
        // 他のグループの子チェックボックスがチェックされていたら該当チェックボックス以外はすべて非活性
        var returnResponse = false;
        $('input[type=checkbox][name="st[]"]').each(function() {
          // 他のグループのチェックボックスの状態をチェック(classが違うためこの条件)
          if ($(this).prop('checked') && $(this).attr('class').split(' ')[0] !== className) {
            var classNameSt = $(this).attr('class').split(' ')[0];
            checkboxSetActiveAndNonActive([className, classNameSt]);
            returnResponse = true;
            return false;
          }
        });
        // チェックボックスの非活性処理が一度も無ければ、全てのチェックボックスの非活性処理を解除
        if (!returnResponse) {
          checkboxSetAllActive();
        }
      }
    } else {
      if ($(this).hasClass('city-select')) {
        $(this).closest('.is-rosenSet').removeClass('is-checked');
      } else {
        $('.ln-cd-' + className + '').removeClass('is-checked');
        // 同じグルーピングのチェックボックスのチェックがなくなったらば、全てのチェックボックスの非活性を解除
        checkboxSetAllActive();
      }
    }

    sendform();

  });
}

var checkboxSetActiveAndNonActive = function (groupArray) {
  var thisItem = $('input.all-station:checkbox[value!="' + groupArray[1] + '"]' + '' + 'input.all-station:checkbox[value!="' + groupArray[0] + '"]').closest('.rosenWrap').prev('.btn-rosen');
  thisItem.addClass('is-disabled');
  if(thisItem.hasClass('is-show')){
    thisItem.removeClass('is-show');
    thisItem.next().slideUp();
  }

}

var checkboxSetAllActive = function () {
  $('.btn-rosen').removeClass('is-disabled');
}

$(function(){
  checkboxAllChose();

  // チェックボックスを全チェックを画面遷移時点でチェックする機能
  var arrayAllCheckBox = [];
  var arrayCheckBoxCheckd = [];
  var arrayAllCheckBoxStatsion = [];
  var arrayCheckBoxCheckedStation = [];
  var arrayShikuchousonAllCount = 0;
  var arrayShikuchousonCheckedCount = 0;
  var arrayStationClass = [];
  $('input[type=checkbox]').each(function() {
    if ($(this).hasClass('city') && !$(this).hasClass('check-all') && $.isNumeric($(this).attr('class').split(' ')[0])) {
      arrayAllCheckBox.push($(this).attr('class').split(' ')[0]);
    }
    if ($(this).hasClass('city') && !$(this).hasClass('check-all') && $(this).prop('checked') && $.isNumeric($(this).attr('class').split(' ')[0])) {
      arrayCheckBoxCheckd.push($(this).attr('class').split(' ')[0]);
      $(this).closest('.is-rosenSet').addClass('is-checked');
    }
    if ($(this).hasClass('station') && !$(this).hasClass('check-all') && $.isNumeric($(this).attr('class').split(' ')[0].substr(3))) {
      arrayAllCheckBoxStatsion.push($(this).attr('class').split(' ')[0]);
    }

    // 路線が選択されていれば、直下の駅は全てチェックボックスをチェックする
    if ($(this).hasClass('all-station') && $(this).prop('checked')) {
      $('.' + $(this).val()).prop('checked', true);
    }

    if ($(this).hasClass('station') && !$(this).hasClass('check-all') && $(this).prop('checked') && $.isNumeric($(this).attr('class').split(' ')[0].substr(3))) {
      arrayCheckBoxCheckedStation.push($(this).attr('class').split(' ')[0]);
      $('.ln-cd-' + $(this).attr('class').split(' ')[0] + '').addClass('is-checked');
      // チェックボックスの活性非活性処理用にチェックした駅のクラスを保存する
      arrayStationClass.push($(this).attr('class').split(' ')[0]);
    }

    if ($(this).hasClass('shikuchoson')) {
      arrayShikuchousonAllCount++;
      if ($(this).prop('checked')) {
        arrayShikuchousonCheckedCount++;
        $(this).closest('.is-rosenSet').addClass('is-checked');
      }
    }
  });
  // 駅のクラスの重複削除
  arrayStationClass = Array.from(new Set(arrayStationClass));
  // セットされているチェックボックスのグループを確認し、該当のチェックボックス以外は非活性とする
  switch (arrayStationClass.length) {
    // グループが2つの時のみ非活性処理を実施
    case 2:
      checkboxSetActiveAndNonActive(arrayStationClass);
      break;
    case 1:
    default:
      break;
  }

  if (arrayShikuchousonAllCount === arrayShikuchousonCheckedCount) {
    $('input[name="shikuchoson"]').prop('checked', true);
  }
  var occurrencesAll = { };
  var occurrencesChecked = { };
  var occurrencesAllStation = { };
  var occurrencesCheckedStation = { };
  for (var i = 0, j = arrayAllCheckBox.length; i < j; i++) {
    occurrencesAll[arrayAllCheckBox[i]] = (occurrencesAll[arrayAllCheckBox[i]] || 0) + 1;
  }
  for (var i = 0, j = arrayCheckBoxCheckd.length; i < j; i++) {
    occurrencesChecked[arrayCheckBoxCheckd[i]] = (occurrencesChecked[arrayCheckBoxCheckd[i]] || 0) + 1;
  }
  for (var i = 0, j = arrayAllCheckBoxStatsion.length; i < j; i++) {
    occurrencesAllStation[arrayAllCheckBoxStatsion[i]] = (occurrencesAllStation[arrayAllCheckBoxStatsion[i]] || 0) + 1;
  }
  for (var i = 0, j = arrayCheckBoxCheckedStation.length; i < j; i++) {
    occurrencesCheckedStation[arrayCheckBoxCheckedStation[i]] = (occurrencesCheckedStation[arrayCheckBoxCheckedStation[i]] || 0) + 1;
  }
  for (var key in occurrencesAll) {
    if (occurrencesAll[key] === occurrencesChecked[key]) {
      $('input[value="'+ key +'"]').prop('checked', true);
    }
  }
  for (var key in occurrencesAllStation) {
    if (occurrencesAllStation[key] === occurrencesCheckedStation[key]) {
      $('input[value="'+ key +'"]').prop('checked', true);
    }
  }
});



/**
 * 市町村選択エリアのトグル
 */


var checkBoxToggle = function (){
  var toggleName;
  $('.js-checkBoxToggle').on('click', function(){
    toggleName = $(this).attr('data-target-toggle');
    $('[data-toggle-name='+ toggleName +']').slideToggle();
    $(this).toggleClass('is-selected');
    return false;
  });
  return false;
}


$(function(){
  checkBoxToggle();
});

/**
 * count
 */


var countUp = function (){
  $('.js-count').counterUp({
    delay: 10,
    time: 500
  });
}


jQuery.event.add(window,"load",function() {
  countUp();
});

/**
 * guide modal, guide bubble
 */


var bubbleFlag = false;//吹き出し表示確認用
var guideModalFlag = false;//ガイドモーダル表示確認用

var guide = function (){
  var scrollpos = $(window).scrollTop();
  var modalName;


  var footHeight = $('.l-footer').innerHeight();
  var bh = $('body').innerHeight();
  var wh = $(window).innerHeight();


  setTimeout(function() {//windowsだと即高さ取得できないのでディレイさせて取得
    footHeight = $('.l-footer').innerHeight();
    bh = $('body').innerHeight();
    wh = $(window).innerHeight();
  }, 200);


  setTimeout(function() {//１０秒後に吹き出し表示
    if(bubbleFlag == false){
      $(".js-guideBubble").fadeIn(400);
      bubbleFlag = true;
    }
  }, 10000);


  $(window).scroll(function () {//スクロールでフッターに吸着
    var point = bh - (wh + footHeight);

    if($(window).scrollTop() > point){
      if($('.guideNav').length > 0){
        $('.guideNav').addClass('is-stopFoot');
      }
      if($('.guideNav2').length > 0){
        $('.guideNav2').addClass('is-stopFoot');
      }
    } else {
      if($('.guideNav').length > 0){
        $('.guideNav').removeClass('is-stopFoot');
      }
      if($('.guideNav2').length > 0){
        $('.guideNav2').removeClass('is-stopFoot');
      }
    }
  });


  $('.l-wrapper').on('click','.js-guideModal', function(){//ガイドモーダル表示・非表示
    if(guideModalFlag == false){
      modalName = $(this).attr('data-target-modal');
      scrollpos = $(window).scrollTop();
      $('body').addClass('is-fixed').css({'top': -scrollpos});
      $('.guideNav').addClass('is-currentGuide');
      $('.l-overlay').fadeIn(400).addClass('js-guideModal');
      $('.guideModal[data-modal-name='+ modalName +']').fadeIn(400);
      $(".js-guideBubble").fadeOut(400);
      bubbleFlag = true;
      guideModalFlag = true;
    } else {
      $('body').removeClass('is-fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $('.guideNav').removeClass('is-currentGuide');
      $('.l-overlay').fadeOut(400).removeClass('js-guideModal');
      $('.guideModal[data-modal-name='+ modalName +']').fadeOut(400);
      guideModalFlag = false;
    }
    return false;
  });
}




jQuery.event.add(window,"load",function() {
  guide();//全要素読み込み後からカウント開始したいためこのタイミングに設置
});

/**
 * slick
 */


var searchSlick = function (){
  $('.js-searchSlick').not('.slick-initialized').slick({
    autoplay: false,
    infinite:false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    initialSlide: 0,
    arrows: true,
    dots:true,
    asNavFor: '.js-searchThumbSlick',
    responsive: [{
      breakpoint: 768,
      settings: {
        swipe:true,
        slidesToScroll: 1,
        slidesToShow: 1,
      }
    }]
  });
  $('.js-searchThumbSlick').not('.slick-initialized').slick({
    autoplay: false,
    infinite:false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    initialSlide: 1,
    arrows: false,
    asNavFor: '.js-searchSlick',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        swipe:true,
        // arrows: true,
      }
    }]
  });
}


var resultItem_slick2 = function (){
  $('.js-resultItem_slick2').not('.slick-initialized').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite:true,
    // adaptiveHeight:true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    lazyLoad: 'progressive',
    initialSlide: 0,
    arrows: true,
    dots:false,
    mobileFirst: true,
    swipe:true,
    centerMode: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerPadding:'70px',
        centerMode: true,
      }
    }]
  });
}


$(function(){
  searchSlick();
  resultItem_slick2();
});



/**
 * 都道府県選択エリアのトグル
 */


var selectToggle = function (){
  var toggleName;
  $('.js-selectToggle').on('change', function(){
    toggleName = $(this).attr('data-target-toggle');
    $('[data-toggle-name='+ toggleName +']').show();
    return false;
  });
  return false;
}


$(function(){
  selectToggle();
});

/**
 * terms bt
 */
var termsBt = function (){
  if ($('.js-searchTermsBt').length > 0) {
    var $serachBt = $('.js-searchTermsBt');
    var termsLengh = $serachBt.offset().top;

    $(window).scroll( function () {
      var scrollCount = $(window).scrollTop() + 63;
      if (scrollCount > termsLengh){
        $serachBt.addClass('is-fixed');
      } else {
        $serachBt.removeClass('is-fixed');
      }
    });
  }
}



jQuery.event.add(window, "load", function () {
  termsBt();
});


/**
 * terms show
 */
var termsShow = function (){
  var termsLengh = $('.searchTerms_item').length;
  $(".js-termsShow").on('click', function(){
    $('.searchTerms').toggleClass('is-hide');
    return false;
  });
  if(termsLengh > 4){
    $('.searchTerms').addClass('is-hide');
  }
}



$(function(){
  termsShow();
});

/**
 * text show
 */
var textShow = function (){
  $(".js-textShow").on('click', function(){
    $(this).closest('.is-targetTxt').toggleClass('is-hide');
    return false;
  });
}



$(function(){
  textShow();
});
