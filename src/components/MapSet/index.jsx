import crs from '../../utils/crs.js';
import Map from '../Map';

import './style.css';

function MapSet() {
	return <Map center={[49.73, 13.75]} zoom={14} crs={crs.get('EPSG:5514')} />;
}

export default MapSet;
