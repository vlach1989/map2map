import {expect, test} from 'vitest';
import url from '../../../src/utils/url.js';

test('123 should be a number', () => {
	expect(url.isStringNumber('123')).toBeTruthy();
});
