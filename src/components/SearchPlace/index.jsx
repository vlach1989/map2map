import {IconSearch} from '@tabler/icons-react';
import {Select} from '@mantine/core';
import {useState} from 'react';
import PropTypes from 'prop-types';

const data = [
	{
		label: 'Praha',
		value: 'praha',
		description: 'Hlavní město Praha',
		data: {
			zoom: 15,
			lat: 50.073658,
			lon: 14.41854,
		},
	},
	{
		label: 'Plzeň',
		value: 'plzen',
		description: 'Hlavní město piva',
		data: {
			zoom: 16,
			lat: 49.73843,
			lon: 13.373637,
		},
	},
];

const SearchPlace = ({onLocationChange}) => {
	const [searchValue, setSearchValue] = useState('');

	const onSearchChange = value => {
		setSearchValue(value);
		const i = data.find(item => item.label === value);
		if (i) {
			onLocationChange({...i.data});
		}
	};

	return (
		<Select
			label={false}
			placeholder="Search place"
			searchable
			onSearchChange={onSearchChange}
			searchValue={searchValue}
			clearable={true}
			nothingFound="No options"
			data={data}
			rightSection={<></>}
			icon={<IconSearch size="1rem" />}
		/>
	);
};

SearchPlace.propTypes = {
	onLocationChange: PropTypes.func,
};

export default SearchPlace;
