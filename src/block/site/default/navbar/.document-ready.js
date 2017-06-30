var url = window.location.pathname;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar__nav-dropdown-menu a[href="'+url+'"]').parent().addClass('is--active'); 