/**
 * @jest-environment jsdom
 */

import {expect, test} from 'vitest';
import L from 'leaflet';
import Proj from 'proj4leaflet';
import crs from '../../../src/utils/crs.js';
import projections from '../../../src/data/projections.json';

test('should return definition for EPSG:3857', () => {
	expect(crs.getLeafletCrsDefinition()).toStrictEqual(L.CRS.EPSG3857);
	expect(crs.getLeafletCrsDefinition('EPSG:3333')).toStrictEqual(
		L.CRS.EPSG3857,
	);
	expect(crs.getLeafletCrsDefinition('EPSG:3857')).toStrictEqual(
		L.CRS.EPSG3857,
	);
});

test('should return definition for EPSG:4326', () => {
	expect(crs.getLeafletCrsDefinition('EPSG:4326')).toStrictEqual(
		L.CRS.EPSG4326,
	);
});

test('should return definition for EPSG:5514', () => {
	const epsg5514 = projections['EPSG:5514'];
	const expected = new Proj.CRS('EPSG:5514', epsg5514.definition, {
		resolutions: epsg5514.resolutions,
	});
	const result = crs.getLeafletCrsDefinition('EPSG:5514');

	expect(result.projection._proj.oProj).toEqual(
		expected.projection._proj.oProj,
	);
});
