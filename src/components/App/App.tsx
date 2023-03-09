import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';

import styles from './App.module.scss';

const App = () => {
  return (
		<div className={styles.container}>
			<Header />
			<MainContent />
		</div>
  );
};

export default App;
