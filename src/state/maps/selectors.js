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

const getLayer = createSelector([getByKey], map => {
	return layers[map.layer] || null;
});

export default {
	getAll,
	getLayer,
};
