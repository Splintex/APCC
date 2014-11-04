head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$('.js-slick').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		adaptiveHeight: true,
		prevArrow: '.btn-prev',
		nextArrow: '.btn-next'
	});
	$(".js-datepicker").datepicker();
});