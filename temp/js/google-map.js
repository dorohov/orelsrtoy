function initMap() {       
	var coordMapOfficeOne = {lat: 52.9702561, lng: 36.0821053},
		coordMapOfficeTwo = {lat: 52.9720386, lng: 36.0528446},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			styles: styleMapOfficeOne
		},
		optionsMapOfficeTwo = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeTwo.lat, coordMapOfficeTwo.lng),
			styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-dixion-msk'),
		idOfficeTwo = document.getElementById('map-dixion-turgenev'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
		mapOfficeTwo = new google.maps.Map(idOfficeTwo, optionsMapOfficeTwo),
		//iconOfficeOne = '/img/default/icon-map.png',
		iconOfficeOne = {        
	        path: "M-90,453.8v-63.5h45h0.6c15.8,0,33.3,9.6,33.3,31.9c0,22.4-15.9,31.6-34.5,31.6h-0.5H-90z M-68,405.8v31.9h19.2c8.4,0,13.4-7.2,13.4-16.3c0-7.6-5-15.5-13.4-15.5H-60h-8V405.8z M30.2,390.7h26.3l11.7,15.2l36.3-42.2h7.2l-94,116.2H8.5L56,421.8 L30.2,390.7z M120,363.7h8l-46,58.1l25.7,31.6H81l-12.3-16l-34,42.5h-9.2L120,363.7z M247,453.7v-63.1h26.8l25.4,36.6v-36.6h24.3 v63.1h-27.3L270.7,417v36.7H247z M116.9,390.6h24.4v63.2h-24.4V390.6z M-2.8,390.6h24v63.2h-24V390.6z M224.8,399.9 c7.7,6.2,12.8,13.8,12.8,23.6s-5.3,17.1-13,23.3c-7.7,6.1-17.2,9.7-30,9.7c-12.9,0-22.8-3.8-30.4-9.9c-7.7-6.2-12.9-13.4-12.9-23.1 c0-9.6,5.3-17.4,13-23.8c8.7-6.2,17.4-9.2,30.2-9.2C207.3,390.7,217.3,393.6,224.8,399.9z M176.6,423.7c0,11.3,8.8,18.4,17.8,18.4 c8.7,0,18.4-6.4,18.4-18.7c0-11.3-9.2-18-17.8-18C186.4,405.3,176.6,411.4,176.6,423.7z",
	        fillColor: '#0084ff',
	        strokeColor: '#000000',
	        fillOpacity: 1,
	        anchor: new google.maps.Point(200,350),
	        strokeWeight: 0,
	        scale: 0.2
	    },
	    iconCoordOfficeOne = {lat: 52.970534, lng: 36.082065},
	    iconCoordOfficeTwo = {lat: 52.971904, lng: 36.053154}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		}),
	    OfficeTwo = new google.maps.Marker({
			position: iconCoordOfficeTwo,
			map: mapOfficeTwo,
			icon: iconOfficeOne
		});

        /*$(window).on('resize', function() {
			google.maps.event.trigger(map, "resize");
			map.setCenter(coord);
        });*/
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});