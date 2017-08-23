"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isMDH()?n="md-h":e.isLG()?n="lg":e.isXL()?n="xl":e.isXXL()?n="xxl":e.device()&&(n="device"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,o){if(n.type){var s=e.__resizefunctions[n.type];n.orientation?s[n.orientation].push(o):s.default.push(o)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var o=0;o<e.__resizefunctions[n.type].default.length;o++){var s=e.__resizefunctions[n.type].default[o];s(n)}if(e.__resizefunctions[n.type][n.orientation])for(var o=0;o<e.__resizefunctions[n.type][n.orientation].length;o++){var s=e.__resizefunctions[n.type][n.orientation][o];s(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,n,o,s,t){console.log("Error FECSS: "+n+":"+o+":"+s+": "+JSON.stringify(e)+"\n"+JSON.stringify(t))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,o=jQuery.fn.removeClass,s=jQuery.fn.toggleClass;e.fn.addClass=function(){var o=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),o},e.fn.removeClass=function(){var n=o.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery),$(window).on("load",function(){$(document.body).find(".azbn7-preloader").data("is_loaded",!0)}),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),n=$(".navbar__hamburger-btn").data("body"),o=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(n).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(o).toggleClass("is--open"),$(this).toggleClass("is--active")})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var n=(new Date).getTime();$(document.body).attr("data-created_at",n)}),$(document.body).on("fecss.window.unload",null,{},function(e,n){console.log("body trigger:fecss.window.unload: "+JSON.stringify(n))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,n){console.log("body trigger:fecss.keydown: "+JSON.stringify(n))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,n){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,n){$(function(){})}),$(function(){var e="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(e="msie"),n.indexOf("trident")!=-1&&(e="msie"),n.indexOf("konqueror")!=-1&&(e="konqueror"),n.indexOf("firefox")!=-1&&(e="firefox"),n.indexOf("safari")!=-1&&(e="safari"),n.indexOf("chrome")!=-1&&(e="chrome"),n.indexOf("chromium")!=-1&&(e="chromium"),n.indexOf("opera")!=-1&&(e="opera"),n.indexOf("yabrowser")!=-1&&(e="yabrowser"),n.indexOf("macintosh")!=-1&&(e+=" macintosh "),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var n=$(this),o=$(n.attr("href")).eq(0),s=parseInt(n.attr("data-scrollto-diff"))||0,t=parseInt(n.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:o.offset().top+s},t)}),!function(){var e=$(document.body).find(".azbn7-preloader");if(e.length){var n=!1,o=0,s=e.find(".azbn7-preloader__percent-level"),t=e.find(".azbn7-preloader__percent__value");$(document.body).on("azbn7.preloader.check",null,{},function(e){e.preventDefault(),n&&($(document.body).addClass("is--ready"),$(window).trigger("resize"))}),$(document.body).on("azbn7.preloader.loaded",null,{},function(n){n.preventDefault(),e.data("is_loaded",!0),$(document.body).trigger("azbn7.preloader.check")}),$(document.body).on("click.azbn7.preloader.cancel-btn",".azbn7-preloader .azbn7-preloader__cancel-btn",{},function(o){o.preventDefault(),e.data("is_loaded",!0),n=!0,$(document.body).trigger("azbn7.preloader.check")});var i=setInterval(function(){var a=Math.random();a>.35&&o<100?(o++,s.css({width:o+"%"}),t.html(o),e.data("is_loaded")&&(o+=7)):o>99&&(clearInterval(i),n=!0,$(document.body).trigger("azbn7.preloader.check"))},33)}else $(document.body).removeClass("_preloading")}(),$(".area-plan-item__hover").on("mouseover",function(e){e.preventDefault();var n=$(this),o=n.closest(".area-plan-item__group"),s=o.attr("data-popover-id")||0;o.addClass("is--hover");var t=e.pageX,i=e.pageY;$(".azbn__district-svg__popover").hide();var a=$('.azbn__district-svg__popover[data-popover-id="'+s+'"]'),r=a.parent().offset(),d=t-r.left+a.outerWidth(!0)/2+a.outerWidth(!0);d>a.parent().width()?a.css({top:i-r.top+48+"px",left:t-r.left-a.outerWidth(!0)/2+"px"}).fadeIn("fast"):a.css({top:i-r.top-a.outerHeight(!0)/2+"px",left:t-r.left+a.outerWidth(!0)/2+"px"}).fadeIn("fast")}),$(".area-plan-item__hover").on("mouseout",function(e){e.preventDefault();var n=$(this),o=n.closest(".area-plan-item__group"),s=o.attr("data-popover-id")||0;$('.azbn__district-svg__popover[data-popover-id="'+s+'"]').hide(),o.removeClass("is--hover")}),$(".gallery-category__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".gallery-category__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),$("img").addClass("img-responsive"),$(".text-container__text table").addClass("table table-bordered"),$(".text-container__text .table.table-bordered").wrap('<div class="table-responsive"></div>');var e=window.location.pathname;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$(".news-item__inner").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".news-item__inner").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(".objacts-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".objacts-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(".action-banner__item").on("mouseover",function(e){e.preventDefault(),$(this).addClass("is--hover")}),$(".action-banner__item").on("mouseout",function(e){e.preventDefault(),$(this).removeClass("is--hover")}),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},n={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},o="window-width",s="window-height",t=$(window).outerWidth(!0),i=$(window).outerHeight(!0),a=$("html body").eq(0);t<e.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-xs"),t>e.sm.min&&t<e.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-sm"),t>e.md.min&&t<e.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-md"),t>e.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),o="window-width-lg"),i<n.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),s="window-height-xs"),i>n.sm.min&&i<n.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),s="window-height-sm"),i>n.md.min&&i<n.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),s="window-height-md"),i>n.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),s="window-height-lg"),$("html body").eq(0).addClass(o).addClass(s)})}).trigger("resize"),$(window).on("scroll",function(e){var n=$(document).scrollTop(),o=$(".navbar-site.scroll");o.hasClass("scroll-navbar")?n<=500&&o.removeClass("scroll-navbar"):n>500&&o.addClass("scroll-navbar"),o.hasClass("opacity")?n<=200&&o.removeClass("opacity"):n>200&&o.addClass("opacity"),o.hasClass("fixed")?n<=400&&o.removeClass("fixed"):n>400&&o.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});