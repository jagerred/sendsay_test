import { DraggableComponentName } from 'types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasState {
  blocks: DraggableComponentName[];
}
interface CanvasAddReplacePayload {
  name: DraggableComponentName;
  position: number;
}

const initialState: CanvasState = {
  blocks: [],
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addCanvasComponent(state, action: PayloadAction<CanvasAddReplacePayload>) {
      const { name, position } = action.payload;
      state.blocks.splice(position, 0, name);
    },
    replaceCanvasComponent(
      state,
      action: PayloadAction<CanvasAddReplacePayload>,
    ) {
      const { name, position } = action.payload;
      const index = state.blocks.findIndex(blockName => blockName === name);
      state.blocks.splice(index, 1);
      state.blocks.splice(position, 0, name);
    },
    removeCanvasComponent(
      state,
      action: PayloadAction<DraggableComponentName>,
    ) {
      state.blocks = state.blocks.filter(i => i !== action.payload);
    },
  },
});

export const {
  addCanvasComponent,
  replaceCanvasComponent,
  removeCanvasComponent,
} = canvasSlice.actions;

export default canvasSlice.reducer;
