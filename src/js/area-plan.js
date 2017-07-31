(function(){
	
	var leavetimeout;
	
	$(document.body).on('click.azbn', '.area-plan-item__object', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var link = block.closest('.area-plan-item__group').attr('data-link') || '';
		
		window.location.href = link;
		
		/*
		var floor = parseInt(block.attr('data-houses-id')) || 0;
		
		var _href = $('.area-plan__block').attr('data-base-url') || '';
		
		if(link != '') {
			window.location.href = link;
		} else {
			window.location.href = _href + floor;
		}
		*/
	});
	
	//$('.area-plan__block').trigger('azbn.area-plan__block.setStatus', [0, 0]);
	
})();