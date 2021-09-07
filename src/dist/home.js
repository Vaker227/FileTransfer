/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/home/components/chat-container.component.jsx":
/*!******************************************************************!*\
  !*** ./src/modules/home/components/chat-container.component.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar defaultMessages = [\"text1\", \"text223123\", \"12313sd\"];\n\nfunction ChatContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultMessages),\n      _useState2 = _slicedToArray(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var handleKeyPress = function handleKeyPress(e) {\n    if (e.key == \"Enter\") {\n      handleClick(e);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var chatContent = document.getElementById(\"chat-content\");\n    chatContent.scrollTop = chatContent.scrollHeight;\n  }, [messages]);\n\n  var handleClick = function handleClick() {\n    if (text == \"\") {\n      return;\n    }\n\n    setMessages([].concat(_toConsumableArray(messages), [text]));\n    setText(\"\");\n  };\n\n  var handleChange = function handleChange(e) {\n    setText(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"chat-container\",\n    className: \"col-11 bg-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"chat-content\",\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, messages.map(function (message, inx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      key: inx\n    }, message);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"chat-input\",\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"Aa\",\n    value: text,\n    onChange: handleChange,\n    id: \"input-text\",\n    onKeyPress: handleKeyPress\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: handleClick,\n    id: \"input-btn\",\n    className: \"btn btn-primary btn-sm\"\n  }, \"Send\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatContainer);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/chat-container.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/client-list.component.jsx":
/*!***************************************************************!*\
  !*** ./src/modules/home/components/client-list.component.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socketio */ \"./src/modules/home/services/socketio.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction ClientView(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\",\n    style: {\n      position: \"relative\"\n    },\n    onDoubleClick: props.self ? null : props.handleDoubleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1 text-end\"\n  }, props.self ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-user text-primary\"\n  }) : \"\", \" \", props.index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-5\"\n  }, props.client.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-2\"\n  }, \"Connected\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-4\"\n  }, \"\".concat(props.client.ip, \":\").concat(props.client.port)));\n}\n\nfunction ClientList(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      listClients = _useState2[0],\n      setListClients = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      selectedClient = _useState4[0],\n      setSelectedClient = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setListClients(Object.keys(props.clients).map(function () {\n      return false;\n    }));\n    setSelectedClient(null);\n  }, [props.clients]);\n\n  var handleSelectedClient = function handleSelectedClient(e) {\n    var isChecked = e.target.checked;\n    var newList = listClients.map(function (client, inx) {\n      return inx == e.target.getAttribute(\"data-index\") ? isChecked : false;\n    });\n    setSelectedClient(isChecked ? e.target.value : null);\n    setListClients(newList);\n  };\n\n  var handleDoubleClick = function handleDoubleClick(e) {\n    var target = e.target.parentNode.previousSibling;\n    var newList = listClients.map(function (client, inx) {\n      return inx == target.getAttribute(\"data-index\") ? true : false;\n    });\n    setSelectedClient(target.value);\n    setListClients(newList);\n    handlePrivateConnection(target.value);\n  };\n\n  var handlePrivateConnection = function handlePrivateConnection() {\n    var targetClient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    if (!selectedClient && !targetClient) {\n      console.log(\"invalid selected client\");\n      return;\n    }\n\n    console.log(selectedClient || targetClient);\n    _services_socketio__WEBPACK_IMPORTED_MODULE_2__.connectPrivate(selectedClient || targetClient);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"clients-list\",\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, \"List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-10\",\n    id: \"clients-view\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"clients-view-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1 text-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"#\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Name\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Status\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"IP\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"clients-view-body\"\n  }, Object.keys(props.clients).map(function (key, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      disabled: key == props.user.socketID,\n      \"data-index\": index,\n      value: key,\n      checked: listClients[index] || false,\n      onChange: handleSelectedClient,\n      onDoubleClick: function onDoubleClick() {\n        return console.log(\"dbclick\");\n      },\n      type: \"checkbox\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ClientView, {\n      index: index,\n      handleDoubleClick: handleDoubleClick,\n      client: props.clients[key],\n      id: key,\n      self: key == props.user.socketID\n    }));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-2\",\n    id: \"clients-action\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-success\",\n    onClick: handlePrivateConnection\n  }, \"Connect\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-success\",\n    onClick: function onClick() {\n      return _services_socketio__WEBPACK_IMPORTED_MODULE_2__.disconnect();\n    }\n  }, \"Disconnect\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-success\",\n    onClick: function onClick() {\n      return _services_socketio__WEBPACK_IMPORTED_MODULE_2__.reconnect();\n    }\n  }, \"Reconnect Sever\"))))));\n}\n\nvar ClientListSTP = function ClientListSTP(state) {\n  return {\n    clients: state.clients.list,\n    user: state.user\n  };\n};\n\nvar ClientListReduxed = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(ClientListSTP)(ClientList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientListReduxed);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/client-list.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/header.component.jsx":
/*!**********************************************************!*\
  !*** ./src/modules/home/components/header.component.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _user_info_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info.component.jsx */ \"./src/modules/home/components/user-info.component.jsx\");\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socketio */ \"./src/modules/home/services/socketio.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction NotiRequestPrivateConnection(props) {\n  var handleAccept = function handleAccept() {\n    _services_socketio__WEBPACK_IMPORTED_MODULE_4__.acceptPrivateConnection(props.targetID);\n    props.endReceivingPhase();\n  };\n\n  var handleReject = function handleReject() {\n    _services_socketio__WEBPACK_IMPORTED_MODULE_4__.rejectPrivateConnection();\n    props.endReceivingPhase(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal fade\",\n    id: \"requestModal\",\n    \"data-bs-backdrop\": \"static\",\n    tabIndex: \"-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-dialog modal-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary me-3\",\n    disabled: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"far fa-bell\",\n    style: {\n      fontSize: \"1.5rem\"\n    }\n  })), \"Someone request a private connection\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-danger\",\n    \"data-bs-dismiss\": \"modal\",\n    onClick: handleReject\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"far fa-times-circle\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-success-custom\",\n    \"data-bs-dismiss\": \"modal\",\n    onClick: handleAccept\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"far fa-check-circle\"\n  }))))));\n}\n\nvar Header = function Header(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var tooltip = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip(document.getElementById(\"publicIp\"));\n    setModal(new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(document.getElementById(\"requestModal\"), {\n      keyboard: false\n    }));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.privateConnection.isReceivingRequest) {\n      modal.show();\n    }\n  }, [props.privateConnection.isReceivingRequest]);\n  var notiLostConnection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"float-start ms-4 btn btn-danger\",\n    \"data-bs-placement\": \"right\",\n    title: \"Can't get public IP due to connection\",\n    id: \"publicIp\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"spinner-border text-light\",\n    style: {\n      width: \"1rem\",\n      height: \"1rem\",\n      borderWidth: \"0.2rem\"\n    }\n  }), \" \", \"Lost connection\");\n  var notiPublicIP = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"float-start ms-4 btn btn-primary\",\n    \"data-bs-placement\": \"right\",\n    title: \"Public IP of this device \",\n    id: \"publicIp\"\n  }, \"\".concat(props.user.ip, \":\").concat(props.user.port));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, props.status.toServer ? notiPublicIP : notiLostConnection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"float-end me-4 \",\n    id: \"user\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_user_info_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotiRequestPrivateConnection, {\n    targetID: props.privateConnection.targetID,\n    endReceivingPhase: props.endReceivingPhase\n  }));\n};\n\nvar HeaderSTP = function HeaderSTP(state) {\n  return {\n    user: state.user,\n    status: state.status,\n    privateConnection: state.privateConnection\n  };\n};\n\nvar HeaderDTP = function HeaderDTP(dispatch) {\n  return {\n    updatePublicIP: function updatePublicIP(data) {\n      return dispatch({\n        type: \"UPDATE_IP\",\n        data: data\n      });\n    },\n    endReceivingPhase: function endReceivingPhase(isAccept) {\n      return dispatch({\n        type: \"END_RECEIVING_REQUEST\",\n        data: isAccept\n      });\n    }\n  };\n};\n\nvar HeaderReduxed = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(HeaderSTP, HeaderDTP)(Header);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderReduxed);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/header.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/interacting-content.component.jsx":
/*!***********************************************************************!*\
  !*** ./src/modules/home/components/interacting-content.component.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var _chat_container_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-container.component.jsx */ \"./src/modules/home/components/chat-container.component.jsx\");\n\n\n\n\nfunction InteractingContent() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {// const tooltips = [1, 2, 3].map((number) => {\n    //   return new Tooltip(document.getElementById(\"file\" + number));\n    // });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chat_container_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"mb-2 btn\",\n    \"data-bs-placement\": \"left\",\n    \"data-bs-animation\": \"false\",\n    title: \"file info\",\n    id: \"file1\"\n  }, \"File\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"mb-2 btn btn-primary\",\n    \"data-bs-placement\": \"left\",\n    \"data-bs-animation\": \"false\",\n    title: \"file info\",\n    id: \"file2\"\n  }, \"file\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"mb-2 btn btn-primary\",\n    \"data-bs-placement\": \"left\",\n    \"data-bs-animation\": \"false\",\n    title: \"file info\",\n    id: \"file3\"\n  }, \"file\"))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractingContent);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/interacting-content.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/interacting-view.component.jsx":
/*!********************************************************************!*\
  !*** ./src/modules/home/components/interacting-view.component.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _target_info_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-info.component.jsx */ \"./src/modules/home/components/target-info.component.jsx\");\n/* harmony import */ var _interacting_content_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interacting-content.component.jsx */ \"./src/modules/home/components/interacting-content.component.jsx\");\n\n\n\n\nfunction InteractingView() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container pt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_target_info_component_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_interacting_content_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractingView);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/interacting-view.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/target-info.component.jsx":
/*!***************************************************************!*\
  !*** ./src/modules/home/components/target-info.component.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction TargetInfo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-2\"\n  }, \"Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col\"\n  }, \"Name\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TargetInfo);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/target-info.component.jsx?");

/***/ }),

/***/ "./src/modules/home/components/user-info.component.jsx":
/*!*************************************************************!*\
  !*** ./src/modules/home/components/user-info.component.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nfunction UserDropDown(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn dropdown-toggle\",\n    \"data-bs-toggle\": \"dropdown\",\n    id: \"user-info-toggle\"\n  }, props.user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"dropdown-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    style: {\n      cursor: \"pointer\"\n    },\n    className: \"dropdown-item\"\n  }, \"Setting\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    style: {\n      cursor: \"pointer\"\n    },\n    className: \"dropdown-item\"\n  }, \"Logout\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"hr\", {\n    className: \"dropdown-divider\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    style: {\n      cursor: \"pointer\"\n    },\n    className: \"dropdown-item\"\n  }, \"Exit\"))));\n}\n\nvar UserInfoSTP = function UserInfoSTP(state) {\n  return {\n    user: state.user\n  };\n};\n\nvar UserInfoDTP = function UserInfoDTP(dispatch) {\n  return {\n    test: function test() {\n      return dispatch({\n        type: \"test\"\n      });\n    }\n  };\n};\n\nvar ReduxedUserDropDown = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(UserInfoSTP, UserInfoDTP)(UserDropDown);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReduxedUserDropDown);\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/components/user-info.component.jsx?");

/***/ }),

/***/ "./src/modules/home/home.index.jsx":
/*!*****************************************!*\
  !*** ./src/modules/home/home.index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_header_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header.component.jsx */ \"./src/modules/home/components/header.component.jsx\");\n/* harmony import */ var _components_client_list_component_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client-list.component.jsx */ \"./src/modules/home/components/client-list.component.jsx\");\n/* harmony import */ var _components_interacting_view_component_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/interacting-view.component.jsx */ \"./src/modules/home/components/interacting-view.component.jsx\");\n/* harmony import */ var _style_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/home.css */ \"./src/modules/home/style/home.css\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/store */ \"./src/modules/redux/store.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redux_store__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/socketio */ \"./src/modules/home/services/socketio.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _services_socketio__WEBPACK_IMPORTED_MODULE_9__.connect();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header_component_jsx__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_client_list_component_jsx__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_interacting_view_component_jsx__WEBPACK_IMPORTED_MODULE_6__.default, null));\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: (_redux_store__WEBPACK_IMPORTED_MODULE_8___default())\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null)), document.getElementById(\"app\"));\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/home.index.jsx?");

