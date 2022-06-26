/**
 * シングルフォーム
 */

var formH = [];
var formNum = 7;

var singleForm = function (){

  var msgRequired = 'を入力してください';
  var msgRequiredSelect = 'を選択してください';
  var msgZenkaku = 'は全角で入力してください';
  var msgKatakana = 'は全角カナで入力してください';
  var msgDenwa = 'を正しく入力してください';
  var msgCommon = 'を正しく入力してください';
  var msgBirthday = 'に正しい日付を指定してください';
  var msgPlatformDependentChar = 'に使用できない文字が入力されています';
  var msgMaxlength = 'は#MAXLENGTH#文字以下で入力してください';

  var currentForm = 1;
  var formsClass = 'is-form2nd is-form3rd is-form4th is-form5th is-form6th is-form7th';
  var parentName = $('.applicationForm_inner');
  var cl2 = false;
  var cl3 = false;
  var cl4 = false;
  var cl5 = false;
  var cl6 = false;
  var cl7 = false;



  var nextForm = function (){
    $('.js-nextForm').on('click', function(){//次へボタンクリック

      if(currentForm == 1){//1番目のフォーム
        $(this).closest('.l-grid').next('p').each(function(){
          $(this).remove();
        });
        formPosition();
        $('input',this).prop('checked',true);
        $(parentName).addClass('is-form2nd');
        currentForm++;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 2){//2番目のフォーム
        if(cl2 && !$(this).hasClass('is-disabled')){
          formPosition();
          $(parentName).removeClass(formsClass);
          $(parentName).addClass('is-form3rd');
          currentForm++;
          setFormHeight(currentForm);
        } else{
          return false;
        }
        return false;
      }
      if(currentForm == 3){//3番目のフォーム
        if(cl3 && !$(this).hasClass('is-disabled')){
          formPosition();
          $(parentName).removeClass(formsClass);
          $(parentName).addClass('is-form4th');
          currentForm++;
          setFormHeight(currentForm);
        } else{
          return false;
        }
        return false;
      }
      if(currentForm == 4){//4番目のフォーム
        if(cl4 && !$(this).hasClass('is-disabled')){
          formPosition();
          $(parentName).removeClass(formsClass);
          $(parentName).addClass('is-form5th');
          currentForm++;
          setFormHeight(currentForm);
        } else{
          return false;
        }
        return false;
      }
      if(currentForm == 5){//5番目のフォーム
        if(cl5 && !$(this).hasClass('is-disabled')){
          formPosition();
          $(parentName).removeClass(formsClass);
          $(parentName).addClass('is-form6th');
          currentForm++;
          setFormHeight(currentForm);
        } else{
          return false;
        }
        return false;
      }
      if(currentForm == 6){//6番目のフォーム
        if(cl6 && !$(this).hasClass('is-disabled')){
          formPosition();
          $(parentName).removeClass(formsClass);
          $(parentName).addClass('is-form7th');
          currentForm++;
          setFormHeight(currentForm);
          var l = $('.js-required').length;
          var count = 0;
          $('.js-required').each(function() {
            if($(this).hasClass('is-success')){
              count++
            }

          });
          if(count == l && $('.is-error').length == 0){
            $("#submit").attr('disabled', false);
            $("#submit").removeClass('is-disabled');
          } else {
            $("#submit").attr('disabled', true);
            $("#submit").addClass('is-disabled');

          }
        } else{
          return false;
        }
        return false;
      }
    });
  }

  var prevForm = function (){
    $('.js-prevForm').on('click', function(){//戻るボタンクリック
      if(currentForm == 2){
        $(parentName).removeClass(formsClass);
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 3){
        $(parentName).removeClass(formsClass);
        $(parentName).addClass('is-form2nd');
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 4){
        $(parentName).removeClass(formsClass);
        $(parentName).addClass('is-form3rd');
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 5){
        $(parentName).removeClass(formsClass);
        $(parentName).addClass('is-form4th');
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 6){
        $(parentName).removeClass(formsClass);
        $(parentName).addClass('is-form5th');
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
      if(currentForm == 7){
        $(parentName).removeClass(formsClass);
        $(parentName).addClass('is-form6th');
        currentForm--;
        setFormHeight(currentForm);
        return false;
      }
    });
  }


  var checkForm = function (){//チェックボックスの必須
    $('.js-checkForm').on('click', function(){
      var checkLength;
      var name = $(this).attr('data-input-name');

      //クリックされたチェックボックスの親要素を代入
      var parentBody = $(this).closest('.application_body');

      //クリックしたチェックボックスのチェックON/OFF
      if($('input',this).prop('checked')){
        $('input',this).prop('checked',false);
      } else{
        $('input',this).prop('checked',true);
      }

      //チェックされた数
      checkLength = $(':checked',parentBody).length;

      //同じネームを持つチェックボックスにチェックが入っているか確認して、次へボタンを有効にする。
      if(currentForm == 2){//２番目のフォーム
        if(checkLength > 0 && $('.js-nextForm',parentBody).hasClass('is-disabled')){
          $(this).closest('div.l-grid').next('p').remove();

          $('.js-nextForm',parentBody).removeClass('is-disabled');
          cl2 = true;
          return false;
        } else
        if(checkLength == 0){
          if($(this).closest('div.l-grid').find('p').length == 0){
            $(this).closest('div.l-grid').after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem u-mb-xs-20">'+ '希望の働き方' + msgRequiredSelect +'</p>');
          }
          $('.js-nextForm',parentBody).addClass('is-disabled');

          cl2 = false;
          return false;
        }
      }
      if(currentForm == 3){//３番目のフォーム
        if(checkLength > 0 && $('.js-nextForm',parentBody).hasClass('is-disabled')){
          $('.js-nextForm',parentBody).removeClass('is-disabled');
          $(this).closest('div.l-grid').next('p').remove();
          cl3 = true;
          return false;
        } else
        if(checkLength == 0){
          if($(this).closest('div.l-grid').find('p').length == 0){
            $(this).closest('div.l-grid').after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem u-mb-xs-20">'+ name+ msgRequiredSelect +'</p>');
          }
          $('.js-nextForm',parentBody).addClass('is-disabled');
          cl3 = false;
          return false;
        }
      }
    });
    $(".birthday").click(function(){
      //クリックされたインプットの親要素を代入
      var parentBody = $(this).closest('.application_body');

      var elm = $(this).closest('.l-grid');
      var errMsg='';
      var y = $('[name="birth_year"]').val();
      var m = $('[name="birth_month"]').val();
      var d = $('[name="birth_day"]').val();
      if (y && m && d){
        var dt = new Date(y, m-1, d);
        var ndt = new Date();
        if(y == dt.getFullYear() && m-1 == dt.getMonth() && d == dt.getDate() && dt.getTime() <= ndt.getTime()) {
            err = false;
            if(elm.hasClass('is-error')){
              elm.next().remove();
            }
            elm.removeClass('is-error');
            elm.addClass('is-success');
        } else {
            err = true;
            if(!elm.hasClass('is-error')){
                elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ $(this).attr('data-input-name') + msgBirthday +'</p>');
            }
            elm.addClass('is-error');
            elm.removeClass('is-success');
        }
        var l = $('.js-required',parentBody).length;
        var count = 0;
        $('.js-required',parentBody).each(function() {
          if($(this).hasClass('is-success')){
            count++
          }
          if(count == l){
            success = true;
          }
        });
        if(success && !err){//すべての必須項目でエラーがないならボタンをアクティブにする
          $('.js-nextForm',parentBody).removeClass('is-disabled');
          cl5 = true;
        } else {
          $('.js-nextForm',parentBody).addClass('is-disabled');
          cl5 = false;
        }
      }
      return true;
      });
  }

  var required = function (){//入力チェック
    $('.js-required').on('keyup change blur', function(event){
      var evType = event.type;
      var val = 0;
      var elm = $(this);
      var str = $(this).val();
      var inputName = $(this).attr('data-input-name');
      var err = true;
      var success = false;

      //クリックされたインプットの親要素を代入
      var parentBody = elm.closest('.application_body');

      //クリックされたセレクトボックスのバリュー値を代入
      if(elm.hasClass('select')){
        val = $('select',this).val().length;
      }

      if(currentForm == 4){//4番目のフォーム
        requiredSelect(elm);
        if(val > 0 && $('.js-nextForm',parentBody).hasClass('is-disabled')){
          $('.js-nextForm',parentBody).removeClass('is-disabled');
          cl4 = true;
          return false;
        } else
        if(val == 0){
          $('.js-nextForm',parentBody).addClass('is-disabled');
          cl4 = false;
          return false;
        }
      }

      if(currentForm == 5){//5番目のフォーム
        if(inputName == "お名前"){
          requiredStr(elm,str);
          str = str.replace(/ /g, '　');
          if (!err){
            zenkaku(elm,str);
          }
          if (!err){
            maxLength(elm,str);
          }
          if (!err){
            platformDependentCharCheck(elm,str);
          }

        }
        if(inputName == "フリガナ"){
          requiredStr(elm,str);
          str = str.replace(/ /g, '　');
          if (!err){
            zenkaku(elm,str);
          }
          if (!err){
            katakana(elm,str);
          }
          if (!err){
            maxLength(elm,str);
          }
          if (!err){
            platformDependentCharCheck(elm,str);
          }
        }
        allCheck();
        if(success){//すべての必須項目でエラーがないならボタンをアクティブにする
          $('.js-nextForm',parentBody).removeClass('is-disabled');
          cl5 = true;
        } else {
          $('.js-nextForm',parentBody).addClass('is-disabled');
          cl5 = false;
        }
      }

      if(currentForm == 6){//6番目のフォーム
        if(inputName == "都道府県"){
          requiredSelect(elm);
          if(val > 0){
            elm.addClass('is-success');
          } else{
            elm.removeClass('is-success');
          }
        }
        if(inputName == "ご住所"){
          requiredStr(elm,str);
          if (!err){
            maxLength(elm,str);
          }
          if (!err){
            platformDependentCharCheck(elm,str);
          }
        }
        if(inputName == "電話番号" && evType == 'blur'){
          requiredStr(elm,str);
          if (!err){
            telNumber(elm,str);
          }
          if (!err){
            maxLength(elm,str);
          }
          if (!err){
            platformDependentCharCheck(elm,str);
          }
        }
        allCheck();
        if(success){//すべての必須項目でエラーがないならボタンをアクティブにする
          $('.js-nextForm',parentBody).removeClass('is-disabled');
          cl6 = true;
        } else {
          $('.js-nextForm',parentBody).addClass('is-disabled');
          cl6 = false;
        }
      }

      if(currentForm == 7){//7番目のフォーム
        if(inputName == "メールアドレス" && evType == 'blur'){
          requiredStr(elm,str);
          if (!err){
            email(elm,str);
          }
          if (!err){
            maxLength(elm,str);
          }
          if (!err){
            platformDependentCharCheck(elm,str);
          }
        }
        if(inputName == "その他備考"){
          maxLength(elm,str);
          if (!err){
            platformDependentCharCheck(elm,str);
          }
        }
        allCheck();
        if(success){//すべての必須項目でエラーがないならボタンをアクティブにする
          $('#submit').removeClass('is-disabled').prop('disabled',false);
          cl7 = true;
        } else {
          $('#submit').addClass('is-disabled').prop('disabled',true);
          cl7 = false;
        }
      }

      function allCheck(){//すべての必須項目がOKになっているかチェック
        var l = $('.js-required',parentBody).length;
        var count = 0;
        $('.js-required',parentBody).each(function() {
          if($(this).hasClass('is-success')){
            count++
          }
          if(count == l){
            success = true;
          }
        });
      }

      function requiredSelect(elm){
        elm.find('select').each(function(){
          var value = $(this).val();
          if (value == undefined || !value.replace(/^\s+|\s+$/g,'')){
            if(!elm.hasClass('is-error')){
              elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ $(this).attr('data-input-name') + msgRequiredSelect +'</p>');
            }
            elm.addClass('is-error');
            elm.removeClass('is-success');
            } else {
            err = false;
            elm.removeClass('is-error');
            elm.addClass('is-success');
            elm.next().remove();

            }
        });

      }

      function requiredStr(elm, str){// 必須チェック
        value = elm.val();
        if (value == undefined || !value.replace(/^\s+|\s+$/g,'')){
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgRequired +'</p>');
          } else {
            elm.next('p').html(inputName + msgRequired );
          }

          elm.addClass('is-error');
          elm.removeClass('is-success');

        } else {
          err = false;
          elm.removeClass('is-error');
          elm.addClass('is-success');
          elm.next().remove();

        }
      }

      function zenkaku(elm,str){//全角チェック
        if(str.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
          err = false;
          elm.removeClass('is-error');
          elm.addClass('is-success');
          elm.next().remove();
        } else {
          err = true;
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgZenkaku +'</p>');
          } else {
            elm.next('p').html(inputName + msgZenkaku );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }


      function katakana(elm,str){//カタカナチェック
        if(str.match(/^^[ァ-ヾ　]+$/)) {
          err = false;
          elm.removeClass('is-error');
          elm.addClass('is-success');
          elm.next().remove();
        } else {
          err = true;
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgKatakana +'</p>');
          } else {
            elm.next('p').html(inputName + msgKatakana );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }


      function hankakunum(elm,str){//半角数字チェック
        if(str.match(/^\d+$/)) {
          err = false;
          elm.removeClass('is-error');
          elm.addClass('is-success');
          elm.next().remove();
        } else {
          err = true;
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgDenwa +'</p>');
          } else {
            elm.next('p').html(inputName + msgDenwa );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }


      function email(elm,str){//メールアドレスチェック
        if(str.match(/^[0-9a-zA-Z]([-a-zA-Z0-9+._]*[0-9a-zA-Z])?@[a-z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?)*\.[a-zA-Z]+$/i)){
          err = false;
          elm.removeClass('is-error');
          elm.addClass('is-success');
          elm.next().remove();
        } else {
          err = true;
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgCommon +'</p>');
          } else {
            elm.next('p').html(inputName + msgCommon );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }


      function platformDependentCharCheck(elm,str){// 機種依存チェック
        var value= elm.val();
        if (!value) {
          return;
        }
        var dependentStr = "[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡㍻〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼]";
        if( value.match(dependentStr) == null) {
            err = false;
            elm.removeClass('is-error');
            elm.addClass('is-success');
            elm.next().remove();
          } else {
            err = true;
            if(elm.next('p').length == 0){
              elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgPlatformDependentChar +'</p>');
            } else {
              elm.next('p').html(inputName + msgPlatformDependentChar );
            }
            elm.addClass('is-error');
            elm.removeClass('is-success');
          }
      }

      function telNumber(elm,str){// 電話番号チェック
        if((!str.match(/^0[5789]0/) && str.match(/^[0-9]{10,11}$/) && str!='00000000000') ||
            str.match(/^0[5789]0[0-9]{8}$/)){
          err = false;
          if(elm.hasClass('is-error')) {
            elm.next().remove();
          }
          elm.removeClass('is-error');
          elm.addClass('is-success');

        } else {
          err = true;
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ inputName + msgCommon +'</p>');
          } else {
            elm.next('p').html(inputName + msgCommon );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }

      function maxLength(elm,str){// 最大文字長チェック
        var maxLength = elm.attr('maxlength');
        if(!(str && str.length > parseInt(maxLength))) {
          err = false;
          if(elm.hasClass('is-error')) {
            elm.next().remove();
          }
          elm.removeClass('is-error');
          elm.addClass('is-success');

        } else {
          err = true;
          var msg = inputName + msgMaxlength.replace('#MAXLENGTH#', maxLength);
          if(elm.next('p').length == 0){
            elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ msg +'</p>');
          } else {
            elm.next('p').html( msg );
          }
          elm.addClass('is-error');
          elm.removeClass('is-success');
        }
      }

    });
  }

  var convertString = function(){

    // お名前
    $('[name="name"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = convertSingleKatakanaToDoubleKatakana(str);
      str = convertSingleByteSpaceToDoubleByteSpace(str)
      str = convertSingleAlphabetToDoubleAlphabet(str);
      $(this).val(str).change();
      $('[name="name_kana"]').trigger('blur');
    });

    // フリガナ
    $('[name="name_kana"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = convertSingleKatakanaToDoubleKatakana(str);
      str = convertSingleByteSpaceToDoubleByteSpace(str)
      str = hiraganaToKatagana(str);
      $(this).val(str).change();
    });

    // 郵便番号
    $('[name="zip"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = str.replace(/－/g,'-');
      str = convertDoubleNumberToSingleNumber(str);
      $(this).val(str).change();
    });

    // 住所
    $('[name="address"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = convertDoubleByteSpaceToSingleByteSpace(str);
      str = convertSingleKatakanaToDoubleKatakana(str);
      $(this).val(str).change();
    });

    // 電話番号
    $('[name="tel"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = str.replace(/－|-/g,'');
      str = convertDoubleNumberToSingleNumber(str);
      $(this).val(str).change();
    });

    // メールアドレス
    $('[name="email"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = convertDoubleAlphamericToSingleAlphameric(str);
      str = str.replace('ー', '-');
      str = str.replace('。', '.');
      $(this).val(str).change();
    });

    // 備考
    $('[name="cmt"]').on('blur', function(){
      var str = $(this).val();
      str = trimSpace(str);
      str = convertDoubleByteSpaceToSingleByteSpace(str);
      str = convertSingleKatakanaToDoubleKatakana(str);
      $(this).val(str).change();
    });



    function convertDoubleByteSpaceToSingleByteSpace(value) { // 全角空白→半角空白置換
      return  value.replace(/　/g," ");
    }

    function convertSingleByteSpaceToDoubleByteSpace(value) { // 半角空白→全角空白置換
      return  value.replace(/ /g,"　");
    }

    function hiraganaToKatagana(str) { // ひらがな→カタカナ変換
      return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
      });
    }

    function convertSingleKatakanaToDoubleKatakana(str){
      var fullKana     = new Array("ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","゛","。","「","」","、","・","ヲ","ァ","ィ","ゥ","ェ","ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ン","゜");
      var halfKana     = new Array("ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾋﾞ","ﾌﾞ","ﾍﾞ","ﾎﾞ","ﾊﾟ","ﾋﾟ","ﾌﾟ","ﾍﾟ","ﾎﾟ","ﾞ","｡","｢","｣","､","･","ｦ","ｧ","ｨ","ｩ","ｪ","ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ","ｵ","ｶ","ｷ","ｸ","ｹ","ｺ","ｻ","ｼ","ｽ","ｾ","ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ","ﾉ","ﾊ","ﾋ","ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ","ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ","ﾝ","ﾟ");
      for(i = 0; i < 89; i++){
      var re = new RegExp(halfKana[i],"g");
      str=str.replace(re, fullKana[i]);
    }
      return str;
    }

    function convertSingleAlphabetToDoubleAlphabet(str) { // 半角英字→全角英字変換
      return str.replace(/[A-Za-z]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
      });
    }

    function convertDoubleNumberToSingleNumber(str) { // 全角数字→半角数字変換
      return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    }

    function convertDoubleAlphamericToSingleAlphameric(str) { // 全角英数字→半角英数字変換
      return str.replace(/[ａ-ｚＡ-Ｚ０-９．＠＿]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    }

    function trimSpace(str) { // 空白トリム
      return str.replace(/^\s+|\s+$/g,'').replace(/[ 　]+/g,' ');
    }
  }

  var zipChange = function(){
    $('#zip').on('keyup change', function(){
      AjaxZip3.zip2addr(this,'','pref','address');

      // 書き換え処理を待つ
      setTimeout(function(){
        // 都道府県チェック
        if ( $('[name="pref"]').val() != '') {
          $('[name="pref"]').trigger('change');
        }
        if ( $('[name="address"]').val() != '') {
          $('[name="address"]').trigger('change');
        }

      }, 1000);
    });
  }

  var formPosition = function (){
    var speed = 500;
    var target = $('.applicationForm');

    if( target.length < 1 ) return false;
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  }
  var submitData = function(){
    $("#submit").click(function(){
      // ボタンを無効化
      $("#submit").attr('disabled', true);
      $("#submit").addClass('is-disabled');

      // エラーメッセージを消去
      if ($('div.resultTxt').length != 0 ){
        $('div.resultTxt').remove();
      }

      var action = "index.php";

      var data = new Object;

      $('.applicationForm').find("select,input,textarea").each(function(){
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
          $('<form/>', {action: data['URI'], method: 'post'})
          .append($('<input/>', {type: 'hidden', name: 'result', value: 'complete'}))
          .appendTo(document.body)
          .submit();
        } else if (data['RESULT'] == 'INPUT ERROR') {

          // 入力チェックエラー処理

          // トークンの書き換え
          $('[name="session_token"]').val(data['TOKEN']);

          // エラーメッセージの削除
          $('p.u-color-red-d').remove();

          var errMsg = data['ERR_MSG']
          var emsg = '以下の項目を正しく入力してください<br>';
          for(em in errMsg) {
            emsg += "・" + errMsg[em] + "<br>";
            var elm = $('[name="' + em +'"]');
            var type = $('[name="' + em +'"]').attr('type');

            var tagName = elm.prop('tagName');
            if (type == "checkbox" || type == "radio") {
              elm.closest('div.l-grid').after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ errMsg[em] +'</p>');
              elm.closest('div.l-grid').addClass('is-error');
              elm.closest('div.l-grid').removeClass('is-success');
            } else if (tagName == "SELECT"){
              if(em == 'birth_year'){
                elm.closest('div.l-grid').after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ errMsg[em] +'</p>');
                elm.closest('div.l-grid').addClass('is-error');
              } else {
                elm.closest('label').after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ errMsg[em] +'</p>');
                elm.closest('label').addClass('is-error');
              }
            } else {
              elm.after('<p class="u-ta-left u-color-red-d u-fw-b u-fz-xs-13rem">'+ errMsg[em] +'</p>');
              elm.addClass('is-error');
            }
          }

          // 画面上部にエラーメッセージを表示
          $('.application_body > h2').each(function(){
            $(this).after('<div class="resultTxt u-mb-xs-10"><p class="u-ta-left">'+ emsg + '</p>');
          });

          // 先頭画面の表示
          $('.applicationForm_inner').removeClass(formsClass);
          var step = '';
          if (data['ERR_STEP'] == 2) {
            step = 'is-form' + data['ERR_STEP'] +'nd';
          } else if (data['ERR_STEP'] == 3) {
            step = 'is-form' + data['ERR_STEP'] +'rd';
          } else if (data['ERR_STEP'] != 1) {
            step = 'is-form' + data['ERR_STEP'] +'th'
          }
          currentForm = data['ERR_STEP'];
          $('.applicationForm_inner').addClass(step).find('.js-prevForm');
        }
      }).fail(function(data, status){
        if (status == 'timeout'){
          $("#submit").attr('disabled', false);
          $("#submit").removeClass('is-disabled');
        } else {
          location.href = "../application/error/";
        }

      });


    });
  }

  nextForm();
  prevForm();
  checkForm();
  convertString();
  required();
  zipChange();
  submitData()
}



//各フォームの高さ取得
var getFormHeight = function (){
  for ( var i = 0;  i < formNum;  i++  ) {
    formH.push($(".applicationForm_inner .applicationForm_item").eq(i).height() + 40);
  }

  //最初の高さ設定
  setFormHeight(1);
}


//フォーム遷移時にカレントフォームの高さを入れる
var setFormHeight = function (i){
  $('.applicationForm').height(formH[i-1]);
}



$(function(){
  singleForm();
  getFormHeight();
  // カナ自動入力
  $.fn.autoKana('#name', '#name_kana', {katakana:true});
});


/**
 * 特定の箇所でtabを無効
 */

var preventTab = function (){
  $('.js-preventTab').on('keydown', function(e){
    return e.which !== 9;
  });
}

$(function(){
  preventTab();
});
