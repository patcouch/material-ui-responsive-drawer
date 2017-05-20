var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen as _toggleDrawerOpen } from './actions/responsiveDrawer';
import Drawer from 'material-ui/Drawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

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
    var open = isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);

    var drawerP = _extends({
      docked: open ? true : responsiveDrawer.docked,
      open: open ? open : responsiveDrawer.open,
      onRequestChange: toggleDrawerOpen
    }, props);

    return React.createElement(
      Drawer,
      drawerP,
      children
    );
  };

  return ResponsiveDrawer;
}(Component);

process.env.NODE_ENV !== "production" ? ResponsiveDrawer.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  breackPoint: PropTypes.string
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);