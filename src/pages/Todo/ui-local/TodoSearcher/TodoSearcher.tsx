import './TodoSearcher.scss';

import IconBtn from '../../../../shared/ui/IconBtn/IconBtn';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/shared/lib/hooks/reduxHooks';
import { add, selectTodo } from '~/entities/todo-element/model/todoSlice';
import { AddIcon, SearchIcon, XIcon } from '~/shared/assets';
import { Tfiltered } from '../../Todo';

interface ITodoSearcher {
  setVisible: (newVisible: Tfiltered) => void;
}

export default function TodoSearcher({ setVisible }: ITodoSearcher) {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  const ref = useRef<HTMLInputElement | null>(null);
  const [er, setEr] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const toClearInput = () => {
    setValue('');
    setVisible(null);
  };

  const handleAddClick = () => {
    if (value) {
      setEr(null);
      dispatch(add(value));
      setVisible(null);
      toClearInput();
      if (ref.current) {
        ref.current.focus();
      }
    } else {
      setEr('Я не буду добавлять пустую строку.');
    }
  };

  const handleFilterClick = () => {
    if (value) {
      setEr(null);
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
          {value && <IconBtn Icon={XIcon} onClick={toClearInput} type="small" />}
          <input className="todo-searcher__input" value={value} onChange={onChangeInput} autoFocus ref={ref} />
        </div>
        <IconBtn Icon={AddIcon} onClick={handleAddClick} />
        <IconBtn Icon={SearchIcon} onClick={handleFilterClick} />
      </div>
      <span className="todo-searcher__er">{er}</span>
    </article>
  );
}
