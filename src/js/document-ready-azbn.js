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
		
		$('.azbn__property-gallery').each(function(index){
			
			var block = $(this);
			var move_me = block.find('.azbn__property-gallery__move-me');
			var items_full = block.find('.azbn__property-gallery__item_full');
			var items_sm = move_me.find('.azbn__property-gallery__item_sm');
			var btn_next = block.find('.azbn__property-gallery__next');
			var btn_prev = block.find('.azbn__property-gallery__prev');
			
			if(items_sm.length) {
				
				items_sm.each(function(_index){
					
					var btn = $(this);
					var _pos = btn.position().top;
					
					btn
						.attr('data-position-top', _pos)
						.attr('data-item-index', (_index +1))
					;
					
				});
				
				items_sm.on('click.azbn', function(event){
					event.preventDefault();
					
					var btn = $(this);
					var photo_id = btn.attr('data-photo-id') || 0;
					var full = items_full.filter('[data-photo-id="' + photo_id + '"]').eq(0);
					
					if(!screenJS.isXS()) {
						
						var _pos = parseInt(btn.attr('data-position-top'));
						var _btn_index = parseInt(btn.attr('data-item-index'));
						
						var _move_me_h = move_me.outerHeight(true);
						var _move_me_p_h = move_me.parent().outerHeight(true);
						var _item_h = btn.outerHeight(true);
						
						var _sum_h = _btn_index * _item_h;
						
						if((_move_me_h - _pos + _item_h) > _move_me_p_h) {
							move_me
								.attr('data-translate-y', _pos)
								.css({
									'transform' : 'translateY(-' + _pos + 'px)',
								})
							;
						}
						
					}
					
					items_sm.filter('.is--active').removeClass('is--active');
					btn.addClass('is--active');
					
					items_full.filter('.is--active').removeClass('is--active');
					full.addClass('is--active');
					
				});
				
				btn_next.on('click.azbn', function(event){
					event.preventDefault();
					
					var btn = $(this);
					
					var _next = items_sm.filter('.is--active').next();
					
					if(_next.length) {
						
						_next.trigger('click.azbn');
						
					} else {
						
						items_sm.eq(0).trigger('click.azbn');
						
					}
					
				});
				
				btn_prev.on('click.azbn', function(event){
					event.preventDefault();
					
					var btn = $(this);
					
					var _prev = items_sm.filter('.is--active').prev();
					
					if(_prev.length) {
						
						_prev.trigger('click.azbn');
						
					} else {
						
						items_sm.eq(-1).trigger('click.azbn');
						
					}
					
				});
				
			}
			
		});
		
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