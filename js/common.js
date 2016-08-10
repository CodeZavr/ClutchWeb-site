$(function() {

	// Mob Menu Toggler
	var toggles = $(".n-hamburger");
	var menus = $(".mob-menu");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		var menu = i;
		toggleHandler(toggle, menu);
	};

	function toggleHandler(toggle, menu) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			console.log($(this).next());
			$(".mob-menu").eq( menu ).slideToggle();
		});
	}

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Owl Carousel Sliders
	var owl = $(".slider");

	$(".slider").owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		autoHeight: false,
		navText: ""
	});

	$('.section-2 .slider-nav__prev').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.section-2 .slider-nav__next').click(function() {
		owl.trigger('prev.owl.carousel');
	});

	var owl2 = $('.section-5__slider');
	owl2.owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items: 3,
		navText: "",
		responsiveClass:true,
		autoHeight:false,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			800:{
				items:2,
				nav:true
			},
			1055:{
				items:3,
				nav:true
			}
		}
	});

	$('.section-5 .slider-nav__prev').click(function() {
		owl2.trigger('next.owl.carousel');
	})

	$('.section-5 .slider-nav__next').click(function() {
		owl2.trigger('prev.owl.carousel');
	});

  // Caption Scroll Down
  $(".caption__scroll").click(function() {
  	$("html, body").animate({ scrollTop: $(".header").height()+50 }, "slow");
  	return false;
  });

  $(".rubric__title, .rubric__descr").animated("fadeInRight");

  var serviceDelay = 0;
  $(".service").each(function(){
  	$(this).css("animation-delay", serviceDelay + "s");
  	$(this).animated("zoomIn");
  	serviceDelay += 0.4;
  });

  var menuDelay = 0;
  $(".menu__item").each(function(){
  	$(this).css("animation-delay", menuDelay + "s");
		//console.log($(this).css("animation-delay"));
		$(this).animated('fadeInDown');
		menuDelay += 0.3;
	});

  $(".section-4__title, .section-4__descr, .section-4__button").animated("fadeInLeft");

  $(".slider-2").animated("fadeIn");

  $(".footer__about, .footer__nav, .footer__subscribe").animated("fadeInUp");


  $(".nav__list").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});


});
