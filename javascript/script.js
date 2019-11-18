$( document ).ready(function() {
	//console.log('Hola mundo')

	var inputValidate = function () {
      // validate phone input
      $('body').find('#name').on('keydown', function(e) {
		$('body').find('.pl-greeting__button').addClass('active')
      })
	}

	if (window.location.pathname === '/profile.html') {
		$('.pl-profile__slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			prevArrow: '<img src="./img/icon-prev.png" alt="Power Like - Entel" class="pl-profile__slider__arrow prev-arrow">',
			nextArrow: '<img src="./img/icon-next.png" alt="Power Like - Entel" class="pl-profile__slider__arrow next-arrow">'
		});
	}
	
	var powerLike = function () {
		inputValidate()
	}

	powerLike()
})