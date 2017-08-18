"use strict";!function(){$(function(){if($(".azbn__property-gallery").each(function(e){var t=$(this),n=t.find(".azbn__property-gallery__move-me"),a=t.find(".azbn__property-gallery__item_full"),_=n.find(".azbn__property-gallery__item_sm"),i=t.find(".azbn__property-gallery__next"),r=t.find(".azbn__property-gallery__prev");_.length&&(_.each(function(e){var t=$(this),n=t.position().top;t.attr("data-position-top",n).attr("data-item-index",e+1)}),_.on("click.azbn",function(e){e.preventDefault();var t=$(this),i=t.attr("data-photo-id")||0,r=a.filter('[data-photo-id="'+i+'"]').eq(0);if(!screenJS.isXS()){var o=parseInt(t.attr("data-position-top")),s=(parseInt(t.attr("data-item-index")),n.outerHeight(!0)),p=n.parent().outerHeight(!0),l=t.outerHeight(!0);if(s-o+l>p)n.attr("data-translate-y",o).css({transform:"translateY(-"+o+"px)"});else if(_.index(t)==_.length-1){var c=o+l-p;n.attr("data-translate-y",c).css({transform:"translateY(-"+c+"px)"})}}_.filter(".is--active").removeClass("is--active"),t.addClass("is--active"),a.filter(".is--active").removeClass("is--active"),r.addClass("is--active")}),i.on("click.azbn",function(e){e.preventDefault();var t=($(this),_.filter(".is--active").next());t.length?t.trigger("click.azbn"):_.eq(0).trigger("click.azbn")}),r.on("click.azbn",function(e){e.preventDefault();var t=($(this),_.filter(".is--active").prev());t.length?t.trigger("click.azbn"):_.eq(-1).trigger("click.azbn")}))}),$(".azbn__api__property-selection__form").each(function(e){var t=$(this),n=$(".azbn__api__property-selection__proxy"),a=t.find(".azbn__api__form__btn");t.data("in-request",0),n.on("azbn.copy",function(){t.find("input, select").each(function(e){var t=$(this),a=t.attr("name"),_=t.val();n.find('input[name="'+a+'"]').val(_)})}),$(".azbn__api__property-selection__result .azbn__api__property-selection__result__item._in-process").hide(),$(".azbn__api__property-selection__result .azbn__api__property-selection__result__item._no-results").hide(),n.on("submit.azbn",function(e){e.preventDefault();var a=n.clone(!0),_=parseInt(t.data("in-request"));if(!_){$(".azbn__api__property-selection__result .azbn__api__property-selection__result__item").hide(),$(".azbn__api__property-selection__result .azbn__api__property-selection__result__item._in-process").fadeIn("fast");var i=a.serialize();t.data("in-request",1),$.post("/api/",i,function(e){if(t.data("in-request",0),a.empty().remove(),e=JSON.parse(e),e.response&&e.response.buildings)if($(".azbn__api__property-selection__result .azbn__api__property-selection__result__item").hide(),Object.keys(e.response.buildings).length>0)for(var n in e.response.buildings)!function(e,t){$('.azbn__api__property-selection__result .azbn__api__property-selection__result__item[data-property-id="'+e+'"]').fadeIn("fast")}(n,e.response.buildings[n]);else $(".azbn__api__property-selection__result .azbn__api__property-selection__result__item").hide(),$(".azbn__api__property-selection__result .azbn__api__property-selection__result__item._no-results").fadeIn("fast");else $(".azbn__api__property-selection__result .azbn__api__property-selection__result__item:not(._in-process):not(._no-results)").fadeIn("fast")})}}),t.find("input").on("change.azbn keyup.azbn blur.azbn",function(e){var t=$(this),a=t.attr("name"),_=t.val();n.find('input[name="'+a+'"]').val(_)}),t.find("select").on("change.azbn blur.azbn",function(){var e=$(this),t=e.attr("name"),a=e.find("option:selected").eq(0),_=a.attr("value");n.find('input[name="'+t+'"]').val(_)}),a.on("click.azbn",function(){n.trigger("submit.azbn")}),n.trigger("azbn.copy")}),$(document.body).on("click",".azbn__news-list__btn",{},function(e){var t=$(this);$(".azbn__news-list .azbn__news-list__item").fadeIn("fast"),t.empty().remove()}),function(){$(".azbn__news-list .azbn__news-list__item").each(function(e){e>2&&$(this).hide()})}(),$(".azbn__building-list__btn").empty().remove(),$(".azbn__apartment__section .azbn__apartment__popover").hide(),!screenJS.isXS()&&!screenJS.isSM()){var e=function(e,t){var n=e.position(),a=e.offset(),_=t.closest(".owl-stage-outer"),i=e.parent().position().top+e.outerHeight(!0)/2-t.outerHeight(!0)/2+t.outerHeight(!0),r=e.closest(".azbn__apartment__section").outerHeight(!0);e.closest(".azbn__apartment__section").outerWidth(!0);i=i>r?r-t.outerHeight(!0):e.parent().position().top+e.outerHeight(!0)/2-t.outerHeight(!0)/2,i<0&&(i=0);var o=n.left+e.outerWidth(!0)+42,s=a.left+e.outerWidth(!0)+42+t.outerWidth(!0);s>_.offset().left+_.outerWidth(!0)&&(o=n.left-t.outerWidth(!0)-4),t.css({left:o+"px",top:i+"px"}).fadeIn("fast")};$(".azbn__apartment__section").on({mouseover:function(e){},mouseout:function(e){$(this).find(".azbn__apartment__popover").hide()}}),$(".azbn__apartment__section .azbn__apartment__link.is--free").on({mouseover:function(t){var n=$(this);$(".azbn__apartment__section .azbn__apartment__popover").hide();var a=JSON.parse(n.attr("data-popup-info")),_=n.closest(".azbn__apartment__section").find(".azbn__apartment__popover");if(""!=a.img){var i=new Image;i.src=a.img,i.onload=function(){e(n,_)}}_.find(".azbn__apartment__popover__title").html(a.title),_.find(".azbn__apartment__popover__img").attr("src",a.img),_.find(".azbn__apartment__popover__area_total").html(a.area_total),_.find(".azbn__apartment__popover__price_value").html(a.price_value),e(n,_)},mouseout:function(e){var t=$(this),n=t.closest(".azbn__apartment__section").find(".azbn__apartment__popover");n.hide()}})}$(document.body).on("submit",".azbn-api-formsave",{},function(e){e.preventDefault();var t=$(this),n=t.clone(!0),a=t.attr("data-method")||"formsave";n.append($("<input/>",{type:"hidden",name:"method",value:a})),$.post("/api/",n.serialize(),function(e){e=JSON.parse(e),n.empty().remove(),t.trigger("reset"),t.closest(".modal").modal("hide"),$(".azbn-api-formsave-result").html(e.response.message.text),$("#modal-message-formsave-result").modal()})})})}();