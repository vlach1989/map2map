import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import process from 'process';

import mapSet from './mapSet/reducers';

const reducer = {
	mapSet,
};

const logger = createLogger();

const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
