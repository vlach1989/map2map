import {connect} from 'react-redux';
import Presentation from './presentation';
import Action from '../../state/Action.js';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLayerSet: layerKey => {
			dispatch(Action.maps.setMapLayer(ownProps.mapKey, layerKey));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
