import './Todo.scss';

import TodoSearcher from './ui-local/TodoSearcher/TodoSearcher';
import { useState } from 'react';
import TodoList from './ui-local/TodoList/TodoList';
import { TTodo } from '~/entities/todo-element';
import TodoFilters from './ui-local/TodoFilters/TodoFilters';

export type Tfiltered = TTodo[] | null;

export default function Todo() {
  const [filtered, setFiltered] = useState<Tfiltered>(null);

  return (
    <section className="todo">
      <h1>Just to-do me</h1>
      <TodoSearcher setVisible={setFiltered} />
      <TodoFilters />
      <div className="todo__container">
        <TodoList filtered={filtered} />
      </div>
    </section>
  );
}
