"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _portalVue = _interopRequireDefault(require("portal-vue"));

require("bootstrap-icons/font/bootstrap-icons.css");

require("animate.css");

require("@popperjs/core");

require("jquery");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { createPopper } from '@popperjs/core'
_vue["default"].config.productionTip = false; // Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

_vue["default"].use(_portalVue["default"]); // Vue.use(createPopper)


new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");