'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n// We could add styles here, but it is not necessary.\n// The main reason this is a styled component is to wrap the styled icon passed in as a prop.\n'], ['\n// We could add styles here, but it is not necessary.\n// The main reason this is a styled component is to wrap the styled icon passed in as a prop.\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonBase = require('./ButtonBase');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents2.default)(_ButtonBase.ButtonBase)(_templateObject, function (props) {
    return props.theme.variants.iconButton[props.variant || 'primary'];
});

var IconButton = (0, _styledComponents2.default)(function (_ref) {
    var icon = _ref.icon,
        props = _objectWithoutProperties(_ref, ['icon']);

    var clone = _react2.default.cloneElement.apply(_react2.default, [icon].concat(_toConsumableArray(props)));
    return _react2.default.createElement(StyledButton, Object.assign({ as: clone.type }, props, { className: props.className }));
})(_templateObject2);

exports.IconButton = IconButton;
IconButton.defaultProps = {
    size: 24
};

IconButton.propTypes = {
    icon: _propTypes2.default.node.isRequired,
    variant: _propTypes2.default.string
};

//# sourceMappingURL=IconButton.js.map