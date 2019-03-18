/* =================================
------------------------------------
	WebUni - Education Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function () {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(10).fadeOut("fast");


	/*------------------
		Gallery item
	--------------------*/
	if ($('.course-items-area').length > 0) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function ($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Realated courses
	--------------------*/
	$('.rc-slider').owlCarousel({
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		margin: 30,
		navText: ['', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			990: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});


	/*------------------
	Accordions
--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function () {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid = $(this).data("cpid");

		$(this).append('<div class="' + cpid + '"></div><div class="progress-info"><h2>' + cpvalue + '%</h2><p>' + cptitle + '</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);


// scroll top 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

}
function buttonsubmit() {

	var myname = $('#name1').val();
	var mynum = $('#Number1').val();
	var mymail = $('#email1	').val();
	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSde7goMFsB0QjepvyiL0rhcK9m-MM_A9YxpsEWQeDGK8RP-Uw/formResponse",
		data: {
			"entry.1773243738": myname,
			"entry.1666317393": mynum,
			"entry.186547906": mymail
		},
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function () {
				window.location.replace("thankyou.html");
			},
			200: function () {
				window.location.replace("thankyou.html");
			}
		}
	});
}
$(".footer-form").hide();
$(document).ready(function () {
	$(".clickme").click(function () {
		$(".footer-form").toggle();
	})



	$(document).ready(function () {
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	});
})

 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn1");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
   modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal) {
	 modal.style.display = "none";
   }
 }





