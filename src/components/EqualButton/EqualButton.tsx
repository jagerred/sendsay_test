import { useAppDispatch, useAppSelector } from 'hooks/redux';
import useSwitch from 'hooks/useSwitch';

import { calculate } from 'helpers/calculate';
import { selectDisplay } from 'store/selectors/index';
import { calculateResult, removeOperator } from 'store/slices/displaySlice';
import styles from './EqualButton.module.scss';

const EqualButton = () => {
  const { operator, firstNumber, secondNumber, result } =
		useAppSelector(selectDisplay);
  const dispatch = useAppDispatch();
  const { isRuntime } = useSwitch();

  const handleClick = () => {
    if (!isRuntime) return;
    const calcResult = calculate({ operator, firstNumber, secondNumber });
    if (calcResult) {
      dispatch(calculateResult(calcResult));
    } else {
      dispatch(calculateResult(+result));
    }
    dispatch(removeOperator());
  };
  return (
		<div className={styles.wrapper}>
			<button className={styles.container} onClick={() => handleClick()}>
				=
			</button>
		</div>
  );
};

export default EqualButton;
