import ActionTypes from '../../constatnts/ActionTypes';
import {MAPS} from '../../constatnts/defaultConfiguration.js';

const initialState = {
	...MAPS,
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
