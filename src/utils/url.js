import {isStringNumber, stringToNumber} from './helpers.js';

function set(param, value) {
	const url = new URL(location);
	url.searchParams.set(param, value);
	history.pushState({}, '', url);
}

function getParamValue(parameterName) {
	const queryString = decodeURIComponent(window.location.search);

	// Create a regular expression to match the parameter and its value
	const regex = new RegExp(`[?&]${parameterName}(=([^&#]*)|&|#|$)`, 'i');
	const match = regex.exec(queryString);

	// Check if a match is found
	if (match) {
		const value = match[2];
		if (isStringNumber(value)) {
			return stringToNumber(value);
		} else {
			return value;
		}
	} else {
		return null;
	}
}

function getMapKeys() {
	const mapKeys = getParamValue('maps');
	if (mapKeys) {
		return mapKeys.split(',');
	} else {
		return null;
	}
}

export default {
	set,
	getParamValue,
	getMapKeys,
	isStringNumber,
};
