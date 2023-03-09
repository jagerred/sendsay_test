import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayState } from 'types/index';

const initialState: DisplayState = {
  firstNumber: '0',
  secondNumber: '0',
  operator: null,
  result: '0',
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    updateSecondNumber(state, action: PayloadAction<number>) {
      const inputNumber = action.payload;
      state.result = inputNumber;
      state.secondNumber = inputNumber.toString();
    },
    addPoint(state) {
      state.secondNumber = state.secondNumber + '.';
    },
    calculateResult(state, action: PayloadAction<number>) {
      state.result = action.payload;
      state.firstNumber = action.payload;
      state.secondNumber = '0';
    },
    addOperator(state, action: PayloadAction<string>) {
      state.operator = action.payload;
    },
    removeOperator(state) {
      state.operator = null;
    },
    resetDisplay(state) {
      state.firstNumber = '0';
      state.operator = null;
      state.result = '0';
      state.secondNumber = '0';
    },
  },
});

export const {
  updateSecondNumber,
  addPoint,
  calculateResult,
  addOperator,
  removeOperator,
  resetDisplay,
} = displaySlice.actions;

export default displaySlice.reducer;
