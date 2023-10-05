import {connect} from 'react-redux';
import Presentation from './presentation';
import Select from '../../state/Select.js';

const mapStateToProps = (state, ownProps) => {
	return {
		layer: Select.maps.getLayer(state, ownProps.mapKey),
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
