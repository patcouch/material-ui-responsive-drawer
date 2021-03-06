'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _responsiveDrawer = require('./actions/responsiveDrawer');

var _drawerHelper = require('./utils/drawerHelper.js');

var _drawerHelper2 = _interopRequireDefault(_drawerHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyContainer = function (_Component) {
  _inherits(BodyContainer, _Component);

  function BodyContainer() {
    _classCallCheck(this, BodyContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BodyContainer.prototype.render = function render() {
    var _props = this.props,
        browser = _props.browser,
        responsiveDrawer = _props.responsiveDrawer,
        breackPoint = _props.breackPoint,
        children = _props.children,
        width = _props.width,
        openSecondary = _props.openSecondary,
        style = _props.style;


    var setWidth = (0, _drawerHelper2.default)(browser, responsiveDrawer, breackPoint);
    var drawerWidth = width !== undefined ? width : 256;
    var drawerOnRight = openSecondary !== undefined ? openSecondary : false;

    var styles = {
      docked_left: _extends({
        position: 'absolute',
        left: setWidth ? drawerWidth : 0,
        top: 0,
        bottom: 0,
        right: 0
      }, style),
      docked_right: _extends({
        position: 'absolute',
        right: setWidth ? drawerWidth : 0,
        top: 0,
        left: 0,
        bottom: 0
      }, style)
    };

    return _react2.default.createElement(
      'div',
      { style: drawerOnRight ? styles.docked_right : styles.docked_left },
      children
    );
  };

  return BodyContainer;
}(_react.Component);

process.env.NODE_ENV !== "production" ? BodyContainer.propTypes = {
  responsiveDrawer: _propTypes2.default.object.isRequired,
  browser: _propTypes2.default.object.isRequired,
  style: _propTypes2.default.object,
  breackPoint: _propTypes2.default.string,
  width: _propTypes2.default.number,
  openSecondary: _propTypes2.default.bool
} : void 0;

var mapStateToProps = function mapStateToProps(state) {
  var browser = state.browser,
      responsiveDrawer = state.responsiveDrawer;

  return {
    browser: browser,
    responsiveDrawer: responsiveDrawer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BodyContainer);
module.exports = exports['default'];