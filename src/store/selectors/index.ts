import { RootState } from '../store';

export const selectDisplay = (state: RootState) => state.display;
export const selectSwitch = (state: RootState) => state.switch;
export const selectCanvas = (state: RootState) => state.canvas;
