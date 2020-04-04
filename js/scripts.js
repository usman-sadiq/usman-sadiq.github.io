/* Template: Portfolio
   Author: Usman
   Created: 3 April 2020
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
		
	});
	/* Wow animations */
	var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
		offset: 0,
        mobile: false,
        live: true
    });
	wow.init();
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    

    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
		
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
			
        });	
    });
    

    


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Call Me Form */
    $("#callMeForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            lformError();
            lsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            lsubmitForm();
        }
    });

    function lsubmitForm() {
        // initiate variables with form content
		var name = $("#lname").val();
		var email = $("#lemail").val();
		var select = $("#lselect").val();
		var select2 = $("#l2select").val();
		var message = $("#lmessage").val();
		
        
       
        $.ajax({
            type: "POST",
            url: "php/callmeform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&select2=" + select2 + "&message=" + message, 
            success: function(text) {
                if (text == "success") {
                    lformSuccess();
                } else {
                    lformError();
                    lsubmitMSG(false, text);
                }
            }
        });
		
	}

    function lformSuccess() {
        $("#callMeForm")[0].reset();
        lsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function lformError() {
        $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function lsubmitMSG(valid, msg) {
        if (valid) {
			var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
	
	
	

   
/* ==== 4) Make header section height of viewport / Minimum height is set to 445px in style.css ==== */

	$(function(){
		$('.header').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('.header').css({'height':($(window).height())+'px'});
		});
	});
	
	
		



	/* disable styling on support plan popup */
	
	$("#maintenance").on('shown.bs.modal', function(){
				$("nav").removeAttr("style");	
});
$("#maintenance").on('show.bs.modal', function(){
				
				
				$("#maintenance").fadeIn(200,"linear");

});
/* disable styling on projects popup */

$(".projects-modal-popup").on('shown.bs.modal', function(){
				$("nav").removeAttr("style");
});

/* disable styling on privacy policy popup */
$("#privacy-policy").on('shown.bs.modal', function(){
				$("nav").removeAttr("style");
				

});
$("#privacy-policy").on('show.bs.modal', function(){
				
				
				$("#privacy-policy").fadeIn(350,"linear");

});



       /* show/hide on support plan select */
	   
	$('select[name="lselect"]').on('change',function(){
		var selectedVal=$(this).val();
		switch(selectedVal){
       case 'Rise':case 'Shine':case 'Grow':
       //Add this into consideration if you have multiple cases where functionality has to be same
                   $('#l2select').fadeOut( "1000" );
             break;
       default: //change this according to your need
                   $('#l2select').fadeIn( "1000" );
             break;
   }
	});
	/* capture support plan button click */
	
	$('#maintenance .modal-body .btn-solid-lg').on('click', function(event) {
  var $button = $(event.target);

  $(this).closest('.modal').one('hidden.bs.modal', function() {
    
	switch($button[0].id){
       case 'Rise':case 'Shine':case 'Grow':
       //Add this into consideration if you have multiple cases where functionality has to be same
	   $('#lselect').val($button[0].id);
	   $("#lname").focus();
	   // jQuery for page scrolling feature - requires jQuery Easing plugin
	$('html, body').animate({
        scrollTop: $(".hire-section").offset().top
    }, 500);
                   $('#l2select').fadeOut( "1000" );
				   
             break;
       default: //change this according to your need
                   $('#l2select').fadeIn( "1000" );
             break;
   }
  });
});

  	
	
	
    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

