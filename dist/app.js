"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.set("port", process.env.PORT || 3000);

// rutas
app.use("/", _index["default"]);

// Export default app
var _default = exports["default"] = app;