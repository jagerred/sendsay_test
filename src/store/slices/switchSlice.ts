import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type SwitchMode = 'runtime' | 'constructor';

interface SwitchState {
  mode: SwitchMode;
}

const initialState: SwitchState = {
  mode: 'constructor',
};

const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    toggleSwitch(state, action: PayloadAction<SwitchMode>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;

export default switchSlice.reducer;
