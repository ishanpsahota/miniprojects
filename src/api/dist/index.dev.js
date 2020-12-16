"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "https://api.github.com/";
var url_json = {
  user: url + 'users/',
  repos: url + 'search/repositories?q='
};
var _default = {
  get_urls: function get_urls() {
    return url_json;
  },
  get_items: function get_items(search, type) {
    var _this = this;

    if (!search || !type) return;else for (var url_type in url_json) {
      if (url_type == type.toLowerCase()) {
        return new Promise(function (resolve, reject) {
          _axios["default"].get(_this.get_urls()[url_type] + search).then(function (res) {
            resolve(res);
          })["catch"](function (err) {
            reject(err);
          });
        });
      }
    }
  }
};
exports["default"] = _default;