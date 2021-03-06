'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _responsiveDrawer = require('./actions/responsiveDrawer');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _drawerHelper = require('./utils/drawerHelper.js');

var _drawerHelper2 = _interopRequireDefault(_drawerHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveDrawer = function (_Component) {
  _inherits(ResponsiveDrawer, _Component);

  function ResponsiveDrawer() {
    _classCallCheck(this, ResponsiveDrawer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ResponsiveDrawer.prototype.render = function render() {
    var _props = this.props,
        browser = _props.browser,
        responsiveDrawer = _props.responsiveDrawer,
        breackPoint = _props.breackPoint,
        toggleDrawerOpen = _props.toggleDrawerOpen,
        children = _props.children;


    var props = this.props;
    var open = (0, _drawerHelper2.default)(browser, responsiveDrawer, breackPoint);

    var drawerP = _extends({
      docked: open ? true : responsiveDrawer.docked,
      open: open ? open : responsiveDrawer.open,
      onRequestClose: toggleDrawerOpen
    }, props);

    return _react2.default.createElement(
      _Drawer2.default,
      drawerP,
      children
    );
  };

  return ResponsiveDrawer;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ResponsiveDrawer.propTypes = {
  toggleDrawerOpen: _propTypes2.default.func.isRequired,
  responsiveDrawer: _propTypes2.default.object.isRequired,
  browser: _propTypes2.default.object.isRequired,
  breackPoint: _propTypes2.default.string
} : void 0;

var mapStateToProps = function mapStateToProps(state) {
  var browser = state.browser,
      responsiveDrawer = state.responsiveDrawer;

  return {
    browser: browser,
    responsiveDrawer: responsiveDrawer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDrawerOpen: function toggleDrawerOpen() {
      dispatch((0, _responsiveDrawer.toggleDrawerOpen)());
    }

  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
module.exports = exports['default'];