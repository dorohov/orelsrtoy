'use strict';

$(function() {
	
	var 
		map_area = $('#map-nyegorka'),
		map_area_center = {		
			center: [52.991885, 36.038617], // расположение района
			zoom: 15,
			controls: ['smallMapDefaultSet']
		},
		map_area_block;
	
	var initYandexMapGlonass = function() {
		
		map_area_block = new ymaps.Map('map-nyegorka', map_area_center, {
			//searchControlProvider: 'yandex#search'
		});

		 // Создание метки со сложной фигурой активной области.
	    var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="property-adv__map-container"><div class="property-adv__map-icon"><svg class="icon-svg icon-area-map" role="img"><use xlink:href="/img/svg/sprite.svg#area-map"></use></svg></div><div class="property-adv__map-layout">Новая Наугорка</span></div></div>');
		var map_placemark = new ymaps.Placemark([52.992856, 36.041289], {
			hintContent: ''
		}, {
			iconLayout: polygonLayout
		});

		
	    var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                   	[52.98788408750353,36.041449542327854],
						[52.98936021628733,36.03835963754272],
						[52.99245474279458,36.03537702111816],
						[52.99263600522194,36.03557014016721],
						[52.993529358873616,36.03413247613525],
						[52.9941896518113,36.03539847879026],
						[52.99596332966611,36.03859567193601],
						[52.99527069774978,36.03979730157461],
						[52.99611868482188,36.04099893121328],
						[52.99532895694524,36.04232930688472],
						[52.994578054682734,36.041170592590305],
						[52.994137864496565,36.04196452645872],
						[52.99363293490726,36.041363711639384],
						[52.992907897429596,36.042758460327136],
						[52.9933739943551,36.04350947885129],
						[52.99289495022061,36.04426049737547],
						[52.993723563731926,36.04554795770262],
						[52.992428848099685,36.04807996301268],
						[52.98788408750353,36.041449542327854]
	                ]
	            ],
	            fillRule: "nonZero"
	        },
	        /*properties:{
	            // Содержимое балуна.
	            balloonContent: "Многоугольник"
	        }*/
	    }, {
	        fillColor: '#009db2',
	        strokeColor: '#009db2',
	        opacity: 0.4,
	        strokeWidth: 5,
	        strokeStyle: 'solid'
	    });


		map_area_block
			.geoObjects
				.add(map_placemark)
		;			
		map_area_block .geoObjects.add(myGeoObject);
			
	}	

	if(map_area.length) {		
		ymaps.ready(initYandexMapGlonass);		
	}
});