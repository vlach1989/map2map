import {Button, Popover, Radio, Stack} from '@mantine/core';
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
			<Popover
				position="bottom-start"
				offset={10}
				opened={opened}
				title="Select layer"
				shadow="md"
				onClose={close}
				clickOutsideEvents={['mouseup', 'touchend']}
				width={300}
			>
				<Popover.Target>
					<Button
						leftSection={<IconMap size={20} />}
						variant="filled"
						// color="gray"
						radius="xl"
						size="xs"
						onClick={opened ? close : open}
					>
						{name}
					</Button>
				</Popover.Target>
				<Popover.Dropdown className="m2m-MapLayersControl-PopoverDropdown">
					<Radio.Group value={activeLayerKey} onChange={onLayerChange}>
						<Stack mt="xs">
							{options.map(option => (
								<Radio
									key={option.key}
									value={option.key}
									label={option.name}
								/>
							))}
						</Stack>
					</Radio.Group>
				</Popover.Dropdown>
			</Popover>
		</div>
	);
};

MapLayersControl.propTypes = {
	activeLayerKey: PropTypes.string,
	name: PropTypes.string,
	onLayerSet: PropTypes.func,
};

export default MapLayersControl;
