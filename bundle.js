/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 200vh;\r\n  padding-bottom: 60px; /* beri ruang agar konten tidak tertutup footer */\r\n}\r\nheader {\r\n  background-color: #fafafa;\r\n  color: #000000;\r\n  padding: 10px 20px;\r\n  text-align: center;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  margin-left: 18%;\r\n}\r\naside {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #f3f3f3;\r\n  width: 18%;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  z-index: 1000;\r\n}\r\naside h3 {\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n}\r\naside ul li a {\r\n  text-decoration: none;\r\n  color: #000000;\r\n  font-weight: bold;\r\n}\r\naside ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\naside ul li {\r\n  margin: 10px;\r\n  border-bottom: #4caf50 solid 1px;\r\n}\r\n.content {\r\n  width: 82%;\r\n  background: linear-gradient(135deg, #fafafa 0%, #f3f3f3 100%);\r\n  border-radius: 16px;\r\n  margin: 32px 2% 32px 2%;\r\n  padding: 28px 32px 28px 32px;\r\n  position: relative;\r\n  border: 1.5px solid #e0e0e0;\r\n  height: 87vh;\r\n}\r\n.content:hover {\r\n  box-shadow: 0 8px 32px 0 rgba(44, 62, 80, 0.13),\r\n    0 2px 6px 0 rgba(44, 62, 80, 0.1);\r\n}\r\n.content h3 {\r\n  color: #222;\r\n  margin-bottom: 22px;\r\n  font-family: \"Quicksand\", sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  text-shadow: 0 1px 4px #e0e0e0;\r\n  font-size: 1rem;\r\n}\r\n.form-group {\r\n  margin-bottom: 22px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n}\r\n.form-group label {\r\n  font-weight: 600;\r\n  color: #222;\r\n  margin-bottom: 2px;\r\n  font-size: 12px;\r\n}\r\n.form-group input[type=\"text\"],\r\n.form-group textarea,\r\n.form-group input[type=\"date\"],\r\n.form-group select {\r\n  padding: 10px 12px;\r\n  border: 1.5px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  background: #fafafa;\r\n  transition: border 0.2s, box-shadow 0.2s;\r\n  outline: none;\r\n}\r\n.form-group input[type=\"text\"]:focus,\r\n.form-group textarea:focus,\r\n.form-group input[type=\"date\"]:focus,\r\n.form-group select:focus {\r\n  border: 1.5px solid #4caf50;\r\n  box-shadow: 0 0 0 2px #b2dfdb66;\r\n}\r\n.form-group textarea {\r\n  min-height: 70px;\r\n  resize: vertical;\r\n}\r\n.btn-submit {\r\n  background: linear-gradient(90deg, #4caf50 60%, #009688 100%);\r\n  color: #222;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 12px 0;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  box-shadow: 0 2px 8px #b2dfdb33;\r\n  transition: background 0.2s, transform 0.2s;\r\n  margin-top: 8px;\r\n}\r\n.btn-submit:hover {\r\n  background: linear-gradient(90deg, #009688 60%, #4caf50 100%);\r\n  color: #fff;\r\n  transform: scale(1.04);\r\n}\r\n.task-list {\r\n  width: 100%;\r\n  margin-top: 18px;\r\n  display: block;\r\n}\r\n.task-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 8px #b2dfdb33;\r\n  font-size: 1rem;\r\n}\r\n.task-table th,\r\n.task-table td {\r\n  padding: 12px 14px;\r\n  border-bottom: 1.5px solid #e0e0e0;\r\n  text-align: left;\r\n}\r\n.task-table th {\r\n  background: #f3f3f3;\r\n  font-weight: 700;\r\n  color: #222;\r\n}\r\n.task-table tr:last-child td {\r\n  border-bottom: none;\r\n}\r\n.task-table tr.highlight {\r\n  animation: highlight-fade 0.8s;\r\n  box-shadow: 0 0 0 4px #b2dfdb88;\r\n}\r\n.task-table tr.fade-out {\r\n  opacity: 0;\r\n  transform: translateX(40px) scale(0.95);\r\n  transition: opacity 0.4s, transform 0.4s;\r\n}\r\n.task-title {\r\n  font-weight: 700;\r\n  color: #222;\r\n}\r\n.task-desc {\r\n  color: #444;\r\n}\r\n.task-footer {\r\n  color: #009688;\r\n  font-size: 0.95rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n/* Notifikasi */\r\n.notif {\r\n  position: fixed;\r\n  top: 24px;\r\n  right: 32px;\r\n  background: #4caf50;\r\n  color: #fff;\r\n  padding: 12px 24px;\r\n  border-radius: 8px;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  z-index: 9999;\r\n  box-shadow: 0 2px 8px #b2dfdb33;\r\n  transition: opacity 0.4s, top 0.4s;\r\n}\r\n.notif-danger {\r\n  background: #e53935;\r\n}\r\n.notif.show {\r\n  opacity: 1;\r\n  top: 48px;\r\n  pointer-events: auto;\r\n}\r\n\r\n/* Highlight task baru */\r\n.task-card.highlight {\r\n  animation: highlight-fade 0.8s;\r\n  box-shadow: 0 0 0 4px #b2dfdb88;\r\n}\r\n@keyframes highlight-fade {\r\n  0% {\r\n    background: #b2dfdb44;\r\n  }\r\n  100% {\r\n    background: #fff;\r\n  }\r\n}\r\n\r\n/* Tombol hapus */\r\n.btn-delete {\r\n  background: none;\r\n  border: none;\r\n  color: #e53935;\r\n  font-size: 1.1rem;\r\n  margin-left: 12px;\r\n  cursor: pointer;\r\n  transition: color 0.2s;\r\n}\r\n.btn-delete:hover {\r\n  color: #b71c1c;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const taskForm = document.getElementById(\"taskForm\");\r\n  const taskList = document.getElementById(\"taskList\");\r\n\r\n  // Notifikasi\r\n  function showNotification(message, type = \"success\") {\r\n    let notif = document.createElement(\"div\");\r\n    notif.className = `notif notif-${type}`;\r\n    notif.innerText = message;\r\n    document.body.appendChild(notif);\r\n    setTimeout(() => {\r\n      notif.classList.add(\"show\");\r\n    }, 10);\r\n    setTimeout(() => {\r\n      notif.classList.remove(\"show\");\r\n      setTimeout(() => notif.remove(), 400);\r\n    }, 2000);\r\n  }\r\n\r\n  // Membuat tabel jika belum ada\r\n  function ensureTaskTable() {\r\n    if (!document.getElementById(\"taskTable\")) {\r\n      const table = document.createElement(\"table\");\r\n      table.id = \"taskTable\";\r\n      table.className = \"task-table\";\r\n      table.innerHTML = `\r\n        <thead>\r\n          <tr>\r\n            <th>No</th>\r\n            <th>Nama Tugas</th>\r\n            <th>Deskripsi</th>\r\n            <th>Jatuh Tempo</th>\r\n            <th>Prioritas</th>\r\n            <th>Aksi</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody></tbody>\r\n      `;\r\n      taskList.appendChild(table);\r\n    }\r\n  }\r\n\r\n  // Hapus task (baris tabel)\r\n  function addDeleteButton(row) {\r\n    const delBtn = document.createElement(\"button\");\r\n    delBtn.className = \"btn-delete\";\r\n    delBtn.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n    delBtn.title = \"Hapus Tugas\";\r\n    delBtn.onclick = function () {\r\n      row.classList.add(\"fade-out\");\r\n      setTimeout(() => row.remove(), 400);\r\n      showNotification(\"Tugas dihapus\", \"danger\");\r\n    };\r\n    return delBtn;\r\n  }\r\n\r\n  taskForm.addEventListener(\"submit\", function (e) {\r\n    e.preventDefault();\r\n    const name = document.getElementById(\"taskName\").value.trim();\r\n    const desc = document.getElementById(\"taskDescription\").value.trim();\r\n    const due = document.getElementById(\"dueDate\").value;\r\n    const priority = document.getElementById(\"priority\").value;\r\n\r\n    if (!name || !desc || !due || !priority) {\r\n      showNotification(\"Semua field harus diisi!\", \"danger\");\r\n      return;\r\n    }\r\n\r\n    // Format priority class\r\n    let priorityClass = \"priority-\" + priority;\r\n    let priorityLabel =\r\n      priority === \"low\"\r\n        ? \"Rendah\"\r\n        : priority === \"medium\"\r\n        ? \"Sedang\"\r\n        : \"Tinggi\";\r\n\r\n    ensureTaskTable();\r\n    const table = document.getElementById(\"taskTable\");\r\n    const tbody = table.querySelector(\"tbody\");\r\n    const row = document.createElement(\"tr\");\r\n    row.className = \"highlight\";\r\n    // Hitung nomor urut\r\n    const no = tbody.children.length + 1;\r\n    row.innerHTML = `\r\n      <td class=\"task-no\">${no}</td>\r\n      <td class=\"task-title\">${name}</td>\r\n      <td class=\"task-desc\">${desc}</td>\r\n      <td class=\"task-footer\"><i class=\"fa-regular fa-calendar\"></i> ${due}</td>\r\n      <td><span class=\"task-priority ${priorityClass}\">${priorityLabel}</span></td>\r\n      <td></td>\r\n    `;\r\n    // Tambahkan tombol hapus ke kolom aksi\r\n    row.children[5].appendChild(addDeleteButton(row));\r\n    tbody.appendChild(row);\r\n    // Update nomor urut jika ada penghapusan\r\n    function updateRowNumbers() {\r\n      Array.from(tbody.children).forEach((tr, idx) => {\r\n        tr.querySelector(\".task-no\").textContent = idx + 1;\r\n      });\r\n    }\r\n    // Tambahkan update nomor urut pada hapus\r\n    row.querySelector(\".btn-delete\").onclick = function () {\r\n      row.classList.add(\"fade-out\");\r\n      setTimeout(() => {\r\n        row.remove();\r\n        updateRowNumbers();\r\n      }, 400);\r\n      showNotification(\"Tugas dihapus\", \"danger\");\r\n    };\r\n    setTimeout(() => row.classList.remove(\"highlight\"), 800);\r\n    showNotification(\"Tugas berhasil ditambahkan!\");\r\n    taskForm.reset();\r\n    document.getElementById(\"taskName\").focus();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://todo-app/./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;