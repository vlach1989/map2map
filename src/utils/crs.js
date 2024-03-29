import L from 'leaflet';
import Proj from 'proj4leaflet';
import projections from '../data/projections.json';

/**
 * Get Leaflet CRS definition
 * @param code {string} epsg code in 'EPSG:4326' format
 * @returns {*|Proj.CRS}
 */
function getLeafletCrsDefinition(code) {
	const definedProjection = projections[code];
	if (definedProjection) {
		const {definition, resolutions} = definedProjection;
		if (definition && resolutions) {
			return new Proj.CRS(code, definition, {
				resolutions,
			});
		} else {
			return L.CRS.EPSG3857;
		}
	} else {
		switch (code) {
			case 'EPSG:4326':
				return L.CRS.EPSG4326;
			default:
				return L.CRS.EPSG3857;
		}
	}
}

export default {
	getLeafletCrsDefinition,
};