/***/ }),

/***/ "./src/modules/home/services/client.service.js":
/*!*****************************************************!*\
  !*** ./src/modules/home/services/client.service.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nmodule.exports.getPublicIP = function () {\n  return axios.get(\"http://localhost:3000/get-public-ip\");\n};\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/services/client.service.js?");

/***/ }),

/***/ "./src/modules/home/services/socketio.js":
/*!***********************************************!*\
  !*** ./src/modules/home/services/socketio.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"),\n    io = _require.io;\n\nvar store = __webpack_require__(/*! ../../redux/store */ \"./src/modules/redux/store.js\");\n\nvar _require2 = __webpack_require__(/*! ../services/client.service */ \"./src/modules/home/services/client.service.js\"),\n    getPublicIP = _require2.getPublicIP;\n\nvar socket;\n\nmodule.exports.connect = function () {\n  socket = io(\"http://localhost:3000/\");\n  socket.on(\"connect\", function () {\n    getPublicIP().then(function (res) {\n      store.dispatch({\n        type: \"UPDATE_IP\",\n        data: res.data\n      });\n      store.dispatch({\n        type: \"UPDATE_SOCKETID\",\n        data: socket.id\n      });\n      store.dispatch({\n        type: \"CONNECT_TO_SERVER\"\n      });\n      socket.emit(\"data-from-client\", store.getState().user);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  });\n  socket.on(\"update-clients-list\", function (clients) {\n    if (clients) {\n      store.dispatch({\n        type: \"UPDATE_CLIENTS_LIST\",\n        data: clients\n      });\n    }\n  });\n  socket.on(\"disconnect\", function (reason) {\n    console.log(reason);\n    store.dispatch({\n      type: \"DISCONNECT_FROM_SERVER\"\n    });\n    store.dispatch({\n      type: \"DISCONNECT_PRIVATE_CONNECTION\"\n    });\n  }); // receiver\n\n  socket.on(\"request-private-connection\", function (requestedSocketID) {\n    store.dispatch({\n      type: \"RECEIVING_REQUEST\",\n      data: requestedSocketID\n    });\n  });\n  socket.on(\"target-leave-private-connection\", function () {\n    store.dispatch({\n      type: \"DISCONNECT_PRIVATE_CONNECTION\"\n    });\n  });\n};\n\nmodule.exports.acceptPrivateConnection = function (requestedSocketID) {\n  // accept\n  socket.emit(\"response-private-connection\", requestedSocketID, socket.id, function (response) {\n    // response type: 'timeout' 'accept: ${}'\n    if (response == \"timeout\") {\n      console.log(\"timeout\");\n      return;\n    }\n\n    var roomID = response.split(\" \")[1];\n    console.log(response);\n    console.log(roomID);\n    store.dispatch({\n      type: \"CONNECT_PRIVATE_CONNECTION\",\n      data: {\n        roomID: roomID,\n        targetID: requestedSocketID\n      }\n    });\n  });\n};\n\nmodule.exports.rejectPrivateConnection = function () {\n  // reject\n  socket.emit(\"response-private-connection\");\n  console.log(\"rejected\");\n};\n\nmodule.exports.disconnect = function () {\n  socket.disconnect();\n};\n\nmodule.exports.reconnect = function () {\n  socket.connect();\n}; // requester\n\n\nmodule.exports.connectPrivate = function (targetSocketID) {\n  if (socket.disconnected || targetSocketID == null) {\n    return;\n  }\n\n  socket.emit(\"request-private-connection\", targetSocketID, function (response) {\n    // 4 type response : 'timeout' 'reject' 'accept: ${roomID}' 'already in connection: ${roomID}'\n    if (response == \"timeout\") {\n      console.log(\"timeout\");\n      return;\n    }\n\n    if (response == \"reject\") {\n      console.log(\"reject\");\n      return;\n    }\n\n    if (response.includes(\"already in connection\")) {\n      var alreadyRoomID = response.split(\": \")[1];\n      console.log(alreadyRoomID);\n      return;\n    }\n\n    console.log(response);\n    var roomID = response.split(\": \")[1];\n    console.log(\"Room ID: \", roomID);\n    store.dispatch({\n      type: \"CONNECT_PRIVATE_CONNECTION\",\n      data: {\n        roomID: roomID,\n        targetID: targetSocketID\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/services/socketio.js?");

/***/ }),

/***/ "./src/modules/redux/store.js":
/*!************************************!*\
  !*** ./src/modules/redux/store.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar defaultState = {\n  user: {\n    name: \"Linh\"\n  },\n  clients: {\n    list: []\n  },\n  privateConnection: {\n    roomID: null,\n    targetID: null,\n    isReceivingRequest: false\n  },\n  status: {\n    toServer: false,\n    toPeer: false\n  }\n};\n\nvar userReducer = function userReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"UPDATE_IP\":\n      return Object.assign({}, state, {\n        ip: action.data.ip,\n        port: action.data.port\n      });\n\n    case \"DISCONNECT_FROM_SERVER\":\n      return Object.assign({}, state, {\n        ip: undefined,\n        port: undefined\n      });\n\n    case \"UPDATE_SOCKETID\":\n      return Object.assign({}, state, {\n        socketID: action.data\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar clientsReducer = function clientsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"UPDATE_CLIENTS_LIST\":\n      return Object.assign({}, state, {\n        list: action.data\n      });\n\n    case \"DISCONNECT_FROM_SERVER\":\n      return Object.assign({}, state, {\n        list: []\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar privateConnectionReducer = function privateConnectionReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"RECEIVING_REQUEST\":\n      return Object.assign({}, state, {\n        isReceivingRequest: true,\n        targetID: action.data\n      });\n\n    case \"END_RECEIVING_REQUEST\":\n      return Object.assign({}, state, {\n        isReceivingRequest: false,\n        targetID: !action.data ? null : state.targetID\n      });\n\n    case \"CONNECT_PRIVATE_CONNECTION\":\n      return Object.assign({}, state, {\n        roomID: action.data.roomID,\n        targetID: action.data.targetID\n      });\n\n    case \"DISCONNECT_PRIVATE_CONNECTION\":\n      return Object.assign({}, state, {\n        roomID: null,\n        targetID: null\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar statusReducer = function statusReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"CONNECT_TO_SERVER\":\n      return Object.assign({}, state, {\n        toServer: true\n      });\n\n    case \"DISCONNECT_FROM_SERVER\":\n      return Object.assign({}, state, {\n        toServer: false,\n        toPeer: false\n      });\n\n    case \"CONNECT_PRIVATE_CONNECTION\":\n      return Object.assign({}, state, {\n        toPeer: true\n      });\n\n    case \"DISCONNECT_PRIVATE_CONNECTION\":\n      return Object.assign({}, state, {\n        toPeer: false\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar combinedReducer = redux.combineReducers({\n  user: userReducer,\n  clients: clientsReducer,\n  status: statusReducer,\n  privateConnection: privateConnectionReducer\n});\nvar store = redux.createStore(combinedReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());\nmodule.exports = store;\n\n//# sourceURL=webpack://FileTransfer/./src/modules/redux/store.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/home/style/home.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/home/style/home.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n}\\nol,\\nul {\\n  padding: 0;\\n}\\n\\n.btn-success-custom {\\n  color: white;\\n  background-color: #48d425;\\n  border-color: #48d425;\\n}\\n.btn-success-custom:hover {\\n  color: white;\\n  background-color: #32b337;\\n  border-color: #278d2a;\\n}\\n.btn-success-custom:focus {\\n  color: white;\\n  background-color: #32b337;\\n  border-color: #278d2a;\\n  box-shadow: 0 0 0 0.25rem rgba(7, 169, 12, 0.25);\\n}\\n\\n.modal-footer .btn {\\n  font-size: 1.5rem;\\n  padding: 0px 12px;\\n}\\n\\nbody {\\n  padding-top: 10px;\\n  background-color: #c8fabe;\\n}\\n/* user drop down */\\n#user-info-toggle {\\n  background-color: #05ab00;\\n  border-color: #62ac19;\\n  color: white;\\n}\\n\\n/* clients list */\\n#clients-list {\\n  padding-top: 40px;\\n}\\n#clients-view > * {\\n  user-select: none;\\n}\\n#clients-view {\\n  background-color: white;\\n  border-radius: 10px;\\n  border: solid 2px #035e00;\\n  padding: 10px 10px 0;\\n}\\n\\n#clients-view-body,\\n#clients-view-header {\\n  padding: 0 15px;\\n}\\n\\n/* view header */\\n#clients-view-header {\\n  border-radius: 10px 10px 0 0;\\n  border-top: solid 2px #f5f9f5;\\n  box-shadow: 0 4px 4px -4px gray;\\n}\\n\\n/* view body */\\n#clients-view-body {\\n  height: 150px;\\n  overflow-y: overlay;\\n}\\n\\n#clients-view-body .row div {\\n  border-top: 1px solid #dee2e6;\\n}\\n#clients-view-body .row {\\n  cursor: pointer;\\n}\\n#clients-view-body .row:hover {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\\n#clients-view-body label {\\n  display: block;\\n}\\n#clients-view-body input {\\n  display: none;\\n}\\n#clients-view-body input:checked + div::before {\\n  position: absolute;\\n  left: 14px;\\n  top: 8px;\\n  color: yellowgreen;\\n  font-weight: 600;\\n  content: \\\"\\\\f3c5\\\";\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n}\\n#clients-view-body input:checked + div:hover {\\n}\\n#clients-view-body .row div {\\n  padding: 0.5rem 0.5rem;\\n}\\n\\n/* clients-view-body scrollball */\\n#clients-view-body::-webkit-scrollbar {\\n  background-color: transparent;\\n  width: 5px;\\n}\\n#clients-view-body:hover::-webkit-scrollbar-thumb {\\n  background-color: #b1b1b1;\\n  border-radius: 4px;\\n}\\n\\n/* wrap content cel */\\n#clients-view-body > .row > div {\\n  word-break: break-all;\\n}\\n\\n/* client action */\\n#clients-action > ul > li + li {\\n  margin-top: 5px;\\n}\\n#clients-action > ul > li {\\n  list-style-type: none;\\n}\\n\\n/* interacting view */\\n\\n/*chat container*/\\n#chat-container {\\n  height: 200px;\\n  padding: 5px;\\n  border-radius: 10px;\\n}\\n\\n/* chat content */\\n#chat-content {\\n  height: 80%;\\n  border: dashed 2px green;\\n  border-bottom: none;\\n  border-radius: 5px;\\n  font-size: 0.8rem;\\n  padding: 7px;\\n  overflow-y: auto;\\n  box-shadow: 0px 5px 8px -6px gray inset, 0px -5px 8px -6px gray inset;\\n}\\n/* chat-content scrollball */\\n#chat-content::-webkit-scrollbar {\\n  background-color: transparent;\\n  width: 5px;\\n}\\n#chat-content:hover::-webkit-scrollbar-thumb {\\n  background-color: #b1b1b1;\\n  border-radius: 4px;\\n}\\n\\n/* chat input */\\n#chat-input {\\n  position: relative;\\n  top: 5px;\\n}\\n#input-text {\\n  width: 90%;\\n  padding: 2px 10px;\\n  border-radius: 15px;\\n  border: none;\\n  box-shadow: 0 0 0 1pt grey;\\n}\\n#input-text:focus {\\n  outline: none;\\n  box-shadow: 0 0 0 2pt black;\\n}\\n\\n#input-btn {\\n  position: absolute;\\n  top: -1px;\\n  right: 0px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/style/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/modules/home/style/home.css":
