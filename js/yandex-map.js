"use strict";$(function(){var a="yandex-map",t="/bitrix/templates/azbn7theme",s=$("#"+a);if(s.length){var e=s,n={center:[52.971073,36.052447],zoom:13,controls:["smallMapDefaultSet"]},c=function(){var s=new ymaps.Map(a,n,{});$(".azbn__contacts__item").each(function(a){var e=$(this),n=JSON.parse(e.attr("data-contact")||"{}"),c=a>0?"is--small":"",o=ymaps.templateLayoutFactory.createClass('<div class="contacts-panel__map-container '+c+' "><div class="contacts-panel__map-icon"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="'+t+'/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-panel__map-layout">'+n.title+"</div></div>"),i=new ymaps.Placemark(n.coords,{hintContent:""},{iconLayout:o});s.geoObjects.add(i)})};e.length&&ymaps.ready(c)}});