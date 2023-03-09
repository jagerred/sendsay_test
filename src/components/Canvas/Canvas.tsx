import { useRef, useState } from 'react';
import CanvasMessage from 'components/CanvasMessage/CanvasMessage';
import DraggableComponent from 'components/DraggableComponent/DraggableComponent';
import HightlightLine from 'components/HighlightLine/HightlightLine';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import useSwitch from 'hooks/useSwitch';

import { selectCanvas } from 'store/selectors/index';
import {
  addCanvasComponent,
  removeCanvasComponent,
  replaceCanvasComponent,
} from 'store/slices/canvasSlice';

import { pickCalculatorComponent } from 'helpers/pickCalculatorComponent';
import { useDrop } from 'react-dnd';
import styles from './Canvas.module.scss';

import { DraggableComponentName, DraggableComponentProps } from 'types/index';

type HandleDropProps = Pick<DraggableComponentProps, 'name' | 'section'>;

const Canvas = () => {
  const [highlightedElemIndex, setHighlightedElemIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { blocks } = useAppSelector(selectCanvas);
  const { isRuntime } = useSwitch();

  const highlightedElemIndexRef = useRef<number>(0);
  const highlightsRef = useRef<HTMLDivElement[]>([]);
  const placedBlocksRef = useRef<DraggableComponentName[]>([]);

  highlightedElemIndexRef.current = highlightedElemIndex;
  placedBlocksRef.current = blocks;

  const handleDrop = ({ name, section }: HandleDropProps) => {
    let position = highlightedElemIndexRef.current;
    if (section === 'sidebar') dispatch(addCanvasComponent({ name, position }));
    if (section === 'canvas') {
      const blockPlace = placedBlocksRef.current.findIndex(
        blockName => name === blockName,
      );
      if (highlightedElemIndexRef.current > blockPlace + 1) {
        position -= 1;
      }
      dispatch(replaceCanvasComponent({ name, position }));
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'block',
    drop: (item: HandleDropProps) => {
      handleDrop(item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
    hover(item, monitor) {
      const mousePos = monitor.getClientOffset();
      if (!mousePos) return;
      highlightsRef.current = highlightsRef.current.filter(e => e !== null);

      if (item.name === 'display') {
        setHighlightedElemIndex(0);
        return;
      }

      let closestHighlightIndex = highlightsRef.current.reduce(
        (closest, highlight, highlightIndex) => {
          const distanceToMouse1 = Math.abs(
            highlight.getBoundingClientRect().top - mousePos.y,
          );
          const closestHighlight = highlightsRef.current[closest];
          const distanceToMouse2 = Math.abs(
            closestHighlight.getBoundingClientRect().top - mousePos.y,
          );

          return distanceToMouse1 < distanceToMouse2 ? highlightIndex : closest;
        },
        0,
      );

      if (
        placedBlocksRef.current.includes('display') &&
				closestHighlightIndex === 0
      ) {
        closestHighlightIndex = 1;
      }

      if (item.section === 'canvas') {
        const blockPlace = placedBlocksRef.current.findIndex(
          blockName => blockName === item.name,
        );

        if (closestHighlightIndex === blockPlace + 1) {
          closestHighlightIndex -= 1;
        }
      }

      setHighlightedElemIndex(closestHighlightIndex);
    },
  }));

  const isCanvasEmpty = blocks.length === 0 ? true : false;

  const renderBlocks = () => {
    return blocks.map((block, index) => {
      const refFunction = (element: HTMLDivElement) => {
        if (highlightsRef.current) highlightsRef.current[index + 1] = element;
      };
      const isHighliteVisible = isOver && highlightedElemIndex === index + 1;
      const isDisplay = block === 'display' && index === 0;
      const disableDisplayClass = isDisplay ? styles.disable : '';

      return (
				<div
					key={`canvas-block-${block}`}
					className={disableDisplayClass}
					onDoubleClick={() => dispatch(removeCanvasComponent(block))}
				>
					<DraggableComponent
						key={'canvas-' + block}
						name={block}
						section='canvas'
						active={!isRuntime}
					>
						{pickCalculatorComponent(block)!}
					</DraggableComponent>

					<HightlightLine
						visible={isHighliteVisible}
						refFunction={refFunction}
					/>
				</div>
      );
    });
  };

  const content = isCanvasEmpty ? <CanvasMessage /> : renderBlocks();
  const emptyClass = isCanvasEmpty ? styles.empty : '';
  const hightlightClass = isCanvasEmpty && isOver ? styles.highlight : '';

  return (
		<div
			className={`${styles.container} ${emptyClass} ${hightlightClass}`}
			ref={drop}
		>
			<HightlightLine
				visible={!isCanvasEmpty && isOver && highlightedElemIndex === 0}
				refFunction={(element: HTMLDivElement) => {
				  highlightsRef.current[0] = element;
				}}
			/>
			{content}
		</div>
  );
};

export default Canvas;
