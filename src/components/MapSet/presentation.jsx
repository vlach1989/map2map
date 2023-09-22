import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Map from '../Map';

import './style.css';

function MapSet({crs, lat, lon, maps, onCenterChange, onZoomChange, zoom}) {
	useEffect(() => {
		onZoomChange(zoom);
	}, [onZoomChange, zoom]);

	useEffect(() => {
		onCenterChange([lat, lon]);
	}, [onCenterChange, lat, lon]);

	return (
		<div className="m2m-MapSet">
			{maps.map(map => (
				<Map
					key={map}
					mapKey={map}
					center={[lat, lon]}
					zoom={zoom}
					onCenterChange={onCenterChange}
					onZoomChange={onZoomChange}
					crs={crs}
				/>
			))}
		</div>
	);
}

MapSet.propTypes = {
	crs: PropTypes.string,
	lat: PropTypes.number,
	lon: PropTypes.number,
	maps: PropTypes.array,
	onCenterChange: PropTypes.func,
	onZoomChange: PropTypes.func,
	zoom: PropTypes.number,
};

export default MapSet;
