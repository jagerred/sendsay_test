import useSwitch from 'hooks/useSwitch';

import styles from './SwitchButton.module.scss';

interface SwitchButtonProps {
  children: React.ReactNode;
  text: string;
}

const SwitchButton = ({ children, text }: SwitchButtonProps) => {
  const { mode, setMode } = useSwitch();
  const activeClass = mode === text.toLowerCase() ? styles.active : '';

  return (
		<>
			<button
				className={`${styles.container} ${activeClass}`}
				onClick={() => setMode()}
			>
				{children}
				<span className={styles.text}>{text}</span>
			</button>
		</>
  );
};

export default SwitchButton;
