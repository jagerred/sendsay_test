import styles from './CanvasMessage.module.scss';
import add from '../../assets/icons/add.svg';

const CanvasMessage = () => {
  return (
		<div className={styles.container}>
			<img className={styles.img} src={add} alt='' />

			<span className={styles.mainText}>Перетащите сюда</span>
			<span className={styles.additionalText}>
				любой элемент из левой панели
			</span>
		</div>
  );
};

export default CanvasMessage;
