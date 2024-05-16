"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _browser = require("../message/browser.js");
var rutaMain = (0, _express["default"])();
rutaMain.get("/", function (req, res) {
  res.json({
    "respuesta": _browser.messageBrowse.principal
  });
});

// // home
rutaMain.get("/home", function (req, res) {
  res.json({
    "home": _browser.messageBrowse.home
  });
});

// gallery
rutaMain.get("/gallery", function (req, res) {
  res.json({
    "gallery": _browser.messageBrowse.gallery
  });
});

//about
rutaMain.get("/about", function (req, res) {
  res.json({
    "about": _browser.messageBrowse.about
  });
});

// contact
rutaMain.get("/contact", function (req, res) {
  res.json({
    "contact": _browser.messageBrowse.contact
  });
});
var _default = exports["default"] = rutaMain;