module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/path.app.js":
/*!****************************!*\
  !*** ./config/path.app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst appDirectory = process.cwd();\n\nconst resolveAppResource = absolutePath => path.join(appDirectory, absolutePath);\n\nmodule.exports = {\n  appEntry: resolveAppResource('src/index.tsx'),\n  distDirectory: resolveAppResource('dist'),\n  appSource: resolveAppResource('src'),\n  publicDirectory: resolveAppResource('public'),\n  htmlTemplate: resolveAppResource('src/index.ejs'),\n  tsConfig: resolveAppResource('tsconfig.json'),\n  tsLint: resolveAppResource('tslint.json'),\n  customizeConfigPath: resolveAppResource('ssr.config.js'),\n  appDirectory,\n};\n\n//# sourceURL=webpack://server.development.js/./config/path.app.js?");

/***/ }),

/***/ "./src/components/StoreContext.ts":
/*!****************************************!*\
  !*** ./src/components/StoreContext.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreContext);\n\n\n//# sourceURL=webpack://server.development.js/./src/components/StoreContext.ts?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: StoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StoreContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreContext */ \"./src/components/StoreContext.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StoreContext\", function() { return _StoreContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://server.development.js/./src/components/index.ts?");

/***/ }),

/***/ "./src/containers/StoreProvider.tsx":
/*!******************************************!*\
  !*** ./src/containers/StoreProvider.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components */ \"./src/components/index.ts\");\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store */ \"./src/store/index.ts\");\n\n\n\n\n;\n;\n;\nvar StoreProvider = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"](StoreProvider, _super);\n    function StoreProvider(props) {\n        var _this = _super.call(this, props) || this;\n        var store = props.store || {};\n        _this.state = {\n            store: store,\n        };\n        Object(src_store__WEBPACK_IMPORTED_MODULE_3__[\"addAction\"])('store', { setState: _this.setState });\n        return _this;\n    }\n    StoreProvider.prototype.render = function () {\n        var children = this.props.children;\n        var store = this.state.store;\n        return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](src_components__WEBPACK_IMPORTED_MODULE_2__[\"StoreContext\"].Provider, { value: store }, children));\n    };\n    return StoreProvider;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreProvider);\n\n\n//# sourceURL=webpack://server.development.js/./src/containers/StoreProvider.tsx?");

/***/ }),

/***/ "./src/containers/index.ts":
/*!*********************************!*\
  !*** ./src/containers/index.ts ***!
  \*********************************/
/*! exports provided: StoreProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreProvider */ \"./src/containers/StoreProvider.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StoreProvider\", function() { return _StoreProvider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://server.development.js/./src/containers/index.ts?");

/***/ }),