/*!*****************************************!*\
  !*** ./src/modules/home/style/home.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/home/style/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://FileTransfer/./src/modules/home/style/home.css?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%2527-4_-4_8_8%2527%253e%253ccircle_r=%25272%2527_fill=%2527%2523fff%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%2527-4_-4_8_8%2527%253e%253ccircle_r=%25273%2527_fill=%2527%252386b7fe%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%2527-4_-4_8_8%2527%253e%253ccircle_r=%25273%2527_fill=%2527%2523fff%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%2527-4_-4_8_8%2527%253e%253ccircle_r=%25273%2527_fill=%2527rgba%25280,_0,_0,_0.25%2529%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_12_12%2527_width=%252712%2527_height=%252712%2527_fill=%2527none%2527_stroke=%2527%2523dc3545%2527%253e%253ccircle_cx=%25276%2527_cy=%25276%2527_r=%25274.5%2527/%253e%253cpath_stroke-linejoin=%2527round%2527_d=%2527M5.8_3.6h.4L6_6.5z%2527/%253e%253ccircle_cx=%25276%2527_cy=%25278.2%2527_r=%2527.6%2527_fill=%2527%2523dc3545%2527_stroke=%2527none%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527_fill=%2527%2523000%2527%253e%253cpath_d=%2527M.293.293a1_1_0_011.414_0L8_6.586_14.293.293a1_1_0_111.414_1.414L9.414_8l6.293_6.293a1_1_0_01-1.414_1.414L8_9.414l-6.293_6.293a1_1_0_01-1.414-1.414L6.586_8_.293_1.707a1_1_0_010-1.414z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527_fill=%2527%25230c63e4%2527%253e%253cpath_fill-rule=%2527evenodd%2527_d=%2527M1.646_4.646a.5.5_0_0_1_.708_0L8_10.293l5.646-5.647a.5.5_0_0_1_.708.708l-6_6a.5.5_0_0_1-.708_0l-6-6a.5.5_0_0_1_0-.708z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527_fill=%2527%2523212529%2527%253e%253cpath_fill-rule=%2527evenodd%2527_d=%2527M1.646_4.646a.5.5_0_0_1_.708_0L8_10.293l5.646-5.647a.5.5_0_0_1_.708.708l-6_6a.5.5_0_0_1-.708_0l-6-6a.5.5_0_0_1_0-.708z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527_fill=%2527%2523fff%2527%253e%253cpath_d=%2527M11.354_1.646a.5.5_0_0_1_0_.708L5.707_8l5.647_5.646a.5.5_0_0_1-.708.708l-6-6a.5.5_0_0_1_0-.708l6-6a.5.5_0_0_1_.708_0z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527_fill=%2527%2523fff%2527%253e%253cpath_d=%2527M4.646_1.646a.5.5_0_0_1_.708_0l6_6a.5.5_0_0_1_0_.708l-6_6a.5.5_0_0_1-.708-.708L10.293_8_4.646_2.354a.5.5_0_0_1_0-.708z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_16_16%2527%253e%253cpath_fill=%2527none%2527_stroke=%2527%2523343a40%2527_stroke-linecap=%2527round%2527_stroke-linejoin=%2527round%2527_stroke-width=%25272%2527_d=%2527M2_5l6_6_6-6%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_20_20%2527%253e%253cpath_fill=%2527none%2527_stroke=%2527%2523fff%2527_stroke-linecap=%2527round%2527_stroke-linejoin=%2527round%2527_stroke-width=%25273%2527_d=%2527M6_10h8%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_20_20%2527%253e%253cpath_fill=%2527none%2527_stroke=%2527%2523fff%2527_stroke-linecap=%2527round%2527_stroke-linejoin=%2527round%2527_stroke-width=%25273%2527_d=%2527M6_10l3_3l6-6%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_30_30%2527%253e%253cpath_stroke=%2527rgba%25280,_0,_0,_0.55%2529%2527_stroke-linecap=%2527round%2527_stroke-miterlimit=%252710%2527_stroke-width=%25272%2527_d=%2527M4_7h22M4_15h22M4_23h22%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_30_30%2527%253e%253cpath_stroke=%2527rgba%2528255,_255,_255,_0.55%2529%2527_stroke-linecap=%2527round%2527_stroke-miterlimit=%252710%2527_stroke-width=%25272%2527_d=%2527M4_7h22M4_15h22M4_23h22%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://FileTransfer/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_8_8%2527%253e%253cpath_fill=%2527%2523198754%2527_d=%2527M2.3_6.73L.6_4.53c-.4-1.04.46-1.4_1.1-.8l1.1_1.4_3.4-3.8c.6-.63_1.6-.27_1.2.7l-4_4.6c-.43.5-.8.4-1.1.1z%2527/%253e%253c/svg%253e?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkFileTransfer"] = self["webpackChunkFileTransfer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/modules/home/home.index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;