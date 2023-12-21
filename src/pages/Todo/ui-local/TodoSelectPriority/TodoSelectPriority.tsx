import { forwardRef } from 'react';
import './TodoSelectPriority.scss';

interface ITodoSelectPriority {
  val: number;
  type?: 'small' | 'medium';
  unDisplay?: boolean;
}

const TodoSelectPriority = forwardRef<HTMLSelectElement, ITodoSelectPriority>(function _TodoSelectPriority(
  { val, type = 'medium', unDisplay = false }: ITodoSelectPriority,
  ref,
) {
  return (
    <select
      defaultValue={val}
      className={`select-prior select-prior_${type} ${unDisplay ? 'un-display' : ''}`}
      title="Выберите приоритет задачи"
      ref={ref}
    >
      {new Array(5).fill(null).map((_, i) => (
        <option key={i} value={i + 1} className="select-prior__el">
          {i + 1}
        </option>
      ))}
    </select>
  );
});

export default TodoSelectPriority;
