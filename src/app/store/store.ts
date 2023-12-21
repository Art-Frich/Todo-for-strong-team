import { configureStore } from '@reduxjs/toolkit';
import { todoSliceReducer } from '~/entities/todo-element';

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
