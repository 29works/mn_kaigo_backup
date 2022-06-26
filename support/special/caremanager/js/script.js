const $window = $(window),
			showClass = 'is-show',
			animationClass = 'is-animation',
			disabledClass = 'is-disabled';

function caremanagerCommon() {
	const $fixedArea = $('#js-fixed-cv'),
				$pagetop = $('#js-fixed-pagetop'),
				$headerAction = $('#js-header-action');

	$pagetop.find('a').on('click', function(e) {
		$('html, body').animate({scrollTop: 0}, 500, 'swing');
		e.preventDefault();
	});

	function showToggle() {
		if ( $window.scrollTop() > ( $headerAction.offset().top + $headerAction.outerHeight() ) ) {
			$fixedArea.addClass(showClass);
			$pagetop.addClass(showClass);
		} else {
			$fixedArea.removeClass(showClass);
			$pagetop.removeClass(showClass);
		}
	}

	const $item = $('.js-animation');

	function itemAnim() {
		$item.each(function() {
			let elementPos = $(this).offset().top,
					scroll = $window.scrollTop(),
					windowHeight = $window.height() / 1.25;
			if ( scroll > elementPos - windowHeight ) {
				$(this).addClass(animationClass);
			}
		});
	}

	$window.on('load scroll', function() {
		itemAnim();
		showToggle();
	});
}

function caremanagerCv() {
	const $section = $('.cv');

	function fadeIn() {
		let elementPos = $section.offset().top,
				scroll = $window.scrollTop(),
				windowHeight = $window.height() / 2;
		if ( scroll > elementPos - windowHeight ) {
			$section.addClass(animationClass);
		}
	}

	$window.on('load scroll', function() {
		fadeIn();
	});
}

function caremanagerRecruit() {
	const $list = $('#js-recruit-list'),
				$item = $('.recruit-item'),
				$prev = $('#js-recruit-prev'),
				$next = $('#js-recruit-next');

	function itemAnim() {
		$item.each(function() {
			let elementPos = $(this).offset().top,
					scroll = $window.scrollTop(),
					windowHeight = $window.height();
			if ( scroll > elementPos - windowHeight ) {
				$(this).addClass(animationClass);
			}
		});
	}

	$window.on('load scroll', function() {
		itemAnim();
	});

	$window.on('load resize', function() {
		if ( window.matchMedia('screen and (max-width:767px)').matches ) {
			$list.not('.slick-initialized').slick({
				dots: true,
				arrows: false,
				infinite: false,
				speed: 400,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '13.76812vw',
				slidesToShow: 1,
				slidesToScroll: 1,
			});
			$item.matchHeight();
		} else {
			if ( $list.hasClass('slick-initialized') ) {
				$list.slick('unslick');
			}
		}
	});

	$prev.addClass(disabledClass);
	$prev.on('click', function() {
		$list.slick('slickPrev');
	});
	$next.on('click', function() {
		$list.slick('slickNext');
	});

	const itemNum = $item.length - 1;
	$list.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		if ( nextSlide === 0 ) {
			$prev.addClass(disabledClass);
			$next.removeClass(disabledClass);
		} else if ( nextSlide === itemNum ) {
			$prev.removeClass(disabledClass);
			$next.addClass(disabledClass);
		} else {
			$prev.removeClass(disabledClass);
			$next.removeClass(disabledClass);
		}
	});
}

function caremanagerVoice() {
	const $list = $('#js-voice-list'),
				$item = $('.voice-item'),
				$prev = $('#js-voice-prev'),
				$next = $('#js-voice-next');

	$list.slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					centerPadding: '13.76812vw',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		],
	});

	$prev.addClass(disabledClass);
	$prev.on('click', function() {
		$list.slick('slickPrev');
	});
	$next.on('click', function() {
		$list.slick('slickNext');
	});

	$list.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		if ( nextSlide === 0 ) {
			$next.removeClass(disabledClass);
			$prev.addClass(disabledClass);
		} else if ( nextSlide === 3 ) {
			$prev.removeClass(disabledClass);
			$next.addClass(disabledClass);
		}
	});

	$item.matchHeight();
}

$window.on('load', function() {
	$('body').delay(1000).queue(function() {
		$(this).addClass('is-init').dequeue();
	});
	$('#js-caremanager-header').delay(2675).queue(function() {
		$(this).addClass(animationClass).dequeue();
	});
});

caremanagerCommon();
caremanagerCv();
caremanagerRecruit();
caremanagerVoice();