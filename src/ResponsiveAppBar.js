import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class ResponsiveAppBar extends Component {

  render() {
    const {
      browser,
      responsiveDrawer,
      breackPoint,
      children,
      width,
      openSecondary,
      style,
      toggleDrawerOpen,
      ...rest
    } = this.props
    const props={...(this.props)};
    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const hideMenuIconButton=isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const iconDisplay=hideMenuIconButton?'none':'inline-flex';
    const drawerWidth=width!==undefined?width:256;
    const drawerOnRight=openSecondary!==undefined?openSecondary:false;

    const styles={
      docked_left: {
        position: 'relative',
        width: 'auto',
        ...style
      },
      docked_right: {
        position: 'relative',
        width: 'auto',
        ...style
      },
      icon_button: {
        display: iconDisplay
      }
    }

    const appBarProps = {
      width,
      style: drawerOnRight?styles.docked_right:styles.docked_left,
      ...rest
    };       

    return (

      <AppBar {...appBarProps}>
        <Toolbar>
          <IconButton onTouchTap={toggleDrawerOpen} style={styles.icon_button} contrast>
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </AppBar>

    );

  }
}

ResponsiveAppBar.propTypes = {
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  style: PropTypes.object,
  breackPoint: PropTypes.string,
  width: PropTypes.number,
  openSecondary: PropTypes.bool,
  onLeftIconButtonTouchTap: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {  browser, responsiveDrawer } = state;
  return {
    browser,
    responsiveDrawer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveAppBar);
