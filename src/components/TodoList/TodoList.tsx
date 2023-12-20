import './TodoList.scss';

import { useAppSelector } from '~/lib/reduxHooks';
import TodoSearcher from '../TodoSearcher/TodoSearcher';
import { selectTodo } from '~/store/store';
import TodoListRow from '../TodoListRow/TodoListRow';
import { useState } from 'react';

export type Tfiltered = string[] | null;

export default function TodoList() {
  const todo = useAppSelector(selectTodo);
  const [filterd, setFiltered] = useState<Tfiltered>(null);

  return (
    <section className="todo-list">
      <h1>Just to-do me</h1>
      <TodoSearcher setVisible={setFiltered} />
      <div className="todo-list__container">
        <ul>
          {(filterd ? filterd : todo).map((el, i) => {
            return (
              <li key={i}>
                <TodoListRow content={el} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
