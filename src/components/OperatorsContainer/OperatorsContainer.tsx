import { useAppDispatch, useAppSelector } from 'hooks/redux';
import useSwitch from 'hooks/useSwitch';

import CalculatorButton from 'components/CalculatorButton/CalculatorButton';
import { selectDisplay } from 'store/selectors/index';
import { addOperator, calculateResult } from 'store/slices/displaySlice';
import { calculate } from 'helpers/calculate';

import styles from './OperatorsContainer.module.scss';

const OperatorsContainer = () => {
  const { firstNumber, secondNumber, result, operator } =
		useAppSelector(selectDisplay);
  const { isRuntime } = useSwitch();
  const dispatch = useAppDispatch();

  const operatorsMap = ['/', 'x', '-', '+'];

  const handleClick = (input: string | number) => {
    if (!isRuntime) return;
    if (typeof input === 'string') {
      const calcResult = calculate({ operator, firstNumber, secondNumber });
      if (calcResult) {
        dispatch(calculateResult(calcResult));
      } else {
        dispatch(calculateResult(+result));
      }
      dispatch(addOperator(input));
    }
  };

  const renderButtons = () => {
    return operatorsMap.map(i => (
			<CalculatorButton key={i} text={i} handleClick={handleClick} />
    ));
  };
  return <div className={styles.container}>{renderButtons()}</div>;
};

export default OperatorsContainer;
