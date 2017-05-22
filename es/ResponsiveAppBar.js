var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen as _toggleDrawerOpen } from './actions/responsiveDrawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

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
    var setWidth = isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    var hideMenuIconButton = isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    var iconDisplay = hideMenuIconButton ? 'none' : 'inline-flex';
    var drawerWidth = width !== undefined ? width : 256;
    var drawerOnRight = openSecondary !== undefined ? openSecondary : false;

    var styles = {
      docked_left: _extends({
        position: 'fixed',
        width: 'auto',
        top: 0,
        right: 0,
        height: 54
      }, style),
      docked_right: _extends({
        position: 'fixed',
        width: 'auto',
        top: 0,
        left: 0,
        height: 54
      }, style),
      icon_button: {
        display: iconDisplay
      }
    };

    var appBarProps = _extends({
      width: width,
      style: drawerOnRight ? styles.docked_right : styles.docked_left
    }, rest);

    return React.createElement(
      AppBar,
      appBarProps,
      React.createElement(
        Toolbar,
        null,
        React.createElement(
          IconButton,
          { onTouchTap: toggleDrawerOpen, style: styles.icon_button, contrast: true },
          React.createElement(MenuIcon, null)
        ),
        children
      )
    );
  };

  return ResponsiveAppBar;
}(Component);

process.env.NODE_ENV !== "production" ? ResponsiveAppBar.propTypes = {
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  style: PropTypes.object,
  breackPoint: PropTypes.string,
  width: PropTypes.number,
  openSecondary: PropTypes.bool,
  onLeftIconButtonTouchTap: PropTypes.func
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
      dispatch(_toggleDrawerOpen());
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);