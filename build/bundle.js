(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.isOr = factory());
}(this, (function () { 'use strict';

	var index = () => 150;

	return index;

})));
