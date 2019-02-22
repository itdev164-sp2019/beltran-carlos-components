'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Masthead = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    height: ', ';\n    width: 100%;\n    background-color: rebeccapurple;\n    margin-bottom: 1.45rem;\n'], ['\n    height: ', ';\n    width: 100%;\n    background-color: rebeccapurple;\n    margin-bottom: 1.45rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rebass = require('rebass');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Outer = (0, _styledComponents2.default)(_rebass.Box)(_templateObject, function (props) {
    return props.height;
});

var Masthead = exports.Masthead = function Masthead(_ref) {
    var height = _ref.height,
        siteTitle = _ref.siteTitle;

    return _react2.default.createElement(
        Outer,
        { height: height },
        _react2.default.createElement(
            _rebass.Link,
            {
                href: '/',
                style: {
                    color: 'white',
                    textDecoration: 'none'
                }
            },
            siteTitle
        )
    );
};

Masthead.propTypes = {
    height: _propTypes2.default.string.isRequired,
    siteTitle: _propTypes2.default.string
};

//# sourceMappingURL=Masthead.js.map