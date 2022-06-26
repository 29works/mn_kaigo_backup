var nextw = 940,errf,errw=10,v,obj,f,ff,fff,ffff,err,zipErrorCode;

/////////////////////////

var current_page = 1;
var validZipCode = true;
var validZipJudge = true;

function hankana2Zenkana(str) {
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
};


/////////////////////////
//step1

function step1Next(){
    if(validQFormQualification()){
        showStep(2);
    } else{
        changeQFormQualification();
        $('div.formbox').find('table').animate({'marginLeft':'-'+errw+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':errw+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'0px'},'fast');
    }
}

function validQFormQualification(){
    var f = false;
    $('input[name=qualification]:checked').each(function(){
            f=true;
    });
    return f;
}

function changeQFormQualification(){
    errf=true;
    $('input[name=qualification]:checked').each(function(){
        $(this).closest('ul').next().html('');
        errf=false;
        return false;
    });
    if(errf){
        $('input[name=qualification').each(function(){
            $(this).closest('ul').next().html('取得資格を選択してください');
        });
    } else{
        //changeStep1NextBtn();
    }
    nextStep();
}


/////////////////////////
//step2

function step2Next(){
    if( validQFormEmployment() && validQFormHopeSeason()){
        showStep(3);
        let step3_top = $('.offset_zip').offset().top;
        $('.navigate_neko.com_pc,.navigate_neko.com_sp').offset({ top: step3_top - 20 });
    } else{
        changeQFormEmployment();
        changeQFormHopeSeason();
        //changeHopePlace();
        $('div.formbox').find('table').animate({'marginLeft':'-'+(nextw-errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+(nextw+errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+nextw+'px'},'fast');
    }
}

function validQFormEmployment(){
    var f = false;
    $('input[name=employment_status]:checked').each(function(){
            f=true;
    });
    return f;
}

function validQFormHopeSeason(){
    var f = false;
    $('input[name=hope_season]:checked').each(function(){
            f=true;
    });
    return f;
}

function changeQFormEmployment(){

    var f = 0;
    var obj = $('input[name=employment_status');
    if(
        validQFormEmployment()
    ){
        obj.each(function(){
            obj.closest('div').find('div.err').html('');
        });
    } else{
        obj.each(function(){
            obj.closest('div').find('div.err').html('希望の働き方を選択してください');
        });
    }
    nextStep();
}

function changeQFormHopeSeason(){

    var f = 0;
    var obj = $('input[name=hope_season]');
    if(
        validQFormHopeSeason()
    ){
        obj.each(function(){
            obj.closest('div').find('div.err').html('');
        });
    } else{
        obj.each(function(){
            obj.closest('div').find('div.err').html('希望の転職時期を選択してください');
        });
    }
    nextStep();
}


/////////////////////////
//step3

AjaxZip3.onFailure = function() {
    obj =$('[name="zipcode"]');
    obj.parent().next().html('');
    obj.parent().next().html('郵便番号に該当する住所が見つかりません');
    var zip_top = $('.offset_zip').offset().top;
    $('.navigate_neko.com_pc,.navigate_neko.com_sp').offset({ top: zip_top + 20 });
    $('.offset_next4 .btn.next02').addClass('off');
    validZipJudge = false;
};

AjaxZip3.onSuccess = function() {
  obj_zip =$('[name="zipcode"]');
  obj_pref =$('[name="pref"]');
  obj_address =$('[name="address"]');
  obj_zip.parent().next().html('');
  obj_pref.next().html('');
  obj_address.next().next().html('');
  var address_top = $('.offset_address').offset().top;
  $('.navigate_neko.com_pc,.navigate_neko.com_sp').offset({ top: address_top + 20 });
  $('.offset_next4 .btn.next02').removeClass('off');
  validZipJudge = true;
};

function validQFormZip() {
  var obj =$('[name="zipcode"]');
  const zipcode = $('[name="zipcode"]').val();
  const numberOnly = zipcode.match(/^[0-9]+$/) !== null;
  const zipLength = zipcode.match(/^[0-9]{7}$/) !== null;
  zipErrorCode = zipcode.slice(0, 3) == "000" ? false : true;
  const result = zipcode ? numberOnly && zipLength : true;

  validZipCode = true;

  if(!zipcode) {
    obj.parent().next().html('');
    validZipJudge = true;
    return true;
  }

  if (!numberOnly) {
    obj.parent().next().html('郵便番号は半角数字で入力してください。');
    return false;
  } else if (!zipLength) {
    obj.parent().next().html('郵便番号を正しく入力してください。');
    return false;
  } else if (!zipErrorCode) {
    obj.parent().next().html('郵便番号を正しく入力してください。');
    return false;
  } else {
    validZipJudge = true;
    return true;
  }
}

$('[name="zipcode"]').change(function () {
    nextStep();
});

function validQFormPrefId(){
    obj =$('select[name=pref]');
    if(!obj.val()){
        return false;
    } else{
        validZipCode = false;
        return true;
    }
}
function changeQFormPrefId(){
    obj =$('select[name=pref]');
    obj.next().html('');
    if(!validQFormPrefId()){
      obj.next().html('都道府県を選択してください');
    }
    nextStep();
}
function validQFormAddress(){
    obj =$('input[name=address]');
    if(v){
        return true;
    } else{
        return false;
    }
}
function changeQFormAddress(){
    obj =$('input[name=address]');
    v = obj.val();


    obj.next().next().html('');
    if(!validQFormAddress()){
       obj.next().next().html('住所を入力してください');
    }
    nextStep();
}

function step3Next(){
if(validQFormZip() && validQFormPrefId() && validQFormAddress() && validZipJudge){
        showStep(4);
    } else{
        changeQFormPrefId(); changeQFormAddress();
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*2)-errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*2)+errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+(nextw*2)+'px'},'fast');
    }
}


/////////////////////////
//step4

function validQFormSei(){
    var obj = $('input[name=name]');
    var v = $.trim(obj.val());
    v = v.replace(/ /g, '　');
    if(v){
        return true;
    }else{
        return false;
    }
}

function changeQFormSei(){
    var f = 0;
    var obj = $('input[name=name]');

    var t = obj.val(),
    n = t .replace(/[!-~]/g, function (t) {
      return String.fromCharCode(t.charCodeAt(0) + 65248);
    });

    obj.val(hankana2Zenkana(n));

    if(validQFormSei()){
        obj.next().html('');
    } else{
        err='お名前は全角で入力してください';
        obj.next().html(err);
    }
    nextStep();
}

function validQFormSeikana(){
    var f = false;
    var err='';
    var v = $('input[name=name_kana]').val();
    v = $.trim(v);
    v = v.replace(/ /g, '　');
    if( isZenKana(v)){
        return true;
    }else{
        return false;
    }
}

function changeQFormSeikana(){
    var obj = $('input[name=name_kana]');

    var t = obj.val(),
      n = t.replace(/[!-~]/g, function (t) {
        return String.fromCharCode(t.charCodeAt(0) + 65248);
      });

    obj.val(hankana2Zenkana(n));

    if( validQFormSeikana()){
        obj.next().html('');
    } else{
        err = 'フリガナは全角カタカナで入力してください';
        obj.next().html(err);
    }
    nextStep();
}

function validQFormBirthday(){

    const inputResult =
    Boolean(parseInt($('#birthY').val())) &&
    Boolean(parseInt($('#birthM').val())) &&
    Boolean(parseInt($('#birthD').val()));
    let obj = $('select[name=birth_year');

    if (!inputResult) return false;
    const y = $('#birthY').val();
    const m = $('#birthM').val();
    const d = $('#birthD').val();
    const date = new Date(y, m - 1, d);
    const month = date.getMonth() + 1;

    if (m == month) {
        return true;
      } else {
        return false;
      }
}

var birthY = false;
var birthM = false;
var birthD = false;

function changeQFormBirthday(){
    var obj = $('select[name=birth_year]');
    if(validQFormBirthday()) {
        obj.closest('ul').next().html('');
    } else {
        obj.closest('ul').next().html('生年月日を正しく選択してください');
    }
    nextStep();

}

// 半角英数字記号を全角に
$('input#sei').change(function () {
var t = $(this).val(),
  n = t.replace(/[!-~]/g, function (t) {
    return String.fromCharCode(t.charCodeAt(0) + 65248);
  });
$(this).val(hankana2Zenkana(n));
});


function step4Next(){
     if(validQFormSei() && validQFormSeikana() && validQFormBirthday()){
        showStep(5);
    } else{
        changeQFormSei(); changeQFormSeikana(); changeQFormBirthday('next');
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*3)-errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*3)+errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+(nextw*3)+'px'},'fast');
    }
}

///////////////////////
//step5

function validQFormTel1(){
    obj = $('input[name=tel]');
    const telcode = $('[name="tel"]').val();
    const telnumberOnly = telcode.match(/^[0-9]+$/) !== null;
    const telLength = telcode.match(/^[0-9]{10,11}$/) !== null;

    if (!telnumberOnly) {
      err = '数字のみ入力してください。';
      return false;
    } else if (!telLength) {
      err = '10桁、または11桁で入力してください。';
      return false;
    } else {
      return true;
    }

}

function changeQFormTel1(){
    obj = $('input[name=tel]');
    obj.next().html('');

    if( validQFormTel1()){
       obj.next().html();
    } else{
       obj.next().html(err);
    }
    nextStep();
}
function validQFormMail(){
    obj = $('input[name=email]');
    v = $.trim(obj.val());
    obj.val(v);
    err='';
    if(isEmail(v)){ return true; } else{
        err = 'メールアドレスを正しく入力してください'; return false;
    }
}
function changeQFormMail(){
    obj = $('input[name=email]');
    obj.next().html('');
    if( validQFormMail()){
    } else{
        obj.next().html(err);
    }
    nextStep();
}

function step5Next(){
    var obj = $('input[name=email]');
    if( validQFormTel1() && validQFormMail()){

      var action = "index.php";
      var data = new Object;

      $('#form1').find("select,input,textarea").each(function(){
        var elm = $(this).prop("tagName");
        var name = $(this).attr('name');
        if (elm == "SELECT" || elm == "TEXTAREA"){
          data[name] = $(this).val();
        } else {
          var type = $(this).attr('type');
          if (type == "text" || type == "hidden"){
            data[name] = $(this).val();
          } else {
            if (type == "radio" && $(this).is(':checked')) {
              data[name] = $(this).val();
            } else if (type == "checkbox" && $(this).is(':checked')) {

              data[name] = data[name] == undefined ? $(this).val() : data[name] + "," + $(this).val();
            }
          }
        }
      });

      $.ajax({
        url: action,
        type: 'POST',
        dataType: 'json',
        data: data,
        timeout: 1000,
      }).done(function(data){
        if (data['RESULT'] == 'SUCCESS' || data['RESULT'] == 'ERROR') {
        
          $('#form1').attr('action', data['URI']);
          $('#form1').submit();
          return false;
        } else if (data['RESULT'] == 'INPUT ERROR') {
          $('[name="session_token"]').val(data['TOKEN']);

          var errMsg = data['ERR_MSG']
          var emsg = '以下の項目を正しく入力してください<br>';
          var position = $('#CONTACT').offset().top;

          console.log(position);


           for(em in errMsg) {
            emsg += "・" + errMsg[em] + "<br>";
            var elm = $('[name="' + em +'"]');
          }
          $('#err-box').remove();
          $('#err-msg-all').after('<div id="err-box"><span class="chat-err-msg">' +  emsg + '</span></div>');

          $('body,html').animate({ scrollTop: position });




          return false;
        }
      }).fail(function(data, status){
          return false;
          location.href = "../error/";
      });

    } else{
        changeQFormTel1();
        changeQFormMail();
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*4)-errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+((nextw*4)+errw)+'px'},'fast');
        $('div.formbox').find('table').animate({'marginLeft':'-'+(nextw*4)+'px'},'fast');
    }
}