/***/ "./src/server/fetchData.ts":
/*!*********************************!*\
  !*** ./src/server/fetchData.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction fetchData(pathname, routes) {\n    return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, Promise, function () {\n        var matchedRoutes, promises, results, error_1;\n        return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"](this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(routes, pathname)\n                        .map(function (matched) { return matched.route; })\n                        .filter(function (_a) {\n                        var component = _a.component;\n                        return component && component.hasOwnProperty('getInitialProps');\n                    });\n                    if (!matchedRoutes.length) return [3 /*break*/, 4];\n                    promises = matchedRoutes\n                        .map(function (_a) {\n                        var component = _a.component;\n                        // @ts-ignore\n                        return component.getInitialProps(pathname);\n                    });\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 3, , 4]);\n                    return [4 /*yield*/, Promise.all(promises)];\n                case 2:\n                    results = _a.sent();\n                    return [2 /*return*/, results.reduce(function (props, result, index) {\n                            props[matchedRoutes[index].name] = result;\n                            return props;\n                        }, {})];\n                case 3:\n                    error_1 = _a.sent();\n                    return [2 /*return*/, {}];\n                case 4: return [2 /*return*/, {}];\n            }\n        });\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n\n//# sourceURL=webpack://server.development.js/./src/server/fetchData.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! exports provided: render, StoreProvider, StoreContext, ApiService, actions, addAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/containers */ \"./src/containers/index.ts\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchData */ \"./src/server/fetchData.ts\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template */ \"./src/server/template.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StoreProvider\", function() { return src_containers__WEBPACK_IMPORTED_MODULE_8__[\"StoreProvider\"]; });\n\n/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components */ \"./src/components/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StoreContext\", function() { return src_components__WEBPACK_IMPORTED_MODULE_11__[\"StoreContext\"]; });\n\n/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services */ \"./src/services/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return src_services__WEBPACK_IMPORTED_MODULE_12__[\"ApiService\"]; });\n\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/store */ \"./src/store/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return src_store__WEBPACK_IMPORTED_MODULE_13__[\"actions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addAction\", function() { return src_store__WEBPACK_IMPORTED_MODULE_13__[\"addAction\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\nvar paths = __webpack_require__(/*! ../../config/path.app */ \"./config/path.app.js\");\nfunction render(routes, options) {\n    var _this = this;\n    var app = new koa__WEBPACK_IMPORTED_MODULE_2__();\n    var router = new koa_router__WEBPACK_IMPORTED_MODULE_3__();\n    app.use(koa_static__WEBPACK_IMPORTED_MODULE_4__(paths.publicDirectory, { gzip: true }));\n    router.get('*', function (ctx) { return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](_this, void 0, void 0, function () {\n        var pathname, pageProps, AppContainer, content, html;\n        return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"](this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    pathname = ctx.url;\n                    return [4 /*yield*/, Object(_fetchData__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(pathname, routes)];\n                case 1:\n                    pageProps = _a.sent();\n                    AppContainer = options.AppContainer || react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"];\n                    content = react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"](react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], { location: pathname, context: {} },\n                        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](src_containers__WEBPACK_IMPORTED_MODULE_8__[\"StoreProvider\"], { store: pageProps },\n                            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](AppContainer, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"renderRoutes\"])(routes)))));\n                    html = Object(_template__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(content, {\n                        store: pageProps,\n                    });\n                    ctx.body = html;\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n    app.use(router.routes());\n    app.listen(3030, function () {\n        console.log('服务端渲染已运行在：http://localhost:3030');\n    });\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://server.development.js/./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/template.ts":
/*!********************************!*\
  !*** ./src/server/template.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar paths = __webpack_require__(/*! ../../config/path.app */ \"./config/path.app.js\");\nfunction getHtml(content, data) {\n    var isDev = \"development\" === 'development';\n    console.log('get html', \"development\");\n    var dataString = encodeURIComponent(JSON.stringify(data));\n    var html;\n    var template;\n    if (isDev) {\n        template = fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"](paths.htmlTemplate, 'utf8');\n        html = ejs__WEBPACK_IMPORTED_MODULE_2__[\"render\"](template, {\n            content: content,\n            script: \"\\n        <script type=\\\"text/javascript\\\">\\n          window.__APP_DATA__ = \\\"\" + dataString + \"\\\";\\n        </script>\\n        <script type=\\\"text/javascript\\\" src=\\\"/app.js\\\"></script>\\n      \"\n        });\n    }\n    else {\n        var buildedHtmlPath = path__WEBPACK_IMPORTED_MODULE_1__[\"join\"](paths.publicDirectory, 'client.html');\n        template = fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"](buildedHtmlPath, 'utf8');\n        html = template\n            .replace('AppSlot', content)\n            .replace('ScriptSlot', \"\\n        <script type=\\\"text/javascript\\\">\\n          window.__APP_DATA__ = \\\"\" + dataString + \"\\\";\\n        </script>\\n      \");\n    }\n    return html;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getHtml);\n\n\n//# sourceURL=webpack://server.development.js/./src/server/template.ts?");

/***/ }),

/***/ "./src/services/ApiService/index.ts":
/*!******************************************!*\
  !*** ./src/services/ApiService/index.ts ***!
  \******************************************/
/*! exports provided: FetchMethod, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchMethod\", function() { return FetchMethod; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar FetchMethod;\n(function (FetchMethod) {\n    FetchMethod[\"GET\"] = \"GET\";\n    FetchMethod[\"POST\"] = \"POST\";\n    FetchMethod[\"PUT\"] = \"PUT\";\n    FetchMethod[\"PATCH\"] = \"PATCH\";\n    FetchMethod[\"DELETE\"] = \"DELETE\";\n})(FetchMethod || (FetchMethod = {}));\n;\nvar ApiService = /** @class */ (function () {\n    function ApiService(routeName, baseUrl) {\n        this.apiUrl = (baseUrl || ApiService.baseUrl) + \"/\" + routeName;\n    }\n    ApiService.config = function (options) {\n        Object.keys(options).forEach(function (optionName) {\n            ApiService[optionName] = options[optionName];\n        });\n    };\n    ApiService.prototype.get = function (params) {\n        return this.fetch(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, params, { method: FetchMethod.GET }));\n    };\n    ApiService.prototype.post = function (params) {\n        return this.fetch(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, params, { method: FetchMethod.POST }));\n    };\n    ApiService.prototype.put = function (params) {\n        return this.fetch(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, params, { method: FetchMethod.PUT }));\n    };\n    ApiService.prototype.patch = function (params) {\n        return this.fetch(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, params, { method: FetchMethod.PATCH }));\n    };\n    ApiService.prototype.delete = function (params) {\n        return this.fetch(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, params, { method: FetchMethod.DELETE }));\n    };\n    ApiService.prototype.fetch = function (_a) {\n        var _this = this;\n        var path = _a.path, data = _a.data, method = _a.method, rest = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"](_a, [\"path\", \"data\", \"method\"]);\n        var url = path ? this.apiUrl + \"/\" + path : this.apiUrl;\n        var getFetchOptions = ApiService.getFetchOptions, formatError = ApiService.formatError;\n        var options = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, (getFetchOptions ? getFetchOptions() : {}), rest, { method: method });\n        if (method === FetchMethod.GET) {\n            url += \"?\" + Object(querystring__WEBPACK_IMPORTED_MODULE_1__[\"stringify\"])(data);\n        }\n        else {\n            options.data = JSON.stringify(data);\n        }\n        return new Promise(function (resolve, reject) {\n            fetch(url, options)\n                .then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](_this, void 0, void 0, function () {\n                var responseText, json, status, error;\n                return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"](this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, response.text()];\n                        case 1:\n                            responseText = _a.sent();\n                            if (response.ok) {\n                                try {\n                                    json = JSON.parse(responseText);\n                                    resolve(json);\n                                }\n                                catch (unUseError) {\n                                    resolve(responseText);\n                                }\n                            }\n                            else {\n                                status = response.status;\n                                error = formatError\n                                    ? formatError(status, responseText)\n                                    : { status: status, message: responseText };\n                                reject(error);\n                            }\n                            return [2 /*return*/];\n                    }\n                });\n            }); })\n                .catch(function () {\n                var error = formatError\n                    ? formatError(null)\n                    : { status: null, message: '请检查您的网络连接', };\n                reject(error);\n            });\n        });\n    };\n    return ApiService;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiService);\n\n\n//# sourceURL=webpack://server.development.js/./src/services/ApiService/index.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiService */ \"./src/services/ApiService/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return _ApiService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://server.development.js/./src/services/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! exports provided: addAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAction\", function() { return addAction; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"tslib\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n\nvar actions = {};\nfunction addAction(name, action) {\n    if (actions.hasOwnProperty(name)) {\n        var type = typeof actions[name];\n        if (type === typeof action && type === 'object') {\n            actions[name] = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, actions[name], action);\n        }\n        else {\n            actions[name] = action;\n        }\n    }\n    else {\n        actions[name] = action;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\n\n\n//# sourceURL=webpack://server.development.js/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: actions, addAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addAction\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"addAction\"]; });\n\n\n\n\n//# sourceURL=webpack://server.development.js/./src/store/index.ts?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack://server.development.js/external_%22ejs%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://server.development.js/external_%22fs%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack://server.development.js/external_%22koa%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack://server.development.js/external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack://server.development.js/external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://server.development.js/external_%22path%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack://server.development.js/external_%22querystring%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://server.development.js/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://server.development.js/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack://server.development.js/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack://server.development.js/external_%22react-router-dom%22?");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tslib\");\n\n//# sourceURL=webpack://server.development.js/external_%22tslib%22?");

/***/ })

/******/ });