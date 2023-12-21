import './TodoSearcher.scss';

import IconBtn from '../../../../shared/ui/IconBtn/IconBtn';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/shared/lib/hooks/reduxHooks';
import { AddIcon, SearchIcon, XIcon } from '~/shared/assets';
import { Tfiltered } from '../../Todo';
import { add, assertPriority, formatDate, selectTodo } from '~/entities/todo-element';
import TodoSelectPriority from '../TodoSelectPriority/TodoSelectPriority';

interface ITodoSearcher {
  setVisible: (newVisible: Tfiltered | (() => Tfiltered)) => void;
}

export default function TodoSearcher({ setVisible }: ITodoSearcher) {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  const refInput = useRef<HTMLInputElement | null>(null);
  const refSelect = useRef<HTMLSelectElement | null>(null);
  const [er, setEr] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const toClearInput = () => {
    setValue('');
    setVisible(null);
  };

  const handleAddClick = () => {
    if (value && refSelect.current?.value) {
      const prior = Number(refSelect.current.value);
      assertPriority(prior);

      setEr(null);
      dispatch(add({ isEnd: false, text: value, priority: prior, date: formatDate(new Date()) }));
      setVisible(null);
      toClearInput();
      if (refInput.current) {
        refInput.current.focus();
      }
    } else {
      setEr('Я не буду добавлять пустую строку.');
    }
  };

  const handleFilterClick = () => {
    if (value) {
      setEr(null);
      setVisible(() => {
        const res = [...todo].filter((val) => {
          const regExp = new RegExp(value, 'i');
          return regExp.test(val.text);
        });
        return res;
      });
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
          {value && <IconBtn Icon={XIcon} onClick={toClearInput} type="small" title="Удалить написанное" />}
          <TodoSelectPriority val={3} ref={refSelect} />
          <input
            className="todo-searcher__input"
            value={value}
            onChange={onChangeInput}
            autoFocus
            ref={refInput}
            title="Укажите суть дела"
          />
        </div>
        <IconBtn Icon={AddIcon} onClick={handleAddClick} title="Добавить к списку" />
        <IconBtn Icon={SearchIcon} onClick={handleFilterClick} title="Найти в списке по описанию" />
      </div>
      <span className="todo-searcher__er">{er}</span>
    </article>
  );
}
