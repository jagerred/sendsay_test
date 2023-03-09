import styles from './CalculatorButton.module.scss';

interface CalculatorButtonProps {
  text: number | string;
  handleClick: (input: string | number) => void;
}

const CalculatorButton = ({ text, handleClick }: CalculatorButtonProps) => {
  const zeroClass = text === 0 ? styles.zeroButton : '';
  return (
		<button
			className={`${styles.container} ${zeroClass}`}
			onClick={() => handleClick(text)}
		>
			{text}
		</button>
  );
};

export default CalculatorButton;
