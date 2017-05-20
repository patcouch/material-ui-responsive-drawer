var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { RESPONSIVE_DRAWER_SET_DRAWER_OPEN, RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN, RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK, RESPONSIVE_DRAWER_SET_RESPONSIVE } from '../actions/responsiveDrawer';

var initialState = {
	docked: false,
	responsive: true,
	open: false,
	searching: false
};

var responsiveDrawer = function responsiveDrawer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {

		case RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN:
			return _extends({}, state, {
				open: !state.open
			});

		case RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK:
			return _extends({}, state, {
				docked: !state.docked
			});

		case RESPONSIVE_DRAWER_SET_DRAWER_OPEN:
			return _extends({}, state, {
				open: action.open
			});

		case RESPONSIVE_DRAWER_SET_RESPONSIVE:
			return _extends({}, state, {
				responsive: action.responsive
			});

		default:
			return state;
	}
};

export default responsiveDrawer;