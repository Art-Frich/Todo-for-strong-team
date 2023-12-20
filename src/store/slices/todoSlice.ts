import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { exampleTodo } from '~/lib/constants';

const initialState: string[] = exampleTodo;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
