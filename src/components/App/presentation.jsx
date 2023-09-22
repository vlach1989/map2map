import {MantineProvider} from '@mantine/core';
import MapSet from '../MapSet';
// import TopBar from '../TopBar/index.jsx';
import './style.css';

const App = () => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<div className="m2m-App">
				{/*<TopBar />*/}
				<MapSet />
			</div>
		</MantineProvider>
	);
};

export default App;
