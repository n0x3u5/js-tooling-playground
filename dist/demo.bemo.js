(window["webpackJsonpDemo"] = window["webpackJsonpDemo"] || []).push([[1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_nemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Bemo = function () {
  function Bemo() {
    _classCallCheck(this, Bemo);

    this.name = 'Bemo';
    this.pet = new _shared_nemo__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Bemo, [{
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

  return Bemo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bemo);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nemo = function () {
  function Nemo() {
    _classCallCheck(this, Nemo);

    this.name = 'Nemo';
  }

  _createClass(Nemo, [{
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }]);

  return Nemo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Nemo);

/***/ })
]]);