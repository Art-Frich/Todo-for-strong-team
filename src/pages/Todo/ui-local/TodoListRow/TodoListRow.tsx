import './TodoListRow.scss';
import IconBtn from '~/shared/ui/IconBtn/IconBtn';
import { ChangeIcon, CheckIcon, DelIcon } from '~/shared/assets';
import Checkbox from '~/shared/ui/Checkbox/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '~/shared/lib/hooks/reduxHooks';
import { TTodo, assertPriority, changeTodo, delTodo } from '~/entities/todo-element';
import TodoSelectPriority from '../TodoSelectPriority/TodoSelectPriority';

interface ITodoListRow {
  content: TTodo;
  i: number;
}
export default function TodoListRow({ content, i }: ITodoListRow) {
  const { isEnd, text, priority, date } = content;
  const dispatch = useAppDispatch();
  const refInput = useRef<HTMLInputElement | null>(null);
  const refSelect = useRef<HTMLSelectElement | null>(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isFirst, setIsFirst] = useState(true); // при первой отрисовке никаких

  const handleCheckboxClick = () => {
    dispatch(changeTodo({ i, val: { ...content, isEnd: !isEnd } }));
  };

  const handleChangeClick = () => {
    setIsChanged((prev) => !prev);
  };

  const handlerDelClick = () => {
    dispatch(delTodo(i));
  };

  useEffect(() => {
    if (!isFirst) {
      if (isChanged) {
        refInput.current?.focus();
      } else if (refInput.current?.value.length && refSelect.current?.value) {
        console.log('suka');
        const prior = Number(refSelect.current.value);
        assertPriority(prior);
        dispatch(
          changeTodo({
            i,
            val: { ...content, text: refInput.current.value, priority: prior },
          }),
        );
      } else {
        refInput.current!.value = text;
      }
    } else {
      setIsFirst(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isChanged]);

  return (
    <div className="todo-list-row">
      <div className="todo-list-row__container">
        <Checkbox onClick={handleCheckboxClick} value={isEnd} />
        <TodoSelectPriority val={priority} type="small" ref={refSelect} unDisplay={!isChanged} />
        <span className={`todo-list-row__info ' ${isChanged ? 'un-display' : ''}`} title="Текущий приоритет задачи">
          {priority}
        </span>
        <input
          className={`todo-list-row__text
          ${isEnd ? 'todo-list-row__text_through' : ''}
          ${isChanged ? 'todo-list-row__text_change' : ''}
          mp-0`}
          defaultValue={text}
          disabled={!isChanged}
          ref={refInput}
          title="Суть вашего дела"
        />
      </div>

      <div className="todo-list-row__container">
        <span className="todo-list-row__info" title="Дата создания дела">
          {date}
        </span>
        <IconBtn
          Icon={isChanged ? CheckIcon : ChangeIcon}
          type="small"
          onClick={handleChangeClick}
          title="Редактировать запись"
        />
        <IconBtn Icon={DelIcon} type="small" onClick={handlerDelClick} title="Удалить запись" />
      </div>
    </div>
  );
}
