import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { exampleTodo } from '../lib/constants';

const initialState: string[] = exampleTodo;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    changeTodo: (state, action: PayloadAction<{ i: number; val: string }>) => {
      state[action.payload.i] = action.payload.val;
    },
    delTodo: (state, action: PayloadAction<number>) => {
      const i = action.payload;
      return state.filter((_, index) => index !== i);
    },
  },
});

export const { add, changeTodo, delTodo } = todoSlice.actions;
export const selectTodo = (state: TRootState) => state.todo;
export default todoSlice.reducer;
