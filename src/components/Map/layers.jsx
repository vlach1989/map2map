import {WMSTileLayer} from 'react-leaflet';
import crsUtils from '../../utils/crs.js';

function get(definition, crs) {
	const {type, data} = definition;

	switch (type) {
		case 'wms':
			return (
				<WMSTileLayer
					url={data.url}
					params={data.params}
					crs={crsUtils.get(crs)}
				/>
			);
		default:
			return null;
	}
}

export default {
	get,
};
