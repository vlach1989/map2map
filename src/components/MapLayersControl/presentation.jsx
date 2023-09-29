import {Button} from '@mantine/core';
import {IconMap} from '@tabler/icons-react';
import './style.css';
import PropTypes from 'prop-types';

const MapLayersControl = ({name}) => {
	return (
		<div className="m2m-MapLayersControl">
			<Button
				leftSection={<IconMap size={20} />}
				variant="filled"
				// color="gray"
				radius="xl"
				size="xs"
			>
				{name}
			</Button>
		</div>
	);
};

MapLayersControl.propTypes = {
	name: PropTypes.string,
};

export default MapLayersControl;
