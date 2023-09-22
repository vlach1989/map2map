import {connect} from 'react-redux';
import Presentation from './presentation';
import Select from '../../state/Select.js';

const mapStateToProps = (state, ownProps) => {
	return {
		layers: Select.maps.getLayers(state, ownProps.mapKey),
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
