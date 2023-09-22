import ActionTypes from '../../constatnts/ActionTypes';
import {CENTER, CRS, ZOOM} from '../../constatnts/defaultValues.js';

const initialState = {
	zoom: ZOOM,
	lat: CENTER[0],
	lon: CENTER[1],
	crs: CRS,
};

const setZoom = (state, action) => {
	return {
		...state,
		zoom: action.zoom,
	};
};

const setCenter = (state, action) => {
	return {
		...state,
		lat: action.lat,
		lon: action.lon,
	};
};

const setCrs = (state, action) => {
	return {
		...state,
		crs: action.crs,
	};
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.MAP_SET.CENTER.SET:
			return setCenter(state, action);
		case ActionTypes.MAP_SET.CRS.SET:
			return setCrs(state, action);
		case ActionTypes.MAP_SET.ZOOM.SET:
			return setZoom(state, action);
		default:
			return state;
	}
};
