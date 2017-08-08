"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isMDH()?s="md-h":e.isLG()?s="lg":e.isXL()?s="xl":e.isXXL()?s="xxl":e.device()&&(s="device"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,n){if(s.type){var o=e.__resizefunctions[s.type];s.orientation?o[s.orientation].push(n):o.default.push(n)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var n=0;n<e.__resizefunctions[s.type].default.length;n++){var o=e.__resizefunctions[s.type].default[n];o(s)}if(e.__resizefunctions[s.type][s.orientation])for(var n=0;n<e.__resizefunctions[s.type][s.orientation].length;n++){var o=e.__resizefunctions[s.type][s.orientation][n];o(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,s,n,o,t){console.log("Error FECSS: "+s+":"+n+":"+o+": "+JSON.stringify(e)+"\n"+JSON.stringify(t))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,n=jQuery.fn.removeClass,o=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=o.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),s=$(".navbar__hamburger-btn").data("body"),n=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(s).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(n).toggleClass("is--open"),$(this).toggleClass("is--active")})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var s=(new Date).getTime();$(document.body).attr("data-created_at",s)}),$(document.body).on("fecss.window.unload",null,{},function(e,s){console.log("body trigger:fecss.window.unload: "+JSON.stringify(s))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,s){console.log("body trigger:fecss.keydown: "+JSON.stringify(s))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,s){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,s){$(function(){})}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),s.indexOf("macintosh")!=-1&&(e+=" macintosh "),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var s=$(this),n=$(s.attr("href")).eq(0),o=parseInt(s.attr("data-scrollto-diff"))||0,t=parseInt(s.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:n.offset().top+o},t)}),$(".area-plan-item__hover").on("mouseover",function(e){e.preventDefault();var s=$(this),n=s.closest(".area-plan-item__group"),o=n.attr("data-popover-id")||0;n.addClass("is--hover");var t=e.pageX,i=e.pageY;$(".azbn__district-svg__popover").hide();var a=$('.azbn__district-svg__popover[data-popover-id="'+o+'"]'),r=a.parent().offset(),d=t-r.left+a.outerWidth(!0)/2+a.outerWidth(!0);d>a.parent().width()?a.css({top:i-r.top+48+"px",left:t-r.left-a.outerWidth(!0)/2+"px"}).fadeIn("fast"):a.css({top:i-r.top-a.outerHeight(!0)/2+"px",left:t-r.left+a.outerWidth(!0)/2+"px"}).fadeIn("fast")}),$(".area-plan-item__hover").on("mouseout",function(e){e.preventDefault();var s=$(this),n=s.closest(".area-plan-item__group"),o=n.attr("data-popover-id")||0;$('.azbn__district-svg__popover[data-popover-id="'+o+'"]').hide(),n.removeClass("is--hover")}),$(".gallery-category__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".gallery-category__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),$("img").addClass("img-responsive"),$(".text-container__text table").addClass("table table-bordered"),$(".text-container__text .table.table-bordered").wrap('<div class="table-responsive"></div>');var e=window.location.pathname;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$(".news-item__inner").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".news-item__inner").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(".objacts-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".objacts-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(".action-banner__item").on("mouseover",function(e){e.preventDefault(),$(this).addClass("is--hover")}),$(".action-banner__item").on("mouseout",function(e){e.preventDefault(),$(this).removeClass("is--hover")}),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",o="window-height",t=$(window).outerWidth(!0),i=$(window).outerHeight(!0),a=$("html body").eq(0);t<e.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-xs"),t>e.sm.min&&t<e.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-sm"),t>e.md.min&&t<e.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-md"),t>e.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),n="window-width-lg"),i<s.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),o="window-height-xs"),i>s.sm.min&&i<s.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),o="window-height-sm"),i>s.md.min&&i<s.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),o="window-height-md"),i>s.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),o="window-height-lg"),$("html body").eq(0).addClass(n).addClass(o)})}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),n=$(".navbar-site.scroll");n.hasClass("scroll-navbar")?s<=500&&n.removeClass("scroll-navbar"):s>500&&n.addClass("scroll-navbar"),n.hasClass("opacity")?s<=200&&n.removeClass("opacity"):s>200&&n.addClass("opacity"),n.hasClass("fixed")?s<=400&&n.removeClass("fixed"):s>400&&n.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});