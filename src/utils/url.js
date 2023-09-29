function set(param, value) {
	const url = new URL(location);
	url.searchParams.set(param, value);
	history.pushState({}, '', url);
}

function getParamValue(parameterName) {
	const queryString = window.location.search;

	// Create a regular expression to match the parameter and its value
	const regex = new RegExp(`[?&]${parameterName}(=([^&#]*)|&|#|$)`, 'i');
	const match = regex.exec(queryString);

	// Check if a match is found
	if (match) {
		const value = match[2]
			? decodeURIComponent(match[2].replace(/\+/g, ' '))
			: null;

		if (parameterName === 'maps') {
			return getMapsFromUrl(value);
		} else {
			return stringToNumberOrReturnInput(value);
		}
	} else {
		return null;
	}
}

function stringToNumberOrReturnInput(input) {
	// Try to parse the string as a floating-point number
	const floatNumber = parseFloat(input);

	// Check if the parsed result is a valid number or not
	if (!isNaN(floatNumber)) {
		return floatNumber;
	}

	// If it's not a valid float, try parsing it as an integer
	const intNumber = parseInt(input, 10);

	// Check if the parsed result is a valid integer or not
	if (!isNaN(intNumber)) {
		return intNumber;
	}

	// If it's neither a valid float nor integer, return the input value
	return input;
}

function getMapsFromUrl(layers) {
	return layers.split(',');
}

export default {
	set,
	getParamValue,
};
