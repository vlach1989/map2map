import ActionTypes from '../../constatnts/ActionTypes.js';
import Select from '../Select.js';

const setZoom = zoom => {
	return (dispatch, getState) => {
		const currentZoom = Select.mapSet.getZoom(getState());
		if (zoom !== currentZoom) {
			dispatch(actionSetZoom(zoom));
		}
	};
};

const actionSetZoom = zoom => {
	return {
		type: ActionTypes.MAP_SET.ZOOM.SET,
		zoom,
	};
};

export default {
	setZoom,
};
