'use strict';

(function(){

	var azbn_p = 'azbn.';

	var LS = {
		set : function(id,value) {localStorage.setItem(azbn_p + id, value);},
		get : function(id) {var item = localStorage.getItem(azbn_p + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
		remove : function(id) {localStorage.removeItem(azbn_p + id);},
		clear : function() {localStorage.clear();},
		obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
		s2obj : function(id) {var item = this.get(id);if(typeof item != 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
	};
	
	var API = function(_method, _param, cb) {
		
		_param.method = _method || 'default';
		
		$.post('/api/', _param, function(data){
			
			data = JSON.parse(data);
			
			cb(data);
			
		});
		
	}
	
	$(function(){
		
		$(document.body).on('submit', '.azbn-api-formsave', {}, function(event){
			event.preventDefault();
			
			var form = $(this);
			var _form = form.clone(true);
			
			var _method = form.attr('data-method') || 'formsave'
			
			_form
				.append($('<input/>', {
					type : 'hidden',
					name : 'method',
					value : _method,
				}))
			;
			
			$.post('/api/', _form.serialize(), function(data){
				
				data = JSON.parse(data);
				
				_form.empty().remove();
				form.trigger('reset');
				
				form.closest('.modal').modal('hide');
				
				/*
				$('.azbn-api-formsave-result').html(data.response.message.text);
				
				$('#modal-message-formsave-result').modal();
				
				if(form.hasClass('_azbn-service-order-form')) {
					
					Cart.clear();
					
				}
				*/
			});
			
		});
		
	});

})();