import ActionTypes from '../../constatnts/ActionTypes';

const initialState = {
	zoom: 16,
};

const setZoom = (state, action) => {
	return {
		...state,
		zoom: action.zoom,
	};
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.MAP_SET.ZOOM.SET:
			return setZoom(state, action);
		default:
			return state;
	}
};
