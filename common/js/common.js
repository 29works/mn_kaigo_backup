$(window).on("load scroll", function () {
	var doch = $(document).height();
	var position = $(this).height() + $(this).scrollTop();
	var foth = $('.l-footer').innerHeight();

	if (doch - position <= foth) {
		$('.footer-fix').slideUp();
	} else if ($(this).scrollTop() > 700) {
		$('.footer-fix').slideDown();
	} else {
		$('.footer-fix').slideUp();
	}
});
