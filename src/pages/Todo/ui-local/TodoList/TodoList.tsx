import './TodoList.scss';

import { useAppDispatch, useAppSelector } from '~/shared/lib/hooks/reduxHooks';
import TodoListRow from '../TodoListRow/TodoListRow';
import { Tfiltered } from '../../Todo';
import { useState } from 'react';
import { replaceTodo, selectTodo } from '~/entities/todo-element';

interface ITodoList {
  filtered: Tfiltered;
}

export default function TodoList({ filtered }: ITodoList) {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  const [indexDrag, setIndexDrag] = useState<null | number>(null);
  const [indexForDrag, setIndexForDrag] = useState<null | number>(null);

  const getVisible = () => (filtered ? filtered : todo);
  const handlerDragStart = (i: number) => setIndexDrag(i);
  const handlerDragEnd = () => {
    setIndexDrag(null);
    setIndexForDrag(null);
    dispatch(replaceTodo({ iDrag: indexDrag!, iForDrag: indexForDrag! }));
  };
  const handlerDragOver = (e: React.DragEvent<HTMLLIElement>, i: number) => {
    e.preventDefault();
    setIndexForDrag(i);
  };

  return (
    <ul className="todo-list mp-0">
      {getVisible().length ? (
        getVisible().map((el, i) => {
          return (
            <li
              key={`${i}_${el.date}_${el.text}`}
              className={`todo-list__element
            ${indexDrag === i ? 'todo-list__element_drag' : ''}
            ${indexForDrag === i && indexForDrag !== indexDrag ? 'todo-list__element_for-drag' : ''}`}
              draggable
              onDragStart={() => handlerDragStart(i)}
              onDragEnd={handlerDragEnd}
              onDragOver={(e) => handlerDragOver(e, i)}
              title="Зажмите, чтобы перенести"
            >
              <TodoListRow content={el} i={i} />
            </li>
          );
        })
      ) : (
        <span className="todo-list__info">Ничего не нашлось</span>
      )}
    </ul>
  );
}
