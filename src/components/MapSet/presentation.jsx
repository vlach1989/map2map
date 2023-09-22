import {useEffect} from 'react';
import {WMSTileLayer} from 'react-leaflet';
import PropTypes from 'prop-types';
import crsUtils from '../../utils/crs.js';
import Map from '../Map/index.jsx';

import './style.css';

function MapSet({crs, lat, lon, onCenterChange, onZoomChange, zoom}) {
	useEffect(() => {
		onZoomChange(zoom);
	}, [onZoomChange, zoom]);

	useEffect(() => {
		onCenterChange([lat, lon]);
	}, [onCenterChange, lat, lon]);

	return (
		<div className="m2m-MapSet">
			<Map
				center={[lat, lon]}
				zoom={zoom}
				onCenterChange={onCenterChange}
				onZoomChange={onZoomChange}
				crs={crsUtils.get(crs)}
				zoomControl={false}
				attributionControl={false}
			>
				<WMSTileLayer
					url={'https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?'}
					params={{
						layers: 'orto',
					}}
					crs={crsUtils.get(crs)}
				/>
			</Map>
			<Map
				center={[lat, lon]}
				zoom={zoom}
				onCenterChange={onCenterChange}
				onZoomChange={onZoomChange}
				crs={crsUtils.get(crs)}
				zoomControl={false}
			>
				<WMSTileLayer
					url={
						'https://ags.cuzk.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer'
					}
					params={{
						layers: '0',
					}}
					crs={crsUtils.get(crs)}
				/>
			</Map>
		</div>
	);
}

MapSet.propTypes = {
	crs: PropTypes.string,
	lat: PropTypes.number,
	lon: PropTypes.number,
	onCenterChange: PropTypes.func,
	onZoomChange: PropTypes.func,
	zoom: PropTypes.number,
};

export default MapSet;
