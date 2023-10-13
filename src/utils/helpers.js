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
