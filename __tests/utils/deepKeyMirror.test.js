import {expect, describe, it} from 'vitest';
import deepKeyMirror from '../../src/utils/deepKeyMirror';

describe('deepKeyMirror', () => {
	it('should return an object with keys mirrored to their path', () => {
		const inputObject = {a: null, b: {c: null, d: null}};
		const expectedOutput = {a: 'a', b: {c: 'b.c', d: 'b.d'}};
		expect(deepKeyMirror(inputObject)).toEqual(expectedOutput);
	});

	it('should handle nested objects', () => {
		const inputObject = {a: {b: {c: null}}, d: null};
		const expectedOutput = {a: {b: {c: 'a.b.c'}}, d: 'd'};
		expect(deepKeyMirror(inputObject)).toEqual(expectedOutput);
	});
});
