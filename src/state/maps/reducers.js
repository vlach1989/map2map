import ActionTypes from '../../constatnts/ActionTypes.js';
import initialState from './initialState.js';

const setMapLayer = (state, action) => {
	return {
		...state,
		[action.mapKey]: {
			...state[action.mapKey],
			layer: action.layerKey,
		},
	};
};

export default (state = initialState.get(), action) => {
	switch (action.type) {
		case ActionTypes.MAPS.LAYER.SET:
			return setMapLayer(state, action);
		default:
			return state;
	}
};
