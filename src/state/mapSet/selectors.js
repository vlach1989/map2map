const getZoom = state => state.mapSet.zoom;
const getLat = state => state.mapSet.lat;
const getLon = state => state.mapSet.lon;
const getCrs = state => state.mapSet.crs;
const getMaps = state => state.mapSet.maps || [];

export default {
	getCrs,
	getLat,
	getLon,
	getMaps,
	getZoom,
};
