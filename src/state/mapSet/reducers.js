import ActionTypes from '../../constatnts/ActionTypes';
import {CENTER, ZOOM} from '../../constatnts/defaultValues.js';

const initialState = {
	zoom: ZOOM,
	lat: CENTER[0],
	lon: CENTER[1],
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

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.MAP_SET.ZOOM.SET:
			return setZoom(state, action);
		case ActionTypes.MAP_SET.CENTER.SET:
			return setCenter(state, action);
		default:
			return state;
	}
};
