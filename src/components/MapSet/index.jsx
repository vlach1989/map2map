import crs from '../../utils/crs.js';
import Map from '../Map';

import './style.css';
import {useEffect, useState} from 'react';
import {WMSTileLayer} from 'react-leaflet';
import PropTypes from 'prop-types';

function MapSet({zoom = 16, lat = 49.735, lon = 13.759}) {
	const [currentCenter, setCenter] = useState([lat, lon]);
	const [currentZoom, setZoom] = useState(zoom);

	useEffect(() => {
		setZoom(zoom);
	}, [zoom]);

	useEffect(() => {
		setCenter([lat, lon]);
	}, [lat, lon]);

	return (
		<div className="m2m-MapSet">
			<Map
				center={currentCenter}
				zoom={currentZoom}
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
				center={currentCenter}
				zoom={currentZoom}
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

MapSet.propTypes = {
	lat: PropTypes.number,
	lon: PropTypes.number,
	zoom: PropTypes.number,
};

export default MapSet;
