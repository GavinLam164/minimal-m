webpackHotUpdate("styles",{

/***/ "./components/Category/styles.scss":
/*!*****************************************!*\
  !*** ./components/Category/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"categoryList":"categoryList___3vwwE","categoryItemWrapper":"categoryItemWrapper___YWHRG","categoryItem":"categoryItem___37jbI","img":"img___1wdjR","title":"title___3DNhp"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1588577192837");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.71c79924c6712f999da2.hot-update.js.map