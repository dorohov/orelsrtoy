'use strict';
$(function() {
	$("#fil_cost").ionRangeSlider({
		type: "double",
		grid: false,
		min: 900000,
		max: 4500000,
		from: 900000,
		to: 4500000,
		step: 100000
	});
});