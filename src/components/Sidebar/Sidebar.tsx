import DraggableComponent from 'components/DraggableComponent/DraggableComponent';
import { useAppSelector } from 'hooks/redux';
import useSwitch from 'hooks/useSwitch';

import { selectCanvas } from 'store/selectors/index';
import { pickCalculatorComponent } from 'helpers/pickCalculatorComponent';
import styles from './Sidebar.module.scss';
import { DraggableComponentName } from 'types/index';

const Sidebar = () => {
	const blocks: DraggableComponentName[] = [
		'display',
		'operators',
		'numbers',
		'equal',
	];
	const { blocks: canvasBlocks } = useAppSelector(selectCanvas);
	const { isRuntime } = useSwitch();

	const renderBlocks = () => {
		return blocks.map(i => {
			const isActive = !canvasBlocks.includes(i);
			return (
				<DraggableComponent
					key={'section-' + i}
					name={i}
					section='sidebar'
					active={isActive}
				>
					{pickCalculatorComponent(i)!}
				</DraggableComponent>
			);
		});
	};

	const runtimeHiddenClass = isRuntime ? styles.hidden : '';
	const sidebarBlocks = renderBlocks();

	return (
		<div className={`${styles.container} ${runtimeHiddenClass}`}>
			{sidebarBlocks}
		</div>
	);
};

export default Sidebar;
