import ActionTypes from '../../constatnts/ActionTypes.js';

const actionSetMapLayer = (mapKey, layerKey) => {
	return {
		type: ActionTypes.MAPS.LAYER.SET,
		mapKey,
		layerKey,
	};
};

export default {
	setMapLayer: actionSetMapLayer,
};
