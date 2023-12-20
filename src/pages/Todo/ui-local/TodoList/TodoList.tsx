import './TodoList.scss';

import { useAppSelector } from '~/shared/lib/hooks/reduxHooks';
import TodoListRow from '../TodoListRow/TodoListRow';
import { Tfiltered } from '../../Todo';
import { selectTodo } from '~/entities/todo-element/model/todoSlice';

interface ITodoList {
  filtered: Tfiltered;
}

export default function TodoList({ filtered }: ITodoList) {
  const todo = useAppSelector(selectTodo);

  return (
    <ul className="todo-list mp-0">
      {(filtered ? filtered : todo).map((el, i) => {
        return (
          <li key={i} className="todo-list__element">
            <TodoListRow content={el} />
          </li>
        );
      })}
    </ul>
  );
}