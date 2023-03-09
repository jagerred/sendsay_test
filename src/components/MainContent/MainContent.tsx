import Canvas from 'components/Canvas/Canvas';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
		<main className={styles.container}>
			<Sidebar />
			<Canvas />
		</main>
  );
};

export default MainContent;
