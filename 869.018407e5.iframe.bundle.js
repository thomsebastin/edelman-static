"use strict";(self.webpackChunkaem_maven_archetype=self.webpackChunkaem_maven_archetype||[]).push([[869],{"./src/main/webpack/core-components/form/sign-in-form/sign-in-form.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.js");var jquery__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/jquery/dist/jquery.js");__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__)()((function($){!function(){var form=$("#wknd-sign-in-form");if(form){var urlParams=new URLSearchParams(window.location.search);urlParams&&urlParams.has("j_reason")&&"invalid_login"==urlParams.get("j_reason")&&form.find("[name=j_username],[name=j_password]").addClass("cmp-form-text__text--error")}}(),$("body").on("wknd-modal-show",(function(){var slingRedirectInput=$('#wknd-sign-in-form input[name="sling.auth.redirect"]');slingRedirectInput&&slingRedirectInput.val(window.location.pathname)}))}))}}]);