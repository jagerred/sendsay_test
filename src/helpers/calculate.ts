import { DisplayState } from 'types/index';

type CalculateParams = Omit<DisplayState, 'result'>;

export const calculate = ({
  operator,
  firstNumber,
  secondNumber,
}: CalculateParams) => {
  if (!operator) {
    return null;
  } else {
    switch (operator) {
      case '+':
        return +firstNumber + +secondNumber;
      case '-':
        return +firstNumber - +secondNumber;
      case 'x':
        return +firstNumber * +secondNumber;
      case '/':
        return +firstNumber / +secondNumber;
      default:
        break;
    }
  }
};
