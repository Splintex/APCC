head.ready(function() {

	$(document).on("click", function(){
        $(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
        // $(".js-overlay").fadeOut(300);
        // $(".js-popup").removeClass("is-visible");
        // $("html").removeClass("has-open-popup");
        $(".js-window").fadeOut(300);
        $(".js-open-window").parent().removeClass("is-active");
	});
 

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

    $('.js-slick-col3').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        adaptiveHeight: true
    }); 
    $('.js-slick-col2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        adaptiveHeight: true
    });

    $('.js-slick-calendar').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        onAfterChange: function(index) {
           // var current = $(".js-slider-current");
            var title = $(".js-slick-calendar-title");
            //var index = $('.js-slider').slickCurrentSlide()+1;
            var text = $('.js-slick-calendar').find(".slick-active").attr("data-title");
            title.text(text);
            //current.text(index);
        }
    });
    $(".js-slick-calendar-prev").on("click",function(){
        $('.js-slick-calendar').slickPrev();
    });
    $(".js-slick-calendar-next").on("click",function(){
        $('.js-slick-calendar').slickNext();
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
       // alert();
		var new_el = $(this).attr("data-hidden");
		var html = $("."+new_el).html();
		$(this).before(html);
		return false;
	});

// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
        if ($(this).parents(".js-select").hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            $(this).parents(".js-select").toggleClass("is-active");
            $(this).parents(".js-select").find(".js-select-list").slideToggle(100);
        }
       
    });
    $("body").on("click",".js-select-list a",function() {
        var val = $(this).attr("href");
        var text = $(this).text();
        $(this).parents(".js-select").find(".js-select-text").text(text);
        $(this).parents(".js-select").find("option").removeAttr("selected");
        $(this).parents(".js-select").find('option[value="'+val+'"]').attr("selected", "selected");
        $(this).parents(".js-select-list").find("a").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parents(".js-select").removeClass("is-active").removeClass("is-empty");
        $(this).parents(".js-select-list").slideUp(100);
        return false;
        
    });

// accordion
    $(".js-accordion-title").on("click", function(){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(this).parents(".js-accordion").find(".js-accordion-body").slideUp(200);
        }
        else {
            $(".js-accordion-title").removeClass("is-active");
            $(this).addClass("is-active");
            $(".js-accordion-body").slideUp(200);
            $(this).parents(".js-accordion").toggleClass("is-active").find(".js-accordion-body").slideDown(200)
        }
        
        return false;
    });

// sort
    $(".js-sort-link").on("click", function(){
    	$(this).parents(".js-sort").find("a").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parent().find("input").trigger("click");
    	return false;
    });

// popups
    $(".js-popup-link").on("click", function(event){
        $(".js-overlay").fadeIn(300);
        var popup = $(this).attr("href");
        $("html").addClass("has-open-popup");
        $(".js-popup").removeClass("is-visible");
        $('[data-popup="'+popup+'"]').addClass("is-visible");
        event.stopPropagation();
        return false; 
    });

    $(".js-popup-close").on("click", function(){
        $(".js-overlay").fadeOut(300); 
        $(this).parents(".js-popup").removeClass("is-visible");
        $("html").removeClass("has-open-popup");
        return false;
    });

    $(".js-overlay").on("click", function(){
        $(".js-overlay").fadeOut(300); 
        $(this).parents(".js-popup").removeClass("is-visible");
        $("html").removeClass("has-open-popup");
    });
    // $(".js-overlay").on("click", function(){
    //     $(".js-popup").removeClass("is-visible");
    // });

// window
    $(".js-open-window").on("click", function(event){
        $(".js-open-window").parent().removeClass("is-active");
        $(this).parent().addClass("is-active");
        $(".js-window").fadeIn(300);
        event.stopPropagation();
        return false; 
    });

    $(".js-close-window").on("click", function(){
        $(".js-window").fadeOut(300); 
        $(".js-open-window").parent().removeClass("is-active");
        return false;
    });
    $(".js-window").children().on("click", function(event){
        event.stopPropagation();
    });
    // $(".js-overlay").on("click", function(){
    //     $(".js-popup").removeClass("is-visible");
    // });

	$('input, textarea').placeholder();

});