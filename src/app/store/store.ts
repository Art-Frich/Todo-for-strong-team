import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '~/entities/todo-element/model/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
