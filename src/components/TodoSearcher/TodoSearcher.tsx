import './TodoSearcher.scss';

import IconBtn from '../IconBtn/IconBtn';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/lib/reduxHooks';
import { add } from '~/store/slices/todoSlice';
import { AddIcon, SearchIcon, XIcon } from '~/assets/icons';
import { selectTodo } from '~/store/store';
import { Tfiltered } from '../TodoList/TodoList';

interface ITodoSearcher {
  setVisible: (newVisible: Tfiltered) => void;
}

export default function TodoSearcher({ setVisible }: ITodoSearcher) {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  const [er, setEr] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const toClearInput = () => {
    setValue('');
  };

  const handleAddClick = () => {
    if (value) {
      setEr(null);
      dispatch(add(value));
      setVisible(null);
      toClearInput();
    } else {
      setEr('Я не буду добавлять пустую строку.');
    }
  };

  const handleFilterClick = () => {
    if (value) {
      setVisible(
        todo.filter((val) => {
          const regExp = new RegExp(value);
          return regExp.test(val);
        }),
      );
    } else {
      setEr('Я не буду искать пустую строку.');
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <article className="todo-searcher">
      <div className="todo-searcher__line">
        <div className="todo-searcher__input-container">
          <input className="todo-searcher__input" value={value} onChange={onChangeInput} />
          {value && <IconBtn Icon={XIcon} onClick={toClearInput} type="small" />}
        </div>
        <IconBtn Icon={SearchIcon} onClick={handleFilterClick} />
        <IconBtn Icon={AddIcon} onClick={handleAddClick} />
      </div>
      <span className="todo-searcher__er">{er}</span>
    </article>
  );
}
