import {MantineProvider} from '@mantine/core';
import MapSet from '../MapSet/index.jsx';
import './style.css';
import SearchPlace from '../SearchPlace/index.jsx';
import {useState} from 'react';

function App() {
	const [zoom, setZoom] = useState();
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();

	const onLocationChange = location => {
		setZoom(location.zoom);
		setLat(location.lat);
		setLon(location.lon);
	};

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<div className="m2m-App">
				<div className="m2m-TopBar">
					<SearchPlace onLocationChange={onLocationChange} />
				</div>
				<MapSet lat={lat} lon={lon} zoom={zoom} />
			</div>
		</MantineProvider>
	);
}

export default App;
