import ActionTypes from '../../constatnts/ActionTypes.js';
import url from '../../utils/url.js';
import Select from '../Select.js';

function setMapLayer(mapKey, layerKey) {
	return (dispatch, getState) => {
		dispatch(actionSetMapLayer(mapKey, layerKey));

		// update url
		const maps = Select.maps.getAll(getState());
		const mapKeys = maps?.map(map => map.key);
		url.set('maps', mapKeys);
		maps.forEach(map => {
			url.set(map.key, map.layer);
		});
	};
}

const actionSetMapLayer = (mapKey, layerKey) => {
	return {
		type: ActionTypes.MAPS.LAYER.SET,
		mapKey,
		layerKey,
	};
};

export default {
	setMapLayer,
};
