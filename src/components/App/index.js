import {connect} from 'react-redux';
import Presentation from './presentation';
import Action from '../../state/Action.js';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		onCenterChange: center => {
			dispatch(Action.mapSet.setCenter(center));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
