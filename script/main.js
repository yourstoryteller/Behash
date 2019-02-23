

$(document).ready(function () {

	$('.ham').click(function () {
		$('.ul').toggleClass('show');
	});
	

	$(window).scroll(function () {
  		var scroll = $(window).scrollTop();

	  	if (scroll > 50) {
	    	$(".fix").addClass('scroll');

	    	$('.ul').css('margin-right', '50px');
	    	$('.a').css('color', '#111');
	  	}

	   else {
		  $(".fix").removeClass('scroll');

		  $('.ul').css('margin-right', '-50px');
		  $('.a').css('color', '#fff');  	
	   }

 	})

	/*
	$('#abo').click(function () {
		$('html,body').animate({scrollTop: 600}, 800);
	});
	*/

	$('a').click(function() {
		var target = '#'+$('this').attr('class');

    	$('html, body').animate({
        	scrollTop: $("target").offset()
    	}, 1500);
	});

	/*
	$("#about").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".about").offset().top()
    	}, 1500);
	});

	$("#services").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".services").offset().top()
        }, 1500);
	});

	$("#team").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".team").offset().top()
    	}, 1500);
	});

	$("#porfolio").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".portfolio").offset().top()
        }, 1500);
	});

	$("#clients").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".clients").offset().top()
    	}, 1500);
	});

	$("#price").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".price").offset().top()
        }, 1500);
	});

	$("#contact").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".contact").offset().top()
        }, 1500);
	});
	*/
	

 	/*
 	// Add smooth scrolling to all links
 	$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== "") {
      	// Prevent default anchor click behavior
      		event.preventDefault();

      	// Store hash
      	var hash = this.hash;

      	// Using jQuery's animate() method to add smooth page scroll
      	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      	$('html, body').animate({
        	scrollTop: $(hash).offset().top
      	}, 800, function(){
   
        	// Add hash (#) to URL when done scrolling (default click behavior)
        	window.location.hash = hash;
      		});
    	} // End if
  	});

	});
	*/
	if($(window).width() < 768) {
   		// change functionality for smaller screens
   			$('.ul').css('color', '#111');
   			$('.a').css('color', '#111');

   			$(window).scroll(function () {
  			var scroll = $(window).scrollTop();

	  		if (scroll > 50) {
	    		$('.a').css('color', '#111');
	  		}

	   		else {
		  		$('.a').css('color', '#111');  	
	   		}

 		})
	}

	
});

