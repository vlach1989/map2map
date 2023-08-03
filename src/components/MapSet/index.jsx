import crs from '../../utils/crs.js';
import Map from '../Map';

import './style.css';
import {useState} from 'react';
import {WMSTileLayer} from 'react-leaflet';

function MapSet() {
	const [center, setCenter] = useState([49.735, 13.759]);
	const [zoom, setZoom] = useState(16);

	return (
		<div className="m2m-MapSet">
			<Map
				center={center}
				zoom={zoom}
				onCenterChange={setCenter}
				onZoomChange={setZoom}
				crs={crs.get('EPSG:5514')}
				zoomControl={false}
				attributionControl={false}
			>
				<WMSTileLayer
					url={'https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?'}
					params={{
						layers: 'orto',
					}}
					crs={crs.get('EPSG:5514')}
				/>
			</Map>
			<Map
				center={center}
				zoom={zoom}
				onCenterChange={setCenter}
				onZoomChange={setZoom}
				crs={crs.get('EPSG:5514')}
				zoomControl={false}
			>
				<WMSTileLayer
					url={
						'https://ags.cuzk.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer'
					}
					params={{
						layers: '0',
					}}
					crs={crs.get('EPSG:5514')}
				/>
			</Map>
		</div>
	);
}

export default MapSet;
