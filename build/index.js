/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/data.tsx":
/*!**********************!*\
  !*** ./src/data.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPosts = void 0;
/**
 * Get all the team members using the WordPress rest api
 * @package Inpsyde Challenge
 * @since 1.0.0
 * @see https://developer.wordpress.org/rest-api/reference/
 */
var react_1 = __webpack_require__(/*! react */ "react");
var restUrl = inpsyde_challenge_script_params.rest_url;
var getPosts = function () {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(restUrl + 'wp/v2/team-members?filter[orderby]=date&order=asc')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        setData(json);
                        return [2 /*return*/];
                }
            });
        }); };
        getData();
    }, []);
    return data;
};
exports.getPosts = getPosts;


/***/ }),

/***/ "./src/edit.tsx":
/*!**********************!*\
  !*** ./src/edit.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
__webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
// data
var data_1 = __webpack_require__(/*! ./data */ "./src/data.tsx");
function dropdownWithOptions(posts) {
    var options = [
        {
            label: (0, i18n_1.__)('Select an Employee', 'custom-welcome-guide'),
            value: ''
        }
    ];
    posts && posts.forEach(function (post) {
        options.push({
            label: post.title.rendered,
            value: post.id
        });
    });
    return options;
}
var Edit = function (props) {
    var teamMembers = (0, data_1.getPosts)();
    return (React.createElement(components_1.SelectControl, { label: (0, i18n_1.__)('Select a team member:'), value: props.attributes.id, className: "wp-block-inpsyde-challenge", options: teamMembers.length && dropdownWithOptions(teamMembers) //dynamic select dropdown with labels and values
        , onChange: function (value) { return props.setAttributes({ id: value, teamMembers: teamMembers }); } }));
};
exports["default"] = Edit;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * Internal dependencies
 */
var edit_1 = __webpack_require__(/*! ./edit */ "./src/edit.tsx");
var save_1 = __webpack_require__(/*! ./save */ "./src/save.tsx");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0, blocks_1.registerBlockType)('create-block/inpsyde-challenge', {
    title: (0, i18n_1.__)('Team Members', 'inpsyde-challenge'),
    description: (0, i18n_1.__)('An example typescript block.', 'inpsyde-challenge'),
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: true,
    },
    attributes: {
        id: {
            type: 'string',
            default: '',
        },
        teamMembers: {
            type: 'array',
            default: []
        }
    },
    edit: edit_1.default,
    save: save_1.default,
});


/***/ }),

/***/ "./src/save.tsx":
/*!**********************!*\
  !*** ./src/save.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save(props) {
    var teamMembers = props.attributes.teamMembers;
    /**
     * Strip potentially dangerous html tags to secure post output
     * @param {string} content
     * @returns escaped html
     */
    function escapeHtml(content) {
        var div = document.createElement('div');
        div.innerHTML = content;
        var scripts = div.querySelectorAll('style, script');
        var i = scripts.length;
        while (i--) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
        return div.innerHTML;
    }
    /* Decode company positions */
    function companyPosition(roleId) {
        var position = '';
        switch (roleId) {
            case '1':
                position = (0, i18n_1.__)("CEO", 'inpsyde-challenge');
                break;
            case '2':
                position = (0, i18n_1.__)("Business Solutions Architect", 'inpsyde-challenge');
                break;
            case '3':
                position = (0, i18n_1.__)("Tech Lead", 'inpsyde-challenge');
                break;
            case '4':
                position = (0, i18n_1.__)("Project Manager", 'inpsyde-challenge');
                break;
            case '5':
                position = (0, i18n_1.__)("Developer", 'inpsyde-challenge');
                break;
        }
        return position;
    }
    return (React.createElement("div", { className: "inpsyde-challenge" }, teamMembers.map(function (teamMember) {
        return props.attributes.id == teamMember.id ? //print a teammember on the frontend in case he is selected from the block editor
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: "teamMember", key: props.attributes.id },
                    React.createElement("a", { href: "#popup_".concat(teamMember.id) },
                        teamMember.featured_image ? React.createElement("img", { src: teamMember.featured_image }) : '',
                        React.createElement("h2", null, teamMember.title.rendered),
                        React.createElement("div", { className: "position" }, companyPosition(teamMember.ic_position)))),
                React.createElement("div", { id: "popup_".concat(teamMember.id), className: "overlay" },
                    React.createElement("div", { className: "popup" },
                        React.createElement("h2", null, teamMember.title.rendered),
                        React.createElement("a", { className: "close", href: "#closed" }, "\u00D7"),
                        React.createElement("div", { className: "description", dangerouslySetInnerHTML: { __html: escapeHtml(teamMember.content.rendered) } }),
                        React.createElement("div", { className: "social-links" },
                            React.createElement("a", { href: teamMember.ic_social_links.ic_fb_field },
                                React.createElement("i", null,
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#333", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        React.createElement("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })))),
                            React.createElement("a", { href: teamMember.ic_social_links.ic_linkedin_field },
                                React.createElement("i", null,
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#333", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                                        React.createElement("rect", { x: "2", y: "9", width: "4", height: "12" }),
                                        React.createElement("circle", { cx: "4", cy: "4", r: "2" })))),
                            React.createElement("a", { href: teamMember.ic_social_links.ic_xing_field },
                                React.createElement("i", null,
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 500 500", stroke: "#333" },
                                        React.createElement("path", { "vector-effect": "non-scaling-stroke", d: "M307.8 297.9L463 26H359L203.4 297.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H407l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4zm-91.9-87.7L157 107a2 2 0 0 0-2-1H59l58.9 104.4a1.13 1.13 0 0 1 .1.8L37 346h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2z" })))),
                            React.createElement("a", { href: teamMember.ic_social_links.ic_github_field },
                                React.createElement("i", null,
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#333", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        React.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }))))))))
            :
                '';
    })));
}
exports["default"] = save;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"style-main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkinpsyde_challenge"] = self["webpackChunkinpsyde_challenge"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-main"], function() { return __webpack_require__("./src/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map