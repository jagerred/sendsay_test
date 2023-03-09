import App from 'components/App/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import store from 'store/store';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<DndProvider backend={HTML5Backend}>
			<App />
		</DndProvider>
	</Provider>,
);
