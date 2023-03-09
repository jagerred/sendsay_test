import SwitchButton from 'components/SwitchButton/SwitchButton';
import { HiOutlineEye, HiSelector } from 'react-icons/hi';
import styles from './Header.module.scss';

const Header = () => {
  return (
		<header className={styles.container}>
			<div className={styles.switchButtons}>
				<SwitchButton text='Runtime'>
					<HiOutlineEye size={20} color='currentColor' />
				</SwitchButton>
				<SwitchButton text='Constructor'>
					<HiSelector
						className={styles.selectorIcon}
						size={20}
						color='currentColor'
					/>
				</SwitchButton>
			</div>
		</header>
  );
};

export default Header;
