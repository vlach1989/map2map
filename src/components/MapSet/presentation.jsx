import {useEffect} from 'react';
import classnames from 'classnames';
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

	const classes = classnames('m2m-MapSet', {
		'has-2-columns': maps.length === 4,
		'has-3-columns': maps.length > 4,
	});

	return (
		<div className={classes}>
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
