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
		setTimeout(fifthSlider,2500);
		setTimeout(sixthSlider,2750);
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
	if (!$(quoteFour)[0].style.right) {
		$(quoteFour).stop().animate({
			right: '-140px'
		}, 400);
		$(quoteFour).animate({
			right: '-90px'
		}, 400);
	}
}

function fifthSlider() {
	if (!$(quoteFive)[0].style.left) {
		$(quoteFive).stop().animate({
			left: '-150px'
		}, 400);
		$(quoteFive).animate({
			left: '-50px'
		}, 400);
	}
}

function sixthSlider() {
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
	if (topOfScreen >= $(quoteFour).offset().top - 500 &&
		topOfScreen <= $(quoteFour).offset().top) {
			firstSlider();
			secondSlider();
			thirdSlider();
			forthSlider();
	}
	if (topOfScreen >= $(quoteFive).offset().top - 500 &&
		topOfScreen <= $(quoteFive).offset().top) {
			firstSlider();
			secondSlider();
			thirdSlider();
			forthSlider();
			fifthSlider();
	}
	if (topOfScreen >= $(legalAndLinks).offset().top - 600 &&
		topOfScreen <= $(legalAndLinks).offset().top) {
			firstSlider();
			secondSlider();
			thirdSlider();
			forthSlider();
			fifthSlider();
			sixthSlider();
	}
}	