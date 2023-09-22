const getZoom = state => state.mapSet.zoom;
const getLat = state => state.mapSet.lat;
const getLon = state => state.mapSet.lon;

export default {
	getLat,
	getLon,
	getZoom,
};
