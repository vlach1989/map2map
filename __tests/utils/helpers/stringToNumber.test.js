import {expect, describe, it} from 'vitest';
import {stringToNumber} from '../../../src/utils/helpers';

describe('stringToNumber', () => {
	it('should parse a valid float', () => {
		const result = stringToNumber('3.14');
		expect(result).toBe(3.14);
	});

	it('should parse a valid integer', () => {
		const result = stringToNumber('42');
		expect(result).toBe(42);
	});

	it('should return the original string if it cannot be parsed', () => {
		const result = stringToNumber('not-a-number');
		expect(result).toBe('not-a-number');
	});
});
