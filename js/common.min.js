head.ready(function() {

	$(document).on("click", function(){
        $(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
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

});