import {WMSTileLayer} from 'react-leaflet';
import crsUtils from '../../utils/crs.js';

function get(definition, crs) {
	const {type, data, key} = definition;

	switch (type) {
		case 'wms':
			return (
				<WMSTileLayer
					key={key}
					url={data.url}
					params={data.params}
					crs={crsUtils.getLeafletCrsDefinition(crs)}
					maxZoom={22}
				/>
			);
		default:
			return null;
	}
}

export default {
	get,
};
