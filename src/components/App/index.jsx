import MapSet from '../MapSet/index.jsx';
import './style.css';

function App() {
	return (
		<div className="m2m-App">
			<div className="m2m-TopBar">
				<div>Žluťoučký měsíc</div>
				<div>CLICK ME</div>
				<div>OK</div>
				<div>map2map</div>
			</div>
			<MapSet />
		</div>
	);
}

export default App;
