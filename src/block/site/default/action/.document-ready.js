$(".area-plan-item__hover").on('mouseover',  function(event){
	event.preventDefault();		
	$(this).closest('.area-plan-item__group').addClass("is--hover"); 		
});	
$(".area-plan-item__hover").on('mouseout',  function(event){
	event.preventDefault();		
	$(this).closest('.area-plan-item__group').removeClass("is--hover");
});	