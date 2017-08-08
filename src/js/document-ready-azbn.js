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
						} else if(items_sm.index(btn) == (items_sm.length - 1)) {
							
							var __pos = _pos + _item_h - _move_me_p_h;
							
							move_me
								.attr('data-translate-y', __pos)
								.css({
									'transform' : 'translateY(-' + __pos + 'px)',
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
		
		//azbn__api__property-selection__form data-target=".azbn__api__property-selection__result"
		//azbn__api__property-selection__result
		//azbn__api__property-selection__result__item data-building-id="0"
		
		$('.azbn__api__property-selection__form').each(function(index){
			
			var form = $(this);
			var form_proxy = $('.azbn__api__property-selection__proxy');
			
			form_proxy.on('azbn.copy', function(){
				
				form.find('input, select').each(function(index){
					
					var input = $(this);
					var name = input.attr('name');
					var _val = input.val();
					
					form_proxy.find('input[name="' + name + '"]').val(_val);
					
				})
				
			});
			
			form_proxy.on('submit.azbn', function(event){
				event.preventDefault();
				
				var _form = form_proxy.clone(true);
				
				/*
				var _input_method = $('<input/>', {
					type : 'hidden',
					name : 'method',
					value : 'iblocks/property/selection',
				});
				
				_input_method.appendTo(_form);
				*/
				
				var _form_s = _form.serialize();
				
				$.post('/api/', _form_s, function(data){
					
					_form.empty().remove();
					
					data = JSON.parse(data);
					
					//console.log(data);
					
					if(data.response && data.response.buildings) {
						
						$('.azbn__api__property-selection__result .azbn__api__property-selection__result__item').hide();
						
						for(var i in data.response.buildings) {
							
							(function(b_id, b){
								
								$('.azbn__api__property-selection__result .azbn__api__property-selection__result__item[data-property-id="' + b_id + '"]').fadeIn('fast');
								
							})(i, data.response.buildings[i]);
							
						}
						
					} else {
						
						$('.azbn__api__property-selection__result .azbn__api__property-selection__result__item').fadeIn('fast');
						
					}
					
				})
				
			});
			
			form.find('input').on('change.azbn keyup.azbn blur.azbn', function(event){
				
				var input = $(this);
				var name = input.attr('name');
				var _val = input.val();
				//console.log(_val);
				
				form_proxy.find('input[name="' + name + '"]').val(_val);
				
				form_proxy.trigger('submit.azbn');
			});
			
			/*
			form.find('select option').on('click', function(event){
				$(this).closest('select').val($(this).attr('value')).trigger('blur');
			});
			*/
			
			
			form.find('select').on('change.azbn blur.azbn', function(){
				
				var sel = $(this);
				var name = sel.attr('name');
				var opt = sel.find('option:selected').eq(0);
				var _val = opt.attr('value');
				//console.log(_val);
				
				form_proxy.find('input[name="' + name + '"]').val(_val);
				
				form_proxy.trigger('submit.azbn');
				//console.log(opt.attr('value'));
				//sel.val(opt.attr('value'));
				//sel.trigger('blur.azbn');
				//alert(opt.attr('value'));
			});
			
			form_proxy.trigger('azbn.copy');
			
		});
		
		
		
		
		
		$(document.body).on('click', '.azbn__news-list__btn', {}, function(event){
			
			var btn = $(this);
			
			$('.azbn__news-list .azbn__news-list__item').fadeIn('fast');
			
			btn.empty().remove();
			
		});
		(function(){
			
			$('.azbn__news-list .azbn__news-list__item').each(function(index){
				
				if(index > 2) {
					$(this).hide();
				}
				
			});
			
		})();
		
		
		
		
		
		
		
		$('.azbn__building-list__btn').empty().remove();
		/*
		$(document.body).on('click', '.azbn__building-list__btn', {}, function(event){
			
			var btn = $(this);
			
			$('.azbn__building-list .azbn__building-list__item').fadeIn('fast');
			
			btn.empty().remove();
			
		});
		(function(){
			
			$('.azbn__building-list .azbn__building-list__item').each(function(index){
				
				if(index > 2) {
					$(this).hide();
				}
				
			});
			
		})();
		*/
		
		
		
		
		
		
		
		
		
		
		
		$('.azbn__apartment__section .azbn__apartment__popover').hide();
		
		if(!screenJS.isXS() && !screenJS.isSM()) {
			
			$('.azbn__apartment__section .azbn__apartment__link.is--free').on({
				
				/*
				click : function(){
					event.preventDefault();
					alert(123);
				},
				*/
				
				mouseover : function(event){
					event.preventDefault();
					
					var btn = $(this);
					
					var info = JSON.parse(btn.attr('data-popup-info'));
					console.log(info);
					var popover = btn.closest('.azbn__apartment__section').find('.azbn__apartment__popover');
					
					popover.find('.azbn__apartment__popover__title').html(info.title);
					popover.find('.azbn__apartment__popover__img').attr('src', info.img);
					popover.find('.azbn__apartment__popover__area_total').html(info.area_total);
					popover.find('.azbn__apartment__popover__price_value').html(info.price_value);
					
					popover
						.css({
							'left' : btn.position().left + btn.outerWidth(true) + 42 + 'px',
							//'right' : 'inherit',//btn.position().left + btn.outerWidth(true) + 20 + popover.outerWidth(true) + 'px',
							'top' : btn.parent().position().top + (btn.outerHeight(true) / 2) - (popover.outerHeight(true) / 2) + 'px',
						})
						.fadeIn('fast')
					;
					
				},
				
				mouseout : function(event){
					event.preventDefault();
					
					var btn = $(this);
					
					var popover = btn.closest('.azbn__apartment__section').find('.azbn__apartment__popover');
					
					popover.hide();
					
				},
				
			});
			
		}
		
		
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
				
				$('#modal-message-formsave-result').modal();
				
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