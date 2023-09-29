import {Button, Drawer, Radio, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconMap} from '@tabler/icons-react';
import './style.css';
import PropTypes from 'prop-types';
import layers from '../../data/layers.json';

const MapLayersControl = ({activeLayerKey, name, onLayerSet}) => {
	const options = Object.values(layers);
	const [opened, {open, close}] = useDisclosure(false);

	const onLayerChange = value => {
		close();
		onLayerSet(value);
	};

	return (
		<div className="m2m-MapLayersControl">
			<Drawer
				opened={opened}
				onClose={close}
				title="Select layer"
				position="bottom"
			>
				<Radio.Group value={activeLayerKey} onChange={onLayerChange}>
					<Group mt="xs">
						{options.map(option => (
							<Radio key={option.key} value={option.key} label={option.name} />
						))}
					</Group>
				</Radio.Group>
			</Drawer>
			<Button
				leftSection={<IconMap size={20} />}
				variant="filled"
				// color="gray"
				radius="xl"
				size="xs"
				onClick={open}
			>
				{name}
			</Button>
		</div>
	);
};

MapLayersControl.propTypes = {
	activeLayerKey: PropTypes.string,
	name: PropTypes.string,
	onLayerSet: PropTypes.func,
};

export default MapLayersControl;
