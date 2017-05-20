'use strict';

exports.__esModule = true;
exports.default = isResponsiveAndOverBreackPoint;
var DEFAULT_BREACK_POINT = exports.DEFAULT_BREACK_POINT = 'medium';

function isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint) {
  return browser.greaterThan[breackPoint !== undefined ? breackPoint : DEFAULT_BREACK_POINT] && responsiveDrawer.responsive;
}