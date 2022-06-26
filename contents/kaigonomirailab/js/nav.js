$(function(){
    $('.sp_nav_btn').on('click',function(){
      //alert('click');

        var rightVal = 0;
        if($("#nav_menu_sp").hasClass("open")) {
            rightVal = -90;
            $('.black').css({'display':'none'});
            $("#nav_menu_sp").removeClass("open");
        } else {
            $("#nav_menu_sp").addClass("open");
            $('.black').css({'display':'block'});
        }

        $("#nav_menu_sp").stop().animate({
            right: rightVal + '%'
        }, 200);
    });
});
