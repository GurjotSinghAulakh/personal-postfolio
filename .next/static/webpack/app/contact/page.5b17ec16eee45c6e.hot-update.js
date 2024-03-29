"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,MailIcon,MessageSquare,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,MailIcon,MessageSquare,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/mail.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,MailIcon,MessageSquare,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,MailIcon,MessageSquare,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Form = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messageError, setMessageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        setNameError(!name);\n        setEmailError(!email || !/\\S+@\\S+\\.\\S+/.test(email));\n        setMessageError(!message);\n        if (name && email && message && /\\S+@\\S+\\.\\S+/.test(email)) {\n            _emailjs_browser__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sendForm(\"service_dx6j84b\", \"template_bxesy0a\", form.current, {\n                publicKey: \"ubjyEPI46Moq3JQCO\"\n            }).then(()=>{\n                console.log(\"SUCCESS!\");\n                notify();\n            }, (error)=>{\n                console.log(\"FAILED...\", error.text);\n                setName(\"\");\n                setEmail(\"\");\n                setMessage(\"\");\n            });\n        }\n    };\n    const notify = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"Message sent successfully!\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"name\",\n                        id: \"name\",\n                        name: \"name\",\n                        placeholder: \"Name\",\n                        required: true,\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    nameError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please enter a name.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: \"absolute right-6\",\n                        size: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        id: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        required: true,\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    emailError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please enter a valid email.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 24\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"absolute right-6\",\n                        size: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                        id: \"message\",\n                        name: \"message\",\n                        placeholder: \"Type your message here.\",\n                        required: true,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    messageError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please enter a message.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: \"absolute top-4 right-6\",\n                        size: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"submit\",\n                value: \"send\",\n                onSubmit: notify,\n                className: \"flex items-center gap-x-1 max-w-[166px]\",\n                children: [\n                    \"Let's Talk \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_MailIcon_MessageSquare_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        size: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 20\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Form.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"oce1+CXMi3rck3kdjVze8ARsxfc=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUMsTUFBSztnQkFBU0ksT0FBTTtnQkFBT1AsVUFBVUo7Z0JBQVFNLFdBQVU7O29CQUEwQztrQ0FDNUYsOERBQUNuQyx1SEFBY0E7d0JBQUM0QyxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDekMsMERBQWNBOzs7Ozs7Ozs7OztBQUdyQjtHQTdETUU7S0FBQUE7QUErRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7IFxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi91aS9pbnB1dFwiOyBcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIi4vdWkvdGV4dGFyZWFcIjsgXG5pbXBvcnQgeyBVc2VyLCBNYWlsSWNvbiwgQXJyb3dSaWdodEljb24sIE1lc3NhZ2VTcXVhcmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7IFxuaW1wb3J0IGVtYWlsanMgZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiOyBcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuYW1lRXJyb3IsIHNldE5hbWVFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VFcnJvciwgc2V0TWVzc2FnZUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldE5hbWVFcnJvcighbmFtZSk7XG4gICAgc2V0RW1haWxFcnJvcighZW1haWwgfHwgIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGVtYWlsKSk7XG4gICAgc2V0TWVzc2FnZUVycm9yKCFtZXNzYWdlKTtcblxuICAgIGlmIChuYW1lICYmIGVtYWlsICYmIG1lc3NhZ2UgJiYgL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZW1haWwpKSB7XG4gICAgICBlbWFpbGpzXG4gICAgICAgIC5zZW5kRm9ybSgnc2VydmljZV9keDZqODRiJywgJ3RlbXBsYXRlX2J4ZXN5MGEnLCBmb3JtLmN1cnJlbnQsIHtcbiAgICAgICAgICBwdWJsaWNLZXk6ICd1Ymp5RVBJNDZNb3EzSlFDTycsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScpO1xuICAgICAgICAgICAgbm90aWZ5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnJvci50ZXh0KTtcbiAgICAgICAgICAgIHNldE5hbWUoJycpO1xuICAgICAgICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgbm90aWZ5ID0gKCkgPT4gdG9hc3QoXCJNZXNzYWdlIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwibmFtZVwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgcmVxdWlyZWQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICB7bmFtZUVycm9yICYmIDxwPlBsZWFzZSBlbnRlciBhIG5hbWUuPC9wPn1cbiAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNlwiIHNpemU9ezIwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICB7ZW1haWxFcnJvciAmJiA8cD5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC48L3A+fVxuICAgICAgICA8TWFpbEljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNlwiIHNpemU9ezIwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxUZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS5cIiByZXF1aXJlZCB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIHttZXNzYWdlRXJyb3IgJiYgPHA+UGxlYXNlIGVudGVyIGEgbWVzc2FnZS48L3A+fVxuICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC02XCIgc2l6ZT17MjB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic2VuZFwiIG9uU3VibWl0PXtub3RpZnl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTEgbWF4LXctWzE2NnB4XVwiPlxuICAgICAgICBMZXQncyBUYWxrIDxBcnJvd1JpZ2h0SWNvbiBzaXplPXsyMH0gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFRvYXN0Q29udGFpbmVyLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0YXJlYSIsIlVzZXIiLCJNYWlsSWNvbiIsIkFycm93UmlnaHRJY29uIiwiTWVzc2FnZVNxdWFyZSIsImVtYWlsanMiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiRm9ybSIsImZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm5hbWVFcnJvciIsInNldE5hbWVFcnJvciIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwibWVzc2FnZUVycm9yIiwic2V0TWVzc2FnZUVycm9yIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVzdCIsInNlbmRGb3JtIiwiY3VycmVudCIsInB1YmxpY0tleSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwibm90aWZ5IiwiZXJyb3IiLCJ0ZXh0IiwicmVmIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInAiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});