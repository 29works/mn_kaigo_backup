
$(function() {
    $('.inview').on('inview', function(event, isInView){
        if (isInView) {
            $(this).addClass('inviewFade');
        }
    });
});
