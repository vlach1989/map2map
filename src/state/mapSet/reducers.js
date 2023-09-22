import ActionTypes from '../../constatnts/ActionTypes';
import {
	CENTER,
	CRS,
	MAPS,
	ZOOM,
} from '../../constatnts/defaultConfiguration.js';
import url from '../../utils/url.js';

const initialState = {
	zoom: url.getParamValue('z') || ZOOM,
	lat: url.getParamValue('lat') || CENTER[0],
	lon: url.getParamValue('lon') || CENTER[1],
	crs: CRS,
	maps: Object.keys(MAPS),
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
