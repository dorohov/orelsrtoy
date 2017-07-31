
$('.area-plan-item__hover').on('mouseover',  function(event){
	event.preventDefault();		
	
	var block = $(this);
	var uid = block.attr('data-popover-id') || 0;
	
	block.closest('.area-plan-item__group').addClass('is--hover');
	
	var _p_x = event.pageX,
		_p_y = event.pageY
	;
	
	var popover = $('.azbn__district-svg__popover[data-popover-id="' + uid + '"]');
	
	var _parent_offset = popover.parent().offset();
	
	popover
		.css({
			top : _p_y - _parent_offset.top - (popover.outerHeight(true) / 2) + 'px',
			left : _p_x - _parent_offset.left + (popover.outerWidth(true) / 2) + 'px',
		})
		.fadeIn('fast')
	;
	
	console.log(event.pageX);
	
});

$('.area-plan-item__hover').on('mouseout',  function(event){
	event.preventDefault();
	
	var block = $(this);
	var uid = block.attr('data-popover-id') || 0;
	
	$('.azbn__district-svg__popover[data-popover-id="' + uid + '"]').hide();
	
	$(this).closest('.area-plan-item__group').removeClass('is--hover');
	
});
