'use strict';
$(function() {
	$(document.body).on('translated.owl.carousel', '.owl-carousel', {}, function(event){
		event.preventDefault();		
		var block = $(this);		
		var items = block.find('.owl-item:not(.cloned)');		
		var active = items.filter('.active');		
		var i = active.find('div').attr('data-owl-item');		
		$('.owl-count__item.is--count').html(i);		
	});	
	$('.owl-carousel').trigger('translated.owl.carousel');	
	/*$('.owl-block').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
				nav: false,
			},
			570 : {
				items:2,
			},
			980 : {
				items:3,
			},
			1400 : {
				items:5,
			}
		}
	});	*/
	$('.area-slider__owl').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		items:1,
		//loop: true,
		//mouseDrag: false,
	});	 
	$('.mortgage-header__owl').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 30,
		items:1,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
			},
			767 : {
				items:2,
				margin: 30,
			},
		}
	});	 
	$('.property-slider__owl').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 0,
		items:1,
		//loop: true,
		//mouseDrag: false,
	});	
	$('.houses-layout__owl').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 30,
		items:3,
		loop: true,
		mouseDrag: false, 
		responsive : {
			0 : {
				items:1,
				margin: 0,
			},
			980 : {
				items:2,
			},
			1400 : {
				items:3,
			},
			1700 : {
				items:3,
				margin: 160,
			}
		}
	});	
});