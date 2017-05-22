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

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveAppBar = function (_Component) {
  _inherits(ResponsiveAppBar, _Component);

  function ResponsiveAppBar() {
    _classCallCheck(this, ResponsiveAppBar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ResponsiveAppBar.prototype.render = function render() {
    var _props = this.props,
        browser = _props.browser,
        responsiveDrawer = _props.responsiveDrawer,
        breackPoint = _props.breackPoint,
        children = _props.children,
        width = _props.width,
        openSecondary = _props.openSecondary,
        style = _props.style,
        toggleDrawerOpen = _props.toggleDrawerOpen,
        rest = _objectWithoutProperties(_props, ['browser', 'responsiveDrawer', 'breackPoint', 'children', 'width', 'openSecondary', 'style', 'toggleDrawerOpen']);

    var props = _extends({}, this.props);
    var setWidth = (0, _drawerHelper2.default)(browser, responsiveDrawer, breackPoint);
    var hideMenuIconButton = (0, _drawerHelper2.default)(browser, responsiveDrawer, breackPoint);
    var iconDisplay = hideMenuIconButton ? 'none' : 'inline-flex';
    var drawerWidth = width !== undefined ? width : 256;
    var drawerOnRight = openSecondary !== undefined ? openSecondary : false;

    var styles = {
      icon_button: {
        display: iconDisplay
      }
    };

    var appBarProps = _extends({
      width: width,
      style: drawerOnRight ? styles.docked_right : styles.docked_left
    }, rest);

    return _react2.default.createElement(
      _AppBar2.default,
      appBarProps,
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { onTouchTap: toggleDrawerOpen, style: styles.icon_button, contrast: true },
          _react2.default.createElement(_Menu2.default, null)
        ),
        children
      )
    );
  };

  return ResponsiveAppBar;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ResponsiveAppBar.propTypes = {
  responsiveDrawer: _propTypes2.default.object.isRequired,
  browser: _propTypes2.default.object.isRequired,
  toggleDrawerOpen: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object,
  breackPoint: _propTypes2.default.string,
  width: _propTypes2.default.number,
  openSecondary: _propTypes2.default.bool,
  onLeftIconButtonTouchTap: _propTypes2.default.func
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
module.exports = exports['default'];