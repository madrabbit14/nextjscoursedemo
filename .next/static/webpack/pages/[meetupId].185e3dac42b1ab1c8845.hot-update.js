webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");



var _jsxFileName = "D:\\Dev\\react\\udemycourse\\mycode\\react-section23-nextjs-bigger\\pages\\[meetupId]\\index.js",
    _this = undefined;




var MeetupDetails = function MeetupDetails(props) {
  console.log("Received meetupData: " + JSON.stringify(props.meetupData));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Details of ", props.meetupData.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: props.meetupData.id,
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJpbWFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQTBCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosS0FBSyxDQUFDSyxVQUFyQixDQUF0QztBQUVBLHNCQUNFO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLGtDQUFtQkwsS0FBSyxDQUFDSyxVQUFOLENBQWlCQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFTixLQUFLLENBQUNLLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUtBLHFFQUFDLHdFQUFEO0FBQ0UsUUFBRSxFQUFFUCxLQUFLLENBQUNLLFVBQU4sQ0FBaUJHLEVBRHZCO0FBRUUsV0FBSyxFQUFFUixLQUFLLENBQUNLLFVBQU4sQ0FBaUJJLEtBRjFCO0FBR0UsV0FBSyxFQUFFVCxLQUFLLENBQUNLLFVBQU4sQ0FBaUJDLEtBSDFCO0FBSUUsYUFBTyxFQUFFTixLQUFLLENBQUNLLFVBQU4sQ0FBaUJLLE9BSjVCO0FBS0UsaUJBQVcsRUFBRVYsS0FBSyxDQUFDSyxVQUFOLENBQWlCRTtBQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEE7QUFBQSxrQkFERjtBQWVELENBbEJEOztLQUFNUixhOztBQTZFU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS4xODVlM2RhYzQyYjFhYjFjODg0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbWVldHVwRGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wcy5tZWV0dXBEYXRhKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRldGFpbHMgb2Yge3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE1lZXR1cERldGFpbFxyXG4gICAgICBpZD17cHJvcHMubWVldHVwRGF0YS5pZH1cclxuICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQcm9wczogY29ubmVjdGluZ1wiKTtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3JlYWN0dGVzdHVzZXI6cmVhY3QtdGVzdC11c2VyLTAxMjMwQGNsdXN0ZXIwLm5jamJhaW8ubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQcm9wczogY29ubmVjdGVkLiBnZXR0aW5nIGRiXCIpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQcm9wczogZ290IERCLCBnZXR0aW5nIGNvbGxlY3Rpb25cIik7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3Qgc2luZ2xlTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhcImdldFN0YXRpY1Byb3BzOiBmb3VuZCBpdGVtOiBcIiArIHNpbmdsZU1lZXR1cCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNpbmdsZU1lZXR1cFtcIl9pZFwiXS50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzaW5nbGVNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2luZ2xlTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNpbmdsZU1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2luZ2xlTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vL25lZWRlZCBvbiBkeW5hbWljIHBhZ2VzIHdpdGggZ2V0U3RhdGljUHJvcHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiZ2V0U3RhdGljUGF0aHM6IGNvbm5lY3RpbmdcIik7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9yZWFjdHRlc3R1c2VyOnJlYWN0LXRlc3QtdXNlci0wMTIzMEBjbHVzdGVyMC5uY2piYWlvLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFwiZ2V0U3RhdGljUGF0aHM6IGNvbm5lY3RlZC4gZ2V0dGluZyBkYlwiKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnNvbGUubG9nKFwiZ2V0U3RhdGljUGF0aHM6IGdvdCBEQiwgZ2V0dGluZyBjb2xsZWN0aW9uXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcbiAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQYXRoczogZm91bmQgaXRlbXM6IFwiICsgbWVldHVwcy5sZW5ndGgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4geyBwYXJhbXM6IHsgbWVldHVwSWQ6IGl0ZW1bXCJfaWRcIl0udG9TdHJpbmcoKSB9IH07XHJcbiAgICB9KSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gZmFsc2U6IHJldHVybnMgNDA0IG9uIHVuc3BlY2lmaWVkIGlkcywgdHJ1ZTogcmVuZGVycyBkeW5hbWljYWxseSwgdXNlZnVsIGZvciBwcmVwYXJpbmcgbW9zdCB1c2VkIHBhZ2VzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==