$(document).ready(
   function(){
      $("#allprbtn").change(
         function(){
            var allprbtn = document.getElementById('allprbtn');
            var elements = document.getElementsByClassName('allpr');
            Array.prototype.forEach.call(elements, function( element ){
               if (allprbtn.checked == true) {element.checked=true;}
               else{element.checked=false;}
            });
sendform();
         }
      );

      $("#alllnbtn").change(
         function(){
            var allprbtn = document.getElementById('alllnbtn');
            var elements = document.getElementsByClassName('allln');
            Array.prototype.forEach.call(elements, function( element ){
              if (allprbtn.checked == true) {
                element.checked=true;
              } else {
                element.checked=false;
              }
            });
            if (allprbtn.checked == true) {
              $(this).closest('.is-rosenSet').addClass('is-checked');
            } else {
              $(this).closest('.is-rosenSet').removeClass('is-checked');
            }
sendform();
         }
      );

      $(".reset2").change(
         function(){
sendform();
         }
      );

      function sendform(){
/*
         var $form = $('#sform');
         var dataString = $form.serialize();
         $(".js-count").html('<img src="/assets/images/search/img_loading.gif" class="modal_footLoading" alt="">');

         $.when(
            $.ajax({type: "POST",url: "/r/get_count.php",data: dataString,cache: false,success:
               function(html){
                  //alert(html);
                  if(html == 0){
                     $('.btn-search2').prop('disabled', true);
                     $('.btn-search2').addClass("is-disabled");
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
            //alert('cu1');
            //countUp();
         });
*/
      }
   });
