import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import MapSet from '../MapSet';
import './style.css';

const App = () => {
	return (
		<MantineProvider>
			<main className="m2m-App">
				<MapSet />
			</main>
		</MantineProvider>
	);
};

export default App;
