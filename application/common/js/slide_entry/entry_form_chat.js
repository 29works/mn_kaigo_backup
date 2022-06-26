
// mouseover script
// @param なし
// @return なし
jQuery(function imgOver($) {
    $('img, input:image').each(function() {
        var node = this;

        if(
            !node.src.match(/\/top_src_tb0[0-9]_/) &&
            node.src.match("_off.")
        ) {
            node.originalSrc = node.src;
            node.temporarySrc = node.originalSrc.replace(/_off/,'');
            node.rolloverSrc = node.temporarySrc.replace(/(\.gif|\.jpg|\.png)/,'_on'+"$1");
            node.activeSrc = node.temporarySrc.replace(/(\.gif|\.jpg|\.png)/,'_active'+"$1");
            //画像のプリロード処理開始
            preloadImage(node.rolloverSrc);
            //Mouseover
            node.onmouseover = function() {
                if(this.className!='active') {
                    this.src = this.rolloverSrc;
                }
            }
            //Mouseout
            node.onmouseout = function() {
                if(this.className!='active') {
                    this.src = this.originalSrc;
                }
            }
        }
    });
});


// 画像のプリロードを行う関数
// @param string 画像のパス
// @return なし
preloadImages = [];
preloadImage = function(path) {
    var pre = preloadImages;
    var len = pre.length;
    pre[len] = new Image();
    pre[len].src = path;
}

$(document).ready(function(){
 
	$(window).scroll(function () {
        scrollHeight = $(document).height(); 
        // ドキュメントの高さ
        //scrollPosition = $(window).height() + $(window).scrollTop(); 
        //scrollPosition = $(window).height() + $(window).scrollTop();
        scrolltop = $(window).height();
        btnHeight = $('#Contents').offset().top;
        btnHeight2 = btnHeight - scrolltop
        //btnHeight = $("#SCHBX .mainbx .inner .wrkdet .detbtnbx").innerHeight();
        if ($(this).scrollTop() > 153){
            $('header .navbox').addClass("fx");
        } else  {
            $('header .navbox').removeClass("fx");
        }
    });

    $('input[name="q_form_mail"]').mailcomplete();
});

$(function Slide(){
	$("#Mainbox .voicebox .voicein .voicect .asrbox .asrin").hide();
	$('#Mainbox .voicebox .voicein .voicect .asrbox .btn a').click(function(){
	    if($(this).parents(".btn").next(".asrin").is(":hidden")){
		    $(this).parents(".btn").next(".asrin").show();s
		    $(this).addClass("on");
		} else {
		    $(this).parents(".btn").next(".asrin").hide();
		    $(this).removeClass("on");
		}
		return false;
	});
});

//ページスクロール
jQuery(function pagetop($) {
	$('.pagetop a').click(function () {
		$(this).blur();

		if (window.opera)
		{
			$('html').animate({ scrollTop: 0 }, 'fast');
		}else{
			$('html,body').animate({ scrollTop: 0 }, 'fast');
		}
		return false;
	});
});

jQuery(function anker($) {
	$(".anklnkjs a").click(function() {
		var myHref= $(this).attr("href");
		var myPos = $(myHref).offset().top;
		
		$("body,html").animate({scrollTop : myPos}, 600);
		//$("body,html").animate({scrollTop : myPos - 79}, 500);
		return false;
	});
});