import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { exampleTodo } from '../lib/constants';

export type TTodo = { isEnd: boolean; text: string; date: string; priority: 1 | 2 | 3 | 4 | 5 };
const initialState: TTodo[] = exampleTodo;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TTodo>) => {
      state.push(action.payload);
    },
    changeTodo: (state, action: PayloadAction<{ i: number; val: TTodo }>) => {
      const { i, val } = action.payload;
      state[i] = { ...val };
    },
    delTodo: (state, action: PayloadAction<number>) => {
      const i = action.payload;
      return state.filter((_, index) => index !== i);
    },
    replaceTodo: (state, action: PayloadAction<{ iDrag: number; iForDrag: number }>) => {
      const { iDrag, iForDrag } = action.payload;
      // TODO: функция сужения типа
      [state[iDrag], state[iForDrag]] = [state[iForDrag]!, state[iDrag]!];
    },
  },
});
