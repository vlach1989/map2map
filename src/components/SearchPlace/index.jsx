import {IconSearch} from '@tabler/icons-react';
import {Select} from '@mantine/core';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const SearchPlace = ({onLocationChange}) => {
	const [searchValue, setSearchValue] = useState('');
	const [data, setData] = useState([]);

	const onSearchChange = value => {
		setSearchValue(value);
	};

	const onChange = value => {
		const i = data.find(item => item.label === value);
		if (i) {
			onLocationChange({...i.data});
		}
	};

	useEffect(() => {
		const url = `https://nominatim.openstreetmap.org/search?q=${searchValue}&limit=10&format=json&countrycodes=cz`;

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				if (json?.length) {
					setData(
						json.map(item => {
							return {
								label: item.display_name,
								value: item.display_name,
								data: {lat: Number(item.lat), lon: Number(item.lon)},
							};
						}),
					);
				}
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, [searchValue]);

	return (
		<Select
			label={false}
			placeholder="Search place"
			searchable
			onSearchChange={onSearchChange}
			onChange={onChange}
			searchValue={searchValue}
			clearable={true}
			nothingFound="No options"
			data={data}
			icon={<IconSearch size="1rem" />}
		/>
	);
};

SearchPlace.propTypes = {
	onLocationChange: PropTypes.func,
};

export default SearchPlace;
