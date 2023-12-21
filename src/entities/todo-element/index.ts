import { exampleTodo } from './lib/constants';
import assertPriority from './lib/utils/assertPriority';
import formatDate from './lib/utils/formatDate';
import { todoSlice, TTodo } from './model/todoSlice';

export const { add, changeTodo, delTodo, replaceTodo } = todoSlice.actions;
export const selectTodo = (state: TRootState) => state.todo;
export const todoSliceReducer = todoSlice.reducer;

export { exampleTodo, formatDate, assertPriority };
export type { TTodo };
