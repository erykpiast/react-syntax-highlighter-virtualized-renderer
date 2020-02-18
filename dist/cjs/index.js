"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = virtualizedRenderer;

var _react = _interopRequireDefault(require("react"));

var _reactVirtualized = require("react-virtualized");

var _reactSyntaxHighlighter = require("react-syntax-highlighter/dist/cjs/create-element");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function rowRenderer(_ref, _ref2) {
  var rows = _ref.rows,
      stylesheet = _ref.stylesheet,
      useInlineStyles = _ref.useInlineStyles;
  var index = _ref2.index,
      key = _ref2.key,
      style = _ref2.style;
  return (0, _reactSyntaxHighlighter.default)({
    node: rows[index],
    stylesheet: stylesheet,
    style: style,
    useInlineStyles: useInlineStyles,
    key: key
  });
}

function virtualizedRenderer() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$overscanRowCoun = _ref3.overscanRowCount,
      overscanRowCount = _ref3$overscanRowCoun === void 0 ? 10 : _ref3$overscanRowCoun,
      _ref3$rowHeight = _ref3.rowHeight,
      rowHeight = _ref3$rowHeight === void 0 ? 15 : _ref3$rowHeight;

  return function (_ref4) {
    var rows = _ref4.rows,
        stylesheet = _ref4.stylesheet,
        useInlineStyles = _ref4.useInlineStyles;
    return _react["default"].createElement("div", {
      style: {
        height: "100%"
      }
    }, _react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref5) {
      var height = _ref5.height,
          width = _ref5.width;
      return _react["default"].createElement(_reactVirtualized.List, {
        height: height,
        width: width,
        rowHeight: rowHeight,
        rowRenderer: rowRenderer.bind(null, {
          rows: rows,
          stylesheet: stylesheet,
          useInlineStyles: useInlineStyles
        }),
        rowCount: rows.length,
        overscanRowCount: overscanRowCount
      });
    }));
  };
}