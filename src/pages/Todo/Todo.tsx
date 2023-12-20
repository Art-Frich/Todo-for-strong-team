import './Todo.scss';

import TodoSearcher from './ui-local/TodoSearcher/TodoSearcher';
import { useState } from 'react';
import TodoList from './ui-local/TodoList/TodoList';

export type Tfiltered = string[] | null;

export default function Todo() {
  const [filtered, setFiltered] = useState<Tfiltered>(null);

  return (
    <section className="todo">
      <h1>Just to-do me</h1>
      <TodoSearcher setVisible={setFiltered} />
      <div className="todo__container">
        <TodoList filtered={filtered} />
      </div>
    </section>
  );
}