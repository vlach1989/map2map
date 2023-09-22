const getZoom = state => state.mapSet.zoom;
const getLat = state => state.mapSet.lat;
const getLon = state => state.mapSet.lon;
const getCrs = state => state.mapSet.crs;

export default {
	getCrs,
	getLat,
	getLon,
	getZoom,
};
