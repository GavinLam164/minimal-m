webpackHotUpdate("styles",{

/***/ "./components/ProductDetail/BasicInfo/styles.scss":
/*!********************************************************!*\
  !*** ./components/ProductDetail/BasicInfo/styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"basicInfo":"basicInfo___2ore0","title":"title___2tzYc","price":"price___2-X8b","other":"other___3InEf","freight":"freight___3o7po","salesVolume":"salesVolume___2p7av"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1588556081838");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.be6285c5259b01b8d1da.hot-update.js.map