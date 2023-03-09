import { configureStore } from '@reduxjs/toolkit';
import switchReducer from 'store/slices/switchSlice';
import displayReducer from 'store/slices/displaySlice';

import canvasReducer from 'store/slices/canvasSlice';

const store = configureStore({
  reducer: {
    switch: switchReducer,
    display: displayReducer,
    canvas: canvasReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
