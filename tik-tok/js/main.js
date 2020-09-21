/* Параллакс от скролла */
$(function () {
	$(window).bind("scroll", function (e) {
		parallaxScroll();
	});

	function parallaxScroll() {
		var scrolled = $(window).scrollTop();
		$(".teacher__parallax-bg1").css("top", 0 - scrolled * 0.1 + "px");
		$(".teacher__parallax-bg2").css("top", 0 - scrolled * 0.1 + "px");
	}

	// Всплывающее окно
	$(".btn").click(function (e) {
		e.preventDefault();
		$("#exampleModal").arcticmodal();
	});

	// Валидация

	function ValidTel() {
		var testPhone = $(".ks__phone").val();
		var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		var valid = testPhone.match(re);
		if (valid) {
			$(".ks__phone").removeClass("form__error");
			return true;
		} else {
			$(".ks__phone")
				.val("")
				.addClass("form__error")
				.attr("placeholder", "Телефон введён некоректно!");
		}
	}

	function ValidName() {
		var testName = $(".ks__name").val();
		var re = /^^\s*[а-яА-яa-zA-z]+(?:\s+[а-яА-яa-zA-z]+){0,2}\s*$/;
		var valid = testName.match(re);
		if (valid) {
			$(".ks__name").removeClass("form__error");
			return true;
		} else {
			$(".ks__name")
				.val("")
				.addClass("form__error")
				.attr("placeholder", "Имя введено некоректно!");
			return false;
		}
	}

	function validEmail2() {
		var testEmail = $(".ks__email2").val();
		var re = /^([A-Za-z0-9_\-\.]){2,}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var valid = testEmail.match(re);
		if (valid) {
			$(".ks__email2").removeClass("form__error");
			return true;
		} else {
			$(".ks__email2")
				.val("")
				.addClass("form__error")
				.attr("placeholder", "E-mail введён некоректно!");
			return false;
		}
	}

	function ValidTel2() {
		var testPhone = $(".ks__phone2").val();
		var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		var valid = testPhone.match(re);
		if (valid) {
			$(".ks__phone2").removeClass("form__error");
			return true;
		} else {
			$(".ks__phone2")
				.val("")
				.addClass("form__error")
				.attr("placeholder", "Телефон введён некоректно!");
		}
	}

	function ValidName2() {
		var testName = $(".ks__name2").val();
		var re = /^^\s*[а-яА-яa-zA-z]+(?:\s+[а-яА-яa-zA-z]+){0,2}\s*$/;
		var valid = testName.match(re);
		if (valid) {
			$(".ks__name2").removeClass("form__error");
			return true;
		} else {
			$(".ks__name2")
				.val("")
				.addClass("form__error")
				.attr("placeholder", "Имя введено некоректно!");
			return false;
		}
	}

	// 1
	$(".ks__phone").focus(function (e) {
		$(".ks__phone")
			.removeClass("form__error")
			.attr("placeholder", "Ваш телефон");
	});
	$(".ks__name").focus(function (e) {
		$(".ks__name").removeClass("form__error").attr("placeholder", "Ваше имя");
	});

	// 2
	$(".ks__phone2").focus(function (e) {
		$(".ks__phone2")
			.removeClass("form__error")
			.attr("placeholder", "Ваш телефон");
	});
	$(".ks__name2").focus(function (e) {
		$(".ks__name2").removeClass("form__error").attr("placeholder", "Ваше имя");
	});
	$(".ks__email2").focus(function (e) {
		$(".ks__email2")
			.removeClass("form__error")
			.attr("placeholder", "Ваш e-mail");
	});

	$(".ks__form").submit(function (e) {
		e.preventDefault();
		ValidName();
		ValidTel();
		if (ValidName() == true && ValidTel() == true) {
			var name = $(".ks__name").val();
			var phone = $(".ks__phone").val();
			var check = $(".ks__check:checked").val();
			console.log(name);
			console.log(phone);
			console.log(check);
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: { name: name, phone: phone, check: check },
				success: function (msg) {
					console.log(msg);
					console.log("send");
					$(".ks__name").val("");
					$(".ks__phone").val("");
					$("#exampleModal2").arcticmodal({
						beforeOpen: function (data, el) {
							$("#exampleModal").arcticmodal("close");
						},
					});
				},
				error: function (response) {
					// Данные не отправлены
					console.log(response);
					console.log("no Send");
				},
			});
		}
	});

	$(".ks__form2").submit(function (e) {
		e.preventDefault();
		ValidName2();
		ValidTel2();
		validEmail2();
		if (ValidName2() == true && ValidTel2() == true && validEmail2() == true) {
			var name = $(".ks__name2").val();
			var phone = $(".ks__phone2").val();
			var email = $(".ks__email2").val();
			console.log(name);
			console.log(phone);
			console.log(email);
			$.ajax({
				type: "GET",
				url: "reg.php",
				data: { name: name, phone: phone, email: email },
				success: function (msg) {
					console.log(msg);
					console.log("send");
					$(".ks__name2").val("");
					$(".ks__phone2").val("");
					$(".ks__email2").val("");
					$("#exampleModal2").arcticmodal();
				},
				error: function (response) {
					// Данные не отправлены
					console.log(response);
					console.log("no Send");
				},
			});
		}
	});
});
