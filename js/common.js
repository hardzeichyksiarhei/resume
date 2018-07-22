jQuery(function ($) {

	'use strict';

	// --------------------------------------------------------------------
	// PreLoader
	// --------------------------------------------------------------------

	(function () {
			$('#preloader').delay(200).fadeOut('slow');
	}());


	// --------------------------------------------------------------------
	// Owl Carousal
	// --------------------------------------------------------------------

	(function () {
			$("#review").owlCarousel({
					items: 2
			});
  }());
  
	// --------------------------------------------------------------------
	// Send Form
  // --------------------------------------------------------------------
  
/*   var $contactForm = $('#feedback-form');

  $contactForm.on('submit', function(e) {
		e.preventDefault();
		
		//get the name field value
		var name = $('#name').val();
		//get the name field value
    var email = $('#email').val();
    //get the subject field value
		var subject = $('#subject').val();
		//get the comments
		var message = $('#message').val();
					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/hardzeichyksiarhei@gmail.com',
			method: 'POST',
			data:{
				name: name,
				_replyto: email,
        message: message,
				_subject: subject,
			},
      dataType: 'json',
      beforeSend: function() {
        $contactForm.find('button[type="submit"]').text('Sending...');
      },
      success: function() {
        $contactForm.find('button[type="submit"]').text('Submit');
        iziToast.success({
          title: 'Успех...',
          message: 'Ваше сообщение успешно отправленно',
          maxWidth: 300,
          animateInside: false
        });
        $contactForm.trigger('reset');
      },
      error: function() {
        $contactForm.find('button[type="submit"]').text('Submit');
        iziToast.error({
          title: 'Ooops...',
          message: 'Что-то пошло не так, сообщение не было отправлено. Пожалуйста, попробуйте позже.',
          maxWidth: 300,
          animateInside: false
        });
      }
		});		
		
	}); */


}); // JQuery end