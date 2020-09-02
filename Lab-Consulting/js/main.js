$(function () {

	// модальное окно
	$('.tel-btn').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});

	// Прокрутка
	$("a.go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
	// Слайдер
	 $('.comments__unit').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left "></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right "></i></button>',
    });

});

function initMap() {
		// Google maps
    var CoolMap = {lat: 46.473732, lng: 30.747378};
        var map = new google.maps.Map(document.getElementById('map__block'), {
          zoom: 17,
          center: CoolMap
        });
        var marker = new google.maps.Marker({
          position: {lat: 46.474046, lng: 30.746032},
          map: map
        });
}