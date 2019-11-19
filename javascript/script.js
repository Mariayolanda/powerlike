let index = {
	nameInput : function() {
		$('#nameInput').on('keyup', function(e) {
			$('.pl-greeting__button').addClass('active')
			$('.pl-greeting__button').attr('href','welcome.html?user=' + $('#nameInput').val())
	
			if($('#nameInput').val() === '') {
				$('.pl-greeting__button').removeClass('active')
				$('.pl-greeting__button').attr('href','javascript:void()')
			}
		})
	}
}

let welcome = {
	printName : function() {
		$('#nameSpan').html(getParameterURL('user'))
	}
}

let profile = {
	loadSlider : function() {
		if (window.location.pathname === '/profile.html') {
			$('.pl-profile__slider').slick({
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				prevArrow: '<img src="./img/icon-prev.png" alt="Power Like - Entel" class="pl-profile__slider__arrow prev-arrow">',
				nextArrow: '<img src="./img/icon-next.png" alt="Power Like - Entel" class="pl-profile__slider__arrow next-arrow">'
			})
		}
	},
	
}

let getParameterURL = function (parameter) {
	let pageUrl = decodeURIComponent(window.location.search.substring(1)),
		parameters = pageUrl.split('&'),
		parameterName,
		i

	for (i = 0; i < parameters.length; i++) {
		parameterName = parameters[i].split('=')

		if (parameterName[0] === parameter) {
			return parameterName[1] === undefined ? true : parameterName[1]
		}
	}
}

let load_index = function () {
	index.nameInput()
}

let load_welcome = function () {
	welcome.printName()
}

let load_profile = function () {
	profile.loadSlider()
}

function initialize() {
	load_index()
	load_welcome()
	load_profile()
}

$( document ).ready(function() {
	initialize()
})