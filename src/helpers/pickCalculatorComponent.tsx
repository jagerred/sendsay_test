import Display from 'components/Display/Display';
import EqualButton from 'components/EqualButton/EqualButton';
import NumbersContainer from 'components/NumbersContainer copy/NumbersContainer';
import OperatorsContainer from 'components/OperatorsContainer/OperatorsContainer';
import { DraggableComponentName } from 'types/index';

export const pickCalculatorComponent = (name: DraggableComponentName) => {
  switch (name) {
    case 'display':
      return <Display />;
    case 'operators':
      return <OperatorsContainer />;
    case 'numbers':
      return <NumbersContainer />;
    case 'equal':
      return <EqualButton />;
    default:
      return;
  }
};
