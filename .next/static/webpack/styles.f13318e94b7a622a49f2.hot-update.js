webpackHotUpdate("styles",{

/***/ "./components/Home/styles.scss":
/*!*************************************!*\
  !*** ./components/Home/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"swiper":"swiper___1HRHJ","img":"img___2J0eB","search":"search___3Buoj","searchWrapper":"searchWrapper___3ziRz","text":"text___31Szr","icon":"icon___AhUgR","iconList":"iconList___jbhnL","seckill":"seckill___1UdQ9","seckillTitle":"seckillTitle___1HEPM","arrow":"arrow___Pe-9z","desc":"desc___2_m2o","listWrapper":"listWrapper___3v1UO","seckillItem":"seckillItem___1d9b9","price":"price___1--hP","title":"title___1d-1K","btn":"btn___36Qe-"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1588558445804");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.f13318e94b7a622a49f2.hot-update.js.map