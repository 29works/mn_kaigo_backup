$(document).ready(
  function () {
    var modalFlag = false;
    var modalName = 'favoriteGuide';
    $(".fav").click(
      function () {
           if($(this).hasClass("is-checked")){
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}
             favorite = favorite.replace($(this).attr("id")+'#',"");
             $.cookie('favorite',favorite, { expires:30,path:'/',secure:true});
             $(this).removeClass("is-checked");
             $(this).html('<span class="btn_inner"><i class="icon-star u-color-orange-d"></i>お気に入り</span>');

             var result = favorite.split('#');

             $c = result.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);
           }else{
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}

             var result_new = "";
             if(favorite){
                var result = favorite.split('#');
                for(let i = 0; i < result.length; i++) {
                  if(i <= 8){
                     if(result[i]){
                        result_new = result_new + result[i] + "#";
                     }
                  }
                }
             }

             favorite = $(this).attr("id")+'#'+result_new;
             $.cookie('favorite', favorite, { expires:30,path:'/',secure:true});
             $(this).addClass("is-checked");
             $(this).html('<span class="btn_inner"><i class="icon-check u-color-orange-d"></i>お気に入り済</span>');

             var result2 = favorite.split('#');

             $c = result2.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);

             //お気に入りガイドモーダル
            var _key = $.cookie("favoriteGuide");
            if (!_key){
              modalFav();
            }
           }
         }
      );


    // お気に入りモーダルの処理
    // ---------------------------------------------------------------------------
    var modalFav = function () {
      if (modalFlag == false) {
        //モーダルと一緒にbodyがスクロールしないようにするための処理
        $('body').css('overflow', 'hidden');
        //モーダル表示
        $('.modal[data-modal-name=' + modalName + ']').addClass('is-show');
        $('.l-overlay').fadeIn(400).addClass('js-modalFav')
        modalFlag = true;
      } else {
        closeModalFav();
      }
    }
    var closeModalFav = function () {
      //bodyの固定をもとに戻す
      $('body').removeAttr('style');
      $('.l-overlay').fadeOut(400).removeClass('js-modalFav');
      $('.modal[data-modal-name=' + modalName + ']').removeClass('is-show');
      modalFlag = false;
    }
    var favCookie = function () {
      var _key = $.cookie("favoriteGuide");
      if (_key){
        $.removeCookie("favoriteGuide");
      } else {
        $.cookie("favoriteGuide", "1", { expires: 14, path: "/"});
      }
    }
    $('.l-wrapper').on('click', '.js-modalFav', function () {
      closeModalFav();
    });
    $('.js-favGuideCheck').on('click', function () {
      favCookie();
    });



      $(".favdetail").click(
         function(){
           //if($(this).hasClass("is-checked")){
           if($(".favdetail").hasClass("is-checked")){
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}
             //favorite = favorite.replace($(this).attr("id")+'#',"");
             favorite = favorite.replace($(".favdetail").attr("id")+'#',"");
             $.cookie('favorite',favorite, { expires:30,path:'/',secure:true});
             //$(this).removeClass("is-checked");
             $(".favdetail").removeClass("is-checked");
             $(".favdetailfoot").removeClass("is-done");
             //$(this).html('<span class="btn_inner"><i class="icon-star u-color-orange-d"></i>この求人をお気に入りに保存</span>');
             $(".favdetail").html('<span class="btn_inner"><i class="icon-star u-color-orange-d"></i>この求人をお気に入りに保存</span>');
             $(".favdetailfoot").html('<a href="javascript:void(0);"><i class="icon-star"></i>お気に入り<br>保存</a>');

             var result = favorite.split('#');
             $c = result.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);
           }else{
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}

             var result_new = "";
             if(favorite){
                var result = favorite.split('#');
                for(let i = 0; i < result.length; i++) {
                  if(i <= 8){
                     if(result[i]){
                        result_new = result_new + result[i] + "#";
                     }
                  }
                }
             }

             //favorite = $(this).attr("id")+'#'+result_new;
             favorite = $(".favdetail").attr("id")+'#'+result_new;
             $.cookie('favorite', favorite, { expires:30,path:'/',secure:true});
             //$(this).addClass("is-checked");
             $(".favdetail").addClass("is-checked");
             $(".favdetailfoot").addClass("is-done");
             //$(this).html('<span class="btn_inner"><i class="icon-check u-color-orange-d"></i>お気に入り済</span>');
             $(".favdetail").html('<span class="btn_inner"><i class="icon-check u-color-orange-d"></i>お気に入り済</span>');
             $(".favdetailfoot").html('<a href="javascript:void(0);"><i class="icon-check"></i>お気に入り<br>済</a>');

             var result2 = favorite.split('#');

             $c = result2.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);

             //お気に入りガイドモーダル
             var _key = $.cookie("favoriteGuide");
             if (!_key) {
               modalFav();
             }
           }
         }
      );

      $(".favdetailfoot").click(
         function(){
           if($(this).hasClass("is-done")){
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}
             favorite = favorite.replace($(this).attr("id")+'#',"");
             $.cookie('favorite',favorite, { expires:30,path:'/',secure:true});
             $(this).removeClass("is-done");
             $(".favdetail").removeClass("is-checked");
             $(this).html('<a href="javascript:void(0);"><i class="icon-star"></i>お気に入り<br>保存</a>');
             $(".favdetail").html('<span class="btn_inner"><i class="icon-star u-color-orange-d"></i>この求人をお気に入りに保存</span>');

             var result = favorite.split('#');
             $c = result.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);
           }else{
             var favorite = "";
             if($.cookie('favorite')){favorite = $.cookie('favorite');}

             var result_new = "";
             if(favorite){
                var result = favorite.split('#');
                for(let i = 0; i < result.length; i++) {
                  if(i <= 8){
                     if(result[i]){
                        result_new = result_new + result[i] + "#";
                     }
                  }
                }
             }

             favorite = $(this).attr("id")+'#'+result_new;
             $.cookie('favorite', favorite, { expires:30,path:'/',secure:true});
             $(this).addClass("is-done");
             $(".favdetail").addClass("is-checked");
             $(this).html('<a href="javascript:void(0);"><i class="icon-check"></i>お気に入り<br>済</a>');
             $(".favdetail").html('<span class="btn_inner"><i class="icon-check u-color-orange-d"></i>お気に入り済</span>');

             var result2 = favorite.split('#');

             $c = result2.length - 1;
             if($c < 0){$c = 0;}
             if($c > 10){$c = 10;}
             $('#favcnt').html($c);

             //お気に入りガイドモーダル
             var _key = $.cookie("favoriteGuide");
             if (!_key) {
               modalFav();
             }
           }
         }
      );

      $("#sform .areapr").change(
         function(){
            var id=$(this).val();
            var dataString = 'pr='+ id;

            $.when(
               $.ajax({type: "POST",url: "/r/get_ci.php",data: dataString,cache: false,success:
                  function(html){
                     $("#shikuchoson").html(html);
                  }
               })
            ).done(function() {
               $.getScript("/assets/js/system2.js?1");
            });
         }
      );

      $(".lnpr").change(
         function(){
            var id=$(this).val();
            var dataString = 'pr='+ id;

            $.when(
               $.ajax({type: "POST",url: "/r/get_ln.php",data: dataString,cache: false,success:
                  function(html){
                     $("#rosen").html(html);
                  }
               })
            ).done(function() {
               $.getScript("/assets/js/system2.js?1");
            });
         }
      );

      $("#restbtn").click(
         function(){
$("#ci-default-text").html('市区町村を選択');
$("#ln-default-text").html('路線を選択');
            var elements = document.getElementsByClassName('reset');
            Array.prototype.forEach.call(elements, function( element ){
               element.checked=false;
               element.selectedIndex = 0;
            });
            var elements = document.getElementsByClassName('resettext');
            Array.prototype.forEach.call(elements, function( element ){
               element.value = '';
            });
            // 路線の選択中を外す
            $('.btn-rosen, .is-rosenSet').removeClass('is-checked');
            // 地域・路線のエリアをクリア
            $('#shikuchoson, #rosen').html('');

sendform();
         }
      );

      $("#alllnbtn").change(
         function(){
            var allprbtn = document.getElementById('alllnbtn');
            var elements = document.getElementsByClassName('allln');
            Array.prototype.forEach.call(elements, function( element ){
               if (allprbtn.checked == true) {element.checked=true;}
               else{element.checked=false;}
            });
            sendform();
         }
      );

      $(".reset").change(
         function(){
            sendform();
         }
      );

      $("#select_area").click(
         function(){
            $('.lnpr').prop('disabled', true);//off
            $('.allln').prop('disabled', true);//off
            $('.areapr').removeAttr('disabled');//on
            $('.allpr').removeAttr('disabled');//on
            sendform();
         }
      );

      $("#select_ln").click(
         function(){
            $('.areapr').prop('disabled', true);//off
            $('.allpr').prop('disabled', true);//off
            $('.lnpr').removeAttr('disabled');//on
            $('.allln').removeAttr('disabled');//on
            $(".lnclick").removeClass("u-d-n");
            sendform();
         }
      );
   });

   function sendform(){
/*
    var $form = $('#sform');
    var dataString = $form.serialize();
    $("#ken").html('');
    $("#gai").html('');
    $(".js-count").html('<img src="/assets/images/search/img_loading.gif" class="modal_footLoading" alt="">');
//alert(dataString);
    $.when(
       $.ajax({type: "POST",url: "/r/get_count.php",data: dataString,cache: false,success:
          function(html){
             //alert(html);
             if(html == 0){
                $('.btn-search2').prop('disabled', true);
                $('.btn-search2').addClass('is-disabled');
                $('.svg-search').addClass('icon-search');
                $('.icon-search').removeClass('svg-search');
             }
             else{
                $('.btn-search2').prop('disabled', false);
                $(".btn-search2").removeClass("is-disabled");
                $('.icon-search').addClass('svg-search');
                $('.svg-search').removeClass('icon-search');
             }
             $(".js-count").html(html);
          }
       })
    ).done(function() {
       $("#ken").html('件');
       $("#gai").html('該当求人数');
       //alert('cu1');
//            countUp();
    });
*/
 }
