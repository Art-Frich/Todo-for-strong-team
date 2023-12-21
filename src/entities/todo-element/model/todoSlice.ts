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
      // const i = action.payload;
      // return state.filter((_, index) => index !== i);
      state.splice(action.payload, 1);
    },
    replaceTodo: (state, action: PayloadAction<{ iDrag: number; iForDrag: number }>) => {
      const { iDrag, iForDrag } = action.payload;
      // TODO: функция сужения типа
      [state[iDrag], state[iForDrag]] = [state[iForDrag]!, state[iDrag]!];
    },
    filterBy: (state, action: PayloadAction<'priority' | 'alphabet' | 'date'>) => {
      switch (action.payload) {
        case 'priority':
          return state.sort((a, b) => a.priority - b.priority);
        case 'alphabet':
          return state.sort((a, b) => a.text.localeCompare(b.text));
        case 'date':
          return state.sort((a, b) => {
            // воскресенье, 21.05.23 г., 18:12
            try {
              type TAr = [number, number, number, number, number];
              const getNums = (obj: TTodo) => obj.date.match(/\d{2}/g) as unknown as TAr;
              const aAr = getNums(a);
              const bAr = getNums(b);
              return aAr[2] - bAr[2] || aAr[1] - bAr[1] || aAr[0] - bAr[0] || aAr[3] - bAr[3] || aAr[4] - bAr[4];
            } catch {
              return 0;
            }
          });
      }
    },
  },
});
