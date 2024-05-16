"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _consola = require("./message/consola.js");
var _colors = _interopRequireDefault(require("colors"));
_app["default"].listen(_app["default"].get("port"), function () {
  (0, _consola.msjConsole)("puertoSuccess", "".concat(_consola.mensa.puerto, " ").concat(_app["default"].get("port"), " http://localhost:").concat(_app["default"].get("port")));
});