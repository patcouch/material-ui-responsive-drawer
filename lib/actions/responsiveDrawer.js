'use strict';

exports.__esModule = true;
exports.toggleDrawerOpen = toggleDrawerOpen;
exports.toggleDrawerDock = toggleDrawerDock;
exports.setDrawerOpen = setDrawerOpen;
exports.setResponsive = setResponsive;
var RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN = exports.RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN = 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN';
var RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK = exports.RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK = 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK';
var RESPONSIVE_DRAWER_SET_DRAWER_OPEN = exports.RESPONSIVE_DRAWER_SET_DRAWER_OPEN = 'RESPONSIVE_DRAWER_SET_DRAWER_OPEN';
var RESPONSIVE_DRAWER_SET_RESPONSIVE = exports.RESPONSIVE_DRAWER_SET_RESPONSIVE = 'RESPONSIVE_DRAWER_SET_RESPONSIVE';

function toggleDrawerOpen() {
  return {
    type: RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN
  };
}

function toggleDrawerDock() {
  return {
    type: RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK
  };
}

function setDrawerOpen(open) {
  return {
    type: RESPONSIVE_DRAWER_SET_DRAWER_OPEN,
    open: open
  };
}

function setResponsive(responsive) {
  return {
    type: RESPONSIVE_DRAWER_SET_RESPONSIVE,
    responsive: responsive
  };
}