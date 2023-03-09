import { useAppDispatch, useAppSelector } from 'hooks/redux';
import useSwitch from 'hooks/useSwitch';
import CalculatorButton from 'components/CalculatorButton/CalculatorButton';

import { selectDisplay } from 'store/selectors/index';
import { addPoint, updateSecondNumber } from 'store/slices/displaySlice';

import styles from './NumbersContainer.module.scss';

const NumbersContainer = () => {
  const buttonsMap = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];
  const { secondNumber } = useAppSelector(selectDisplay);
  const dispatch = useAppDispatch();
  const { isRuntime } = useSwitch();

  const handleClick = (input: string | number) => {
    if (!isRuntime) return;
    if (typeof input === 'number') {
      const inputNumber = parseFloat(secondNumber + input.toString());
      dispatch(updateSecondNumber(inputNumber));
      return;
    }
    if (input === ',' && !secondNumber.includes(',')) {
      dispatch(addPoint());
      return;
    }
  };

  const renderButtons = () => {
    return buttonsMap.map(i => (
			<CalculatorButton key={i} text={i} handleClick={handleClick} />
    ));
  };
  return <div className={styles.container}>{renderButtons()}</div>;
};

export default NumbersContainer;
