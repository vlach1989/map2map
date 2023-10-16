import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import MapSet from '../MapSet';
// import TopBar from '../TopBar/index.jsx';
import './style.css';

const App = () => {
	return (
		<MantineProvider>
			<main className="m2m-App">
				{/*<TopBar />*/}
				<MapSet />
			</main>
		</MantineProvider>
	);
};

export default App;
