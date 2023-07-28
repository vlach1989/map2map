import {MapContainer, WMSTileLayer} from 'react-leaflet';
import PropTypes from 'prop-types';
import './style.css';

function Map({crs, center, zoom}) {
	return (
		<MapContainer center={center} zoom={zoom} className="m2m-Map" crs={crs}>
			<WMSTileLayer
				url={
					// 'https://ags.cuzk.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer',
					'https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?'
				}
				params={{
					layers: 'orto',
					// layers: '0',
				}}
				crs={crs}
			/>
		</MapContainer>
	);
}

Map.propTypes = {
	crs: PropTypes.object,
	center: PropTypes.array,
	zoom: PropTypes.number,
};

export default Map;
