import { useAppSelector } from 'hooks/redux';
import { selectDisplay } from 'store/selectors/index';

import styles from './Display.module.scss';

const Display = () => {
  const { result } = useAppSelector(selectDisplay);

  const isInfinity = result === Infinity || result === -Infinity ? true : false;
  let displayResult = isInfinity ? 'Не определено' : result;
  const infinityClass = isInfinity ? styles.infinity : '';
  const isBigNumber =
		!isInfinity && result.toString().length > 8 ? true : false;
  const bigNumberClass = isBigNumber ? styles.bigNumber : '';

  if (isBigNumber) displayResult = Math.floor(+result * 10000) / 10000;

  return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<span className={`${styles.text} ${bigNumberClass} ${infinityClass}`}>
					{displayResult}
				</span>
			</div>
		</div>
  );
};

export default Display;
