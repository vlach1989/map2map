import {createSelector} from 'reselect';
import layers from '../../data/layers.json';

const getAsObject = state => state.maps;

const getAll = state => Object.values(getAsObject(state));

const getByKey = createSelector(
	[getAsObject, (state, mapKey) => mapKey],
	(maps, mapKey) => {
		return maps?.[mapKey] || null;
	},
);

const getLayers = createSelector([getByKey], map => {
	if (map?.layers?.length) {
		return map.layers.map(({key}) => layers[key]);
	} else {
		return [];
	}
});

export default {
	getAll,
	getLayers,
};
