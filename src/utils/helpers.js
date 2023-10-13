/**
 * Check if string is number/like
 * @param str {string}
 * @returns {boolean} true, if string is like number
 */
export function isStringNumber(str) {
	if (typeof str !== 'string') {
		throw new Error('Given value is not a string');
	}
	return /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str);
}

/**
 * Convert string to number, if it's number like
 * @param value {string}
 * @returns {string | number}
 */
export function stringToNumber(value) {
	// Try to parse the string as a floating-point number
	const floatNumber = parseFloat(value);

	// Check if the parsed result is a valid number or not
	if (!isNaN(floatNumber)) {
		return floatNumber;
	}

	// If it's not a valid float, try parsing it as an integer
	const intNumber = parseInt(value, 10);

	// Check if the parsed result is a valid integer or not
	if (!isNaN(intNumber)) {
		return intNumber;
	}

	// If it's neither a valid float nor integer, return the value value
	return value;
}
