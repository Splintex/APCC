head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

// init slick slider
	$('.js-slick').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		adaptiveHeight: true
	});

//init datepicker
	$(".js-datepicker").datepicker();

// remove any block
	$(".js-remove").on("click",function(){
		$(this).parents(".js-removeable").addClass("is-remove-ready");
	    var timer = setTimeout(function(){
	    	$(".is-remove-ready").remove();
	    }, 300);
	    //clearTimeout(timer);
	    var counter = $(this).parents(".js-removeable-group").find(".js-removeable").length;
	 	//alert(counter);
		if (counter <= 1) {
			$(this).parents(".js-removeable-group").addClass("is-remove-ready");
			var timerGroup = setTimeout(function(){
	    		$(this).parents(".js-removeable-group").remove();
	    	}, 300); 
		}
		return false;
	}); 

	$(".js-masonry").masonry({
 		itemSelector: '.masonry__item',
 		columnWidth: ".masonry__sizer",
 		//gutter: 20
	}); 

// add any block
	$("body").on("click",".js-add-btn",function(){
		var new_el = $(this).attr("data-hidden");
		var html = $("."+new_el).html();
		$(this).before(html);
		return false;
	});



});