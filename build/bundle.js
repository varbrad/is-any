(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.isOr = factory());
}(this, (function () { 'use strict';

  var index = (a, ...bs) => {
    for (let i = 0; i < bs.length; ++i) {
      if (a === bs[i]) return true;
    }
    return false;
  };

  return index;

})));
