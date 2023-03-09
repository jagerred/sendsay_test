import { useRef } from 'react';
import { useDrag } from 'react-dnd/dist/hooks';
import useSwitch from 'hooks/useSwitch';

import { DraggableComponentProps } from 'types/index';
import styles from './DraggableComponent.module.scss';

const DraggableComponent = ({
  name,
  section,
  active,
  children,
}: DraggableComponentProps) => {
  const { isRuntime } = useSwitch();
  const canDragRef = useRef<boolean | null>(null);
  canDragRef.current = active;

  const [, drag] = useDrag(() => ({
    type: 'block',
    item: { name, section },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => {
      return canDragRef.current!;
    },
  }));

  const disableClass =
		section !== 'sidebar' || active ? styles.grab : styles.disabled;
  const runtimeClass = isRuntime ? styles.noGrab : '';
  return (
		<div className={`${disableClass} ${runtimeClass}`} ref={drag}>
			{children}
		</div>
  );
};

export default DraggableComponent;
