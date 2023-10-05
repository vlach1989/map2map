import url from '../../utils/url.js';
import {MAPS} from '../../constatnts/defaultConfiguration.js';

function get() {
	const mapKeys = url.getMapKeys();
	if (mapKeys) {
		const maps = {};
		mapKeys.forEach(key => {
			const layer = url.getParamValue(key);
			if (layer) {
				maps[key] = {
					key,
					layer,
				};
			}
		});

		// for now, use default state some layer is missing
		if (mapKeys?.length === Object.keys(maps)?.length) {
			return maps;
		} else {
			return {...MAPS};
		}
	} else {
		return {...MAPS};
	}
}

export default {
	get,
};
