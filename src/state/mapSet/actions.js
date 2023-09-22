import ActionTypes from '../../constatnts/ActionTypes.js';
import Select from '../Select.js';
import url from '../../utils/url.js';

const setZoom = zoom => {
	return (dispatch, getState) => {
		const currentZoom = Select.mapSet.getZoom(getState());
		if (zoom !== currentZoom) {
			dispatch(actionSetZoom(zoom));
			url.set('z', zoom);
		}
	};
};

const setCenter = center => {
	return (dispatch, getState) => {
		const [lat, lon] = center;
		const currentLat = Select.mapSet.getLat(getState());
		const currentLon = Select.mapSet.getLon(getState());
		if (lat !== currentLat || lon !== currentLon) {
			dispatch(actionSetCenter(lat, lon));
			url.set('lat', lat);
			url.set('lon', lon);
		}
	};
};

const actionSetZoom = zoom => {
	return {
		type: ActionTypes.MAP_SET.ZOOM.SET,
		zoom,
	};
};

const actionSetCenter = (lat, lon) => {
	return {
		type: ActionTypes.MAP_SET.CENTER.SET,
		lat,
		lon,
	};
};

export default {
	setCenter,
	setZoom,
};
