import styles from './HightlightLine.module.scss';

interface HightlightLineProps {
  refFunction: (element: HTMLDivElement) => void;
  visible: boolean;
}
const HightlightLine = ({ refFunction, visible }: HightlightLineProps) => {
  const hightlightClass = `${styles.container} ${visible ? styles.active : ''}`;
  return <div className={hightlightClass} ref={refFunction} />;
};

export default HightlightLine;
