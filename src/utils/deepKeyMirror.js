import {isObjectLike as _isObjectLike, mapValues as _mapValues} from 'lodash';

/**
 * Takes deep object and returns it with values containing path to that key in the object (where value isn't a nested object).
 * e.g. {a: null, b: {c: null, d: null}} => {a: 'a', b: {c: 'b.c', d: 'b.d'}}
 * Used for constants.
 * @param object - input object or nested object when called recursively
 * @param path - path to nested object when called recursively
 * @returns object
 */
const deepKeyMirror = (object, path) => {
	if (_isObjectLike(object)) {
		return _mapValues(object, (value, key) => {
			return deepKeyMirror(value, path ? path + '.' + key : key);
		});
	} else {
		return path;
	}
};

export default deepKeyMirror;