function resizeSlide(){
    var i,w;
    if(location.pathname.match(/\/input-f/)){
        w = 1280;
    } else{
        w = 1000;
    }
    if($(document).width()>=w){
        nextw = 940;
    } else{
        nextw = window.innerWidth-24;
    }
    $('form').find('table').parent().css('width', nextw+'px');
    $('form').find('table').css('width', (nextw*5)+'px');
    $('form').find('table td').css('width', nextw+'px');

    // for(i=1;i<=5;i++){
    //     if( $('form').find('table td:nth-child('+i+') div').css('display')!='none'){
    //         showStep(i);
    //     }
    // }
}
$(function(){
    resizeSlide();
    // カナ自動入力
    $.fn.autoKana('#sei', '#seikana', { katakana: true });
});
$(window).resize(function(){
    //resizeSlide();
});


function showStep1(){ showStep(1); }
function showStep2(){ showStep(2); }
function showStep3(){ showStep(3); }
function showStep4(){ showStep(4); }
function showStep5(){ showStep(5); }

function showStep(n){

    var w = nextw * (n-1);
    if(w){ w = '-'+w;}

    current_page = n;

    $('div.formbox').find('table').animate({'marginLeft':+w+'px'});
    for(i=1;i<=5;i++){
        if( i == n){
            $('form').find('table td:nth-child('+i+') div').show();
        } else{
            $('form').find('table td:nth-child('+i+') div').hide();
        }
    }

    if(n != 1) {
        $('html,body').animate({ scrollTop: $('#CONTACT').offset().top }, 500);
    }

    nextStep();

}

function isEmail(v){
    if( 
        !v.match(/^[0-9a-z]([-a-z0-9+._]*[0-9a-z])?@[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\.[a-z]+$/i) ||
        v.length   > 255
    ){
        return false;
    }
    return true;
}


// 全角です
function isZen(v){
    return v.match(/^[^ -~｡-ﾟ]+$/); // True is Zen.
}

// 全角カナです
function isZenKana(v){
    v = v.replace(/　/g, '');
    return v.match(/^[\u30A0-\u30FF]+$/); // True is ZenKana.
}


function nextStep() {
  let result = '';
  switch (current_page) {
    case 1:
      if (!validQFormQualification()) {
        result = 'qualification';
        break;
      }
      result = 'next2';
      break;
    case 2:
      if (!validQFormEmployment()) {
        result = 'employment';
        break;
      }
      if (!validQFormHopeSeason()) {
        result = 'season';
        break;
      }
      result = 'next3';
      break;

    case 3:
      if (!validQFormZip() && validZipCode) {
        result = 'zip';
        break;
      }
      if (!validQFormPrefId()) {
        result = 'pref';
        break;
      }
      if (!validQFormAddress()) {
        result = 'address';
        break;
      }
      result = 'next4';
      break;
    case 4:
      if (!validQFormSei()) {
        result = 'sei';
        break;
      }
      if (!validQFormSeikana()) {
        result = 'seikana';
        break;
      }
      if (!validQFormBirthday()) {
        result = 'birthday';
        break;
      }
      result = 'next5';
      break;
    case 5:
      if (!validQFormTel1()) {
        result = 'tel';
        break;
      }
      if (!validQFormMail()) {
        result = 'mail';
        break;
      }
      result = 'submit';
      break;
  }

  const result_top = $('.offset_' + result).offset().top;
  let btn_box_number =  current_page + 1;

  //ボタン活性処理
  if(result.indexOf('next') != -1) {
    $('.offset_next' + btn_box_number + ' .btn.next').removeClass('off');
    $('.offset_next' + btn_box_number + ' .btn.next02').removeClass('off');
  } else {
    $('.offset_next' + btn_box_number + ' .btn.next').addClass('off');
    $('.offset_next' + btn_box_number + ' .btn.next02').addClass('off');
  }

  if(btn_box_number == 6 && result != 'submit') {
    $('.offset_submit').addClass('off');
  }
 
  if (result === 'submit') {
    $('.offset_submit.off').removeClass('off');
    $('.navigate_neko.com_pc,.navigate_neko.com_sp').offset({ top: result_top + 20 });
  } else if(result === 'qualification'){
    $('.navigate_neko.com_pc,.navigate_neko.com_sp').css('top','28%');
  } else {
    $('.navigate_neko.com_pc,.navigate_neko.com_sp').offset({ top: result_top - 20 });
  }
}
