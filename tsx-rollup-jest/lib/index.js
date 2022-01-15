'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const HelloWorld = () => {
    const ref = React.useRef(0);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("h1", { key: ref.current }, "Hello World!")));
};

const text = "hello world";
console.log(text);
const getText = () => {
    return text;
};

exports.HelloWorld = HelloWorld;
exports["default"] = getText;
//# sourceMappingURL=index.js.map
