import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Select} from '@mantine/core';
import {IconSearch} from '@tabler/icons-react';
import './style.css';

function SearchBox({onLocationChange}) {
	const [searchValue, setSearchValue] = useState('');
	const [data, setData] = useState([]);

	const onSelect = value => {
		const i = data.find(item => item.value === value);
		if (i) {
			// TODO zoom by type
			onLocationChange([i.data.position.lat, i.data.position.lon]);
		}
	};

	useEffect(() => {
		const url = `https://api.mapy.cz/v1/suggest?lang=cs&apikey=E2zOXSDHujMZE9aQgytj7hrsfKQ69Em9_CtuaCRjevQ&query=${searchValue}&limit=5`;

		if (searchValue) {
			const fetchData = async () => {
				try {
					const response = await fetch(url);
					const json = await response.json();
					if (json?.items?.length) {
						// TODO filter duplicities
						setData(
							json.items.map(item => {
								return {
									label: item.name,
									value: `${item.name}-${item.regionalStructure.map(i => i.name).join('-')}`,
									data: {
										label: item.label,
										position: item.position,
									},
								};
							}),
						);
					}
				} catch (error) {
					console.log('error', error);
				}
			};

			fetchData();
		}
	}, [searchValue]);

	console.log(data);

	// TODO details in options
	// TODO hide options on focus out, but preserve selected
	return (
		<Select
			placeholder="Hledej místo"
			leftSection={<IconSearch size={20} />}
			data={data}
			size="sm"
			searchable
			value={searchValue}
			onSearchChange={setSearchValue}
			onOptionSubmit={onSelect}
			dropdownOpened
			// renderOption={({option}) => {
			// 	return <div>{option.name}</div>;
			// }}
		/>
	);
}

SearchBox.propTypes = {
	onLocationChange: PropTypes.func,
};

export default SearchBox;
