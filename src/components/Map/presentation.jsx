import {useCallback, useEffect, useMemo, useState} from 'react';
import {MapContainer} from 'react-leaflet';
import PropTypes from 'prop-types';
import crsUtils from '../../utils/crs.js';
import layerHelpers from './layers.jsx';
import './style.css';

function Map({center, crs, layers, onCenterChange, onZoomChange, zoom}) {
	const [map, setMap] = useState(null);
	const [lat, lon] = center;

	useEffect(() => {
		if (map) {
			const currentZoom = map.getZoom();
			const currentCenter = map.getCenter();
			const {lat: currentLat, lng: currentLon} = currentCenter;

			if (lat !== currentLat || lon !== currentLon || zoom !== currentZoom) {
				const zoomToSet = currentZoom !== zoom ? zoom : currentZoom;
				map.setView({lat, lng: lon}, zoomToSet, {
					zoom: {animate: true},
					pan: {animate: false},
				});
			}
		}
	}, [map, zoom, lat, lon]);

	const onZoomEnd = useCallback(() => {
		const currentZoom = map.getZoom();
		if (onZoomChange && currentZoom !== zoom) {
			const currentCenter = map.getCenter();
			onZoomChange(currentZoom);
			onCenterChange([currentCenter.lat, currentCenter.lng]);
		}
	}, [map, zoom]);

	const onMoveEnd = useCallback(() => {
		const currentCenter = map.getCenter();
		let {lat: currentLat, lng: currentLon} = currentCenter;
		// call onViewChange if current map center is different from center props
		if (onCenterChange && (currentLat !== lat || currentLon !== lon)) {
			const currentZoom = map.getZoom();
			onCenterChange([currentLat, currentLon], currentZoom);
		}
	}, [onCenterChange, map, lat, lon]);

	useEffect(() => {
		map?.on('moveend', onMoveEnd);
		map?.on('zoomend', onZoomEnd);
		return () => {
			map?.off('moveend', onMoveEnd);
			map?.off('zoomend', onZoomEnd);
		};
	}, [map, onMoveEnd, onZoomEnd]);

	const mapLayers = layers.map(layer => layerHelpers.get(layer, crs));

	const displayMap = useMemo(
		() => (
			<MapContainer
				ref={setMap}
				center={center}
				zoom={zoom}
				className="m2m-Map"
				crs={crsUtils.get(crs)}
				zoomControl={false}
				attributionControl={true}
			>
				{mapLayers}
			</MapContainer>
		),
		[],
	);

	return <>{displayMap}</>;
}

Map.propTypes = {
	center: PropTypes.array,
	crs: PropTypes.string,
	layers: PropTypes.array,
	onCenterChange: PropTypes.func,
	onZoomChange: PropTypes.func,
	zoom: PropTypes.number,
};

export default Map;
