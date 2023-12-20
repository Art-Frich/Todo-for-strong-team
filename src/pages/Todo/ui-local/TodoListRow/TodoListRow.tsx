import IconBtn from '~/shared/ui/IconBtn/IconBtn';
import './TodoListRow.scss';
import { ChangeIcon, CheckIcon, DelIcon } from '~/shared/assets';
import Checkbox from '~/shared/ui/Checkbox/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '~/shared/lib/hooks/reduxHooks';
import { changeTodo, delTodo } from '~/entities/todo-element/model/todoSlice';

interface ITodoListRow {
  content: string;
  i: number;
}
export default function TodoListRow({ content, i }: ITodoListRow) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement | null>(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleChangeClick = () => {
    setIsChanged((prev) => !prev);
  };

  const handlerDelClick = () => {
    dispatch(delTodo(i));
  };

  useEffect(() => {
    if (isChanged) {
      ref.current?.focus();
    } else if (ref.current?.value) {
      dispatch(changeTodo({ i, val: ref.current.value }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isChanged]);

  return (
    <div className="todo-list-row">
      <div className="todo-list-row__container">
        <Checkbox onClick={handleCheckboxClick} />
        <input
          className={`todo-list-row__text
          ${isChecked ? 'todo-list-row__text_through' : ''}
          ${isChanged ? 'todo-list-row__text_change' : ''}
          mp-0`}
          defaultValue={content}
          disabled={!isChanged}
          ref={ref}
        />
      </div>

      <div className="todo-list-row__container">
        <IconBtn Icon={isChanged ? CheckIcon : ChangeIcon} type="small" onClick={handleChangeClick} />
        <IconBtn Icon={DelIcon} type="small" onClick={handlerDelClick} />
      </div>
    </div>
  );
}
