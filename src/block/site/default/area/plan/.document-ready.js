$(".action-banner__item").on('mouseover',  function(event){
	event.preventDefault();		
	$(this).addClass("is--hover"); 		
});	
$(".action-banner__item").on('mouseout',  function(event){
	event.preventDefault();		
	$(this).removeClass("is--hover");
});	