'use strict';

$(function() {
	
	var 
		map_area = $('#yandex-map'), 
		map_area_center = {		
			center: [52.971073, 36.052447], // расположение района
			zoom: 13,
			controls: ['smallMapDefaultSet']
		},
		map_area_block;
	
	var initYandexMapGlonass = function() {
		
		map_area_block = new ymaps.Map('yandex-map', map_area_center, {
			//searchControlProvider: 'yandex#search'
		});

		 // Создание метки со сложной фигурой активной области.
	    var polygonLayoutCenter = ymaps.templateLayoutFactory.createClass('<div class="contacts-panel__map-container"><div class="contacts-panel__map-icon"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-panel__map-layout">Центральный офис&nbsp;продаж</div></div>'),
	    polygonLayoutBolhov = ymaps.templateLayoutFactory.createClass('<div class="contacts-panel__map-container  is--small"><div class="contacts-panel__map-icon  is--small"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-panel__map-layout  is--small">Офис&nbsp;продаж «Болховский»</div></div>'),
	    polygonLayoutRiver = ymaps.templateLayoutFactory.createClass('<div class="contacts-panel__map-container  is--small"><div class="contacts-panel__map-icon  is--small"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-panel__map-layout  is--small">Офис&nbsp;продаж «Зареченский»</div></div>');
		var map_placemark_center = new ymaps.Placemark([52.968773, 36.077473], {
			hintContent: ''
		}, {
			iconLayout: polygonLayoutCenter
		}),
		map_placemark_bolhov = new ymaps.Placemark([52.997392, 36.067406], {
			hintContent: ''
		}, {
			iconLayout: polygonLayoutBolhov
		}),
		map_placemark_river = new ymaps.Placemark([52.953464, 36.013132], {
			hintContent: ''
		}, {
			iconLayout: polygonLayoutRiver
		});


		map_area_block
			.geoObjects
				.add(map_placemark_center)
				.add(map_placemark_bolhov)
				.add(map_placemark_river)
		;			
		map_area_block .geoObjects;
			
	}	

	if(map_area.length) {		
		ymaps.ready(initYandexMapGlonass);		
	}
});