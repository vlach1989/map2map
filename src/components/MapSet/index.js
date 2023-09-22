import {connect} from 'react-redux';
import Presentation from './presentation';
import Select from '../../state/Select.js';
import Action from '../../state/Action.js';

const mapStateToProps = state => {
	return {
		zoom: Select.mapSet.getZoom(state),
		lat: Select.mapSet.getLat(state),
		lon: Select.mapSet.getLon(state),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCenterChange: center => {
			dispatch(Action.mapSet.setCenter(center));
		},
		onZoomChange: zoom => {
			dispatch(Action.mapSet.setZoom(zoom));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
