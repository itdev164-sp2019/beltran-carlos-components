'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonBase = require('./ButtonBase');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents2.default)(_ButtonBase.ButtonBase)(_templateObject, function (props) {
  return props.theme.variants.linkButton[props.variant || 'primary'];
});

var LinkButton = exports.LinkButton = function LinkButton(props) {
  return _react2.default.createElement(StyledButton, props);
};

LinkButton.propTypes = {
  variant: _propTypes2.default.string
};

//# sourceMappingURL=LinkButton.js.map