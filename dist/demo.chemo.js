(window["webpackJsonpDemo"] = window["webpackJsonpDemo"] || []).push([[2],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nemo = __webpack_require__(11);

var _nemo2 = _interopRequireDefault(_nemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chemo = function () {
  function Chemo() {
    _classCallCheck(this, Chemo);

    this.name = 'Chemo';
    this.pet = new _nemo2.default();
  }

  _createClass(Chemo, [{
    key: 'getPet',
    value: function getPet() {
      return this.pet;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }]);

  return Chemo;
}();

exports.default = Chemo;

/***/ })

}]);