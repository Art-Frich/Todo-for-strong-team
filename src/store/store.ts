import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import { TRootState } from '../lib/reduxHooks';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export const selectTodo = (state: TRootState) => state.todo;
