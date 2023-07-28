import L from 'leaflet';
import Proj from 'proj4leaflet';

const projDefinitions = {
	epsg5514:
		'+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs',
};

function get(code) {
	switch (code) {
		case 'EPSG:4326':
			return L.CRS.EPSG4326;
		case 'EPSG:5514':
			return new Proj.CRS('EPSG:5514', projDefinitions.epsg5514, {
				resolutions: [
					102400, 51200, 25600, 12800, 6400, 3200, 1600, 800, 400, 200, 100, 50,
					25, 12.5, 6.25, 3.125, 1.5625, 0.78125, 0.390625,
				],
			});
		default:
			return L.CRS.EPSG3857;
	}
}

export default {
	get,
};
