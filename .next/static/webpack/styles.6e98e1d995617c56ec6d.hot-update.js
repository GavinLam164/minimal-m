webpackHotUpdate("styles",{

/***/ "./components/ProductDetail/Bottom/styles.scss":
/*!*****************************************************!*\
  !*** ./components/ProductDetail/Bottom/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bottom":"bottom___39V9w","left":"left___2CXDZ","icon":"icon___10gQp","img":"img___1O9YI","text":"text___1POJ-","right":"right___1gMv8","priceWrapper":"priceWrapper___2M3IC","pay":"pay___2SFrf"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1588557863994");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6e98e1d995617c56ec6d.hot-update.js.map