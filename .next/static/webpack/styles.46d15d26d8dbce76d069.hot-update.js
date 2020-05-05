webpackHotUpdate("styles",{

/***/ "./pages/styles.scss":
/*!***************************!*\
  !*** ./pages/styles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"detailWrapper":"detailWrapper___1oSk1","main":"main___1Ma59","bottom":"bottom___3-cit","more":"more___3aY9d","bgWrapper":"bgWrapper___SgL5g","bg":"bg___205rT","orderStatus":"orderStatus___3wPPH","recevierInfo":"recevierInfo___33l0x","img":"img___mmi18","recevier":"recevier___3DEH1","info":"info___15T7N","name":"name___2S6yI","phone":"phone___20UiG","address":"address___3cGZ-","skuList":"skuList___Pt9UE","skuWrapper":"skuWrapper___1feRl","skuInfo":"skuInfo___2-ACy","title":"title___29KT-","priceInfo":"priceInfo___2n_0t"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1588564069101");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.46d15d26d8dbce76d069.hot-update.js.map