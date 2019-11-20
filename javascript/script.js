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
		$('.pl-welcome__button > a').attr('href','profile.html?user=' + getParameterURL('user'))
	}
}

let profile = {
	loadSlider : function() {		
		$('.pl-profile__slider').slick({
			dots: true,
			infinite: false,
			draggable: false,
			swipe: false,
			speed: 300,
			slidesToShow: 1,
			prevArrow: '<img src="./img/icon-prev.png" alt="Power Like - Entel" class="pl-profile__slider__arrow prev-arrow">',
			nextArrow: '<img src="./img/icon-next.png" alt="Power Like - Entel" class="pl-profile__slider__arrow next-arrow">'
		})
	},
	printName : function() {
		$('.pl-welcome__button__boton').attr('href','profile.html?user=' + getParameterURL('user'))
		$('#nameSpan').html(getParameterURL('user'))
	},
	eventLevel : function() {
		var slider1 = document.getElementById('levelCazaofertas'),
			slider2 = document.getElementById('levelGamer'),
			slider3 = document.getElementById('levelSociable'),
			slider4 = document.getElementById('levelViajero'),
			slider5 = document.getElementById('levelInfluencer')


		slider1.oninput = function() {
			profile.validateStars($(this))
		}
		
		slider2.oninput = function() {
			profile.validateStars($(this))
		}

		slider3.oninput = function() {
			profile.validateStars($(this))
		}

		slider4.oninput = function() {
			profile.validateStars($(this))
		}

		slider5.oninput = function() {
			profile.validateStars($(this))
		}
	},
	validateStars : function(object) {
		let $padre = object.parent().parent()
		
		if(0 < object.val() && object.val() < 33) {
			$padre.find('.stats .stars').find('img:nth-child(1)').show()
			$padre.find('.stats .stars').find('img:nth-child(2)').hide()
			$padre.find('.stats .stars').find('img:nth-child(3)').hide()
			$padre.find('.stats .stars').find('img:nth-child(4)').hide()
			$padre.find('.stats .stars').find('img:nth-child(5)').hide()
			object.next().html('Bajo')
			//console.log('bajo')			
		} else if (34 < object.val() && object.val() < 66) {
			$padre.find('.stats .stars').find('img:nth-child(1)').show()
			$padre.find('.stats .stars').find('img:nth-child(2)').show()
			$padre.find('.stats .stars').find('img:nth-child(3)').show()
			$padre.find('.stats .stars').find('img:nth-child(4)').hide()
			$padre.find('.stats .stars').find('img:nth-child(5)').hide()
			object.next().html('Medio')
			//console.log('medio')
		} else if (67 < object.val() && object.val() < 100) {
			$padre.find('.stats .stars').find('img:nth-child(1)').show()
			$padre.find('.stats .stars').find('img:nth-child(2)').show()
			$padre.find('.stats .stars').find('img:nth-child(3)').show()
			$padre.find('.stats .stars').find('img:nth-child(4)').show()
			$padre.find('.stats .stars').find('img:nth-child(5)').show()
			object.next().html('Alto')
			//console.log('alto')
		}
	}
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
	if (window.location.pathname.indexOf('/') > -1 || window.location.pathname.indexOf('/index.html') > -1 || window.location.pathname.indexOf('/powerlike/') || window.location.pathname.indexOf('/powerlike/index.html')) {
		index.nameInput()
	}
}

let load_welcome = function () {
	if (window.location.pathname.indexOf('/welcome.html') > -1) {
		welcome.printName()
	}
}

let load_profile = function () {
	if (window.location.pathname.indexOf('/profile.html') > -1) {
		profile.loadSlider()
		profile.printName()
		profile.eventLevel()
	}
}

function initialize() {
	load_index()
	load_welcome()
	load_profile()
}

$( document ).ready(function() {
	initialize()
})