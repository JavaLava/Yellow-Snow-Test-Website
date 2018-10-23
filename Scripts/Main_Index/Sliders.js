/*
	Copyright Oliver Perry 22/11/2013
*/

$(document).ready(function() {
	setTimeout(firstSlider,1500);
	zoomedOut();
	$(window).resize(function() {
		zoomedOut();
	});
});

function zoomedOut() {
	if ($(window).height() > 938) {
		setTimeout(secondSlider,1750);
		setTimeout(thirdSlider,2000);
		setTimeout(forthSlider,2250);
	} else {
		$(window).scroll(function() {
			showSliders();
		});
	}
}

function firstSlider() {
	if (!$(quoteOne)[0].style.left) {
		$(quoteOne).stop().animate({
			left: '-150px'
		}, 400);
		$(quoteOne).animate({
			left: '-50px'
		}, 400);
	}
}

function secondSlider() {
	if (!$(quoteTwo)[0].style.right) {
		$(quoteTwo).stop().animate({
			right: '-140px'
		}, 400);
		$(quoteTwo).animate({
			right: '-90px'
		}, 400);
	}
}

function thirdSlider() {
	if (!$(quoteThree)[0].style.left) {
		$(quoteThree).stop().animate({
			left: '-150px'
		}, 400);
		$(quoteThree).animate({
			left: '-50px'
		}, 400);
	}
}

function forthSlider() {
	if (!$(legalAndLinks)[0].style.right) {
		$(legalAndLinks).stop().animate({
			right: '-140px'
		}, 400);
		$(legalAndLinks).animate({
			right: '-90px'
		}, 400);
	}
}

function showSliders() {
	var topOfScreen = $(document).scrollTop();
	
	if (topOfScreen >= $(quoteOne).offset().top - 500 &&
		topOfScreen <= $(quoteOne).offset().top) {
			firstSlider();
	}
	if (topOfScreen >= $(quoteTwo).offset().top - 500 &&
		topOfScreen <= $(quoteTwo).offset().top) {
			firstSlider();
			secondSlider();
	}
	if (topOfScreen >= $(quoteThree).offset().top - 500 &&
		topOfScreen <= $(quoteThree).offset().top) {
			firstSlider();
			secondSlider();
			thirdSlider();
	}
	if (topOfScreen >= $(legalAndLinks).offset().top - 500 &&
		topOfScreen <= $(legalAndLinks).offset().top) {
			firstSlider();
			secondSlider();
			thirdSlider();
			forthSlider();
	}
}	