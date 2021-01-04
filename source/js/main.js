
// gebug
// [].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)});


$(function() {

	var $bannerSection = $('.banner');
	var $header = $('.main-header');
	var $nav = $('.navbar-nav');

	$(window).scroll(function() {

		var height = $bannerSection.innerHeight();

		if ($(window).scrollTop() > (height - 150)) {
			!$header.hasClass('fixed') && $header.addClass('fixed');
		} else {
			$header.hasClass('fixed') && $header.removeClass('fixed');
		}

	})

	$('a', $nav).click(function(e) {

		e.preventDefault();

		var $this = $(this);
		var hash = $this.attr('href');
		try {
			var offset = $(hash).offset().top;
		} catch(e) { return }

		$nav.find('li').removeClass('active');
		$this.parent().addClass('active');

		$('html,body').stop().animate({
			scrollTop: offset - $header.innerHeight()
		}, 300);

		document.location.hash = hash || '';
	});

})
