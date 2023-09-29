import {connect} from 'react-redux';
import Presentation from './presentation';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = () => {
	return {
		onLayerSet: () => {
			// TODO
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
