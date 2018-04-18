webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/tom.reddington/Collusion/cms-poc/Next/pages/index.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'style',
    { jsx: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    '\n    html {\n        animation: crossfade 2s infinite alternate;\n        background: #fff;\n        font-family: sans-serif;\n      }\n\n        body {\n        margin: 0;\n      }\n\n        svg {\n        animation: fade 2s infinite alternate;\n        display: block;\n        fill: #000;\n        height: 100vh;\n        width: 100%;\n      }\n\n        @keyframes fade {\n        0%,\n        50% {\n        fill: #000;\n      }\n        50.1%,\n        100% {\n        fill: #fff;\n      }\n      }\n\n        @keyframes crossfade {\n        0%,\n        50% {\n        background-color: #fff;\n      }\n        50.1%,\n        100% {\n        background-color: #000;\n      }\n    }\n  '
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/tom.reddington/Collusion/cms-poc/Next/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.799a3c475e0e4b63d21e.hot-update.js.map