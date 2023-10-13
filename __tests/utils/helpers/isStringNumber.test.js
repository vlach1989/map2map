import {expect, test} from 'vitest';
import {isStringNumber} from '../../../src/utils/helpers.js';

test('input should be a number-like string', () => {
	expect(isStringNumber('123')).toBeTruthy();
	expect(isStringNumber('0.23')).toBeTruthy();
	expect(isStringNumber('0')).toBeTruthy();
});

test('input should not be a number-like string', () => {
	expect(isStringNumber('a')).toBeFalsy();
	expect(isStringNumber('1.a')).toBeFalsy();
});

test('input is not a string', () => {
	expect(() => isStringNumber(1)).toThrowError();
	expect(() => isStringNumber(null)).toThrowError();
	expect(() => isStringNumber(undefined)).toThrowError();
	expect(() => isStringNumber([])).toThrowError();
	expect(() => isStringNumber({})).toThrowError();
});
