import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import MapSet from '../MapSet';
import {useGeolocation} from '../../hooks/useGeolocation.js';
import './style.css';
import PropTypes from 'prop-types';

const App = ({onCenterChange}) => {
	const {location} = useGeolocation({autoStart: true});
	if (location.latitude && location.longitude) {
		onCenterChange([location.latitude, location.longitude]);
	}

	return (
		<MantineProvider>
			<main className="m2m-App">
				<MapSet />
			</main>
		</MantineProvider>
	);
};

App.propTypes = {
	onCenterChange: PropTypes.func.isRequired,
};

export default App;
