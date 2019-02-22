'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BaseContainer = function BaseContainer(_ref) {
    var children = _ref.children,
        flex = _ref.flex,
        props = _objectWithoutProperties(_ref, ['children', 'flex']);

    if (flex) {
        return _react2.default.createElement(
            _rebass.Flex,
            Object.assign({}, props, { className: props.className }),
            children
        );
    } else {
        return _react2.default.createElement(
            _rebass.Box,
            Object.assign({}, props, { className: props.className }),
            children
        );
    }
};

exports.BaseContainer = BaseContainer;
BaseContainer.PropTypes = {
    flex: _propTypes2.default.bool,
    children: _propTypes2.default.node.isRequired
};

//# sourceMappingURL=BaseContainer.js.map