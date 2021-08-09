$(document).ready(function () {

// кнопка наверх

	var button = $('.button-up');	
	  $(window).scroll (function () {
	    if ($(this).scrollTop () > 780) {
	      button.fadeIn();
	    } else {
	      button.fadeOut();
	    }
	});	 
	button.on('click', function(){
		$('body, html').animate({
		scrollTop: 0
		}, 800);
		return false;
	});

//плавная прокрутка

	$("nav li a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	return false;
	});	

	
// меню-гамбургер


	if ($(document).width()<=768){
		$(".toggle-nav").toggleClass('active');
	};

	$('.toggle-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.close-nav').toggleClass('active')
		$('nav').toggleClass('active');
	});

	$('.close-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.toggle-nav').toggleClass('active')
		$('nav').toggleClass('active');
		e.preventDefault();
	});

	});







		// 	$(".toggle-nav").click(function () {
	// 	$(".toggle-nav").hide();
	// 	$(".close-nav").show();
	// 	$("nav").show();
	// });
	// 	$(".close-nav").click(function () {
	// 	$(".toggle-nav").show();
	// 	$(".close-nav").hide();
	// 	$("nav").hide();
	// });