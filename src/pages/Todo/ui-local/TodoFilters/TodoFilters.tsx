import { useAppDispatch } from '~/shared/lib/hooks/reduxHooks';
import './TodoFIlters.scss';
import { useEffect, useState } from 'react';
import { filterBy } from '~/entities/todo-element';
import TodoFilterBtn from '../TodoFilterBtn/TodoFilterBtn';

export default function TodoFilters() {
  const dispatch = useAppDispatch();
  const [selectedFilter, setSelectedFilter] = useState<'priority' | 'alphabet' | 'date' | null>(null);

  const handleFilterClick = (filterType: 'priority' | 'alphabet' | 'date') => {
    setSelectedFilter(filterType);
  };

  useEffect(() => {
    if (selectedFilter) {
      dispatch(filterBy(selectedFilter));
    }
  }, [dispatch, selectedFilter]);

  return (
    <div className="todo-filters">
      <TodoFilterBtn
        className={`todo-filters__btn ${selectedFilter === 'priority' ? 'todo-filters__btn_active' : ''}`}
        title="Сортировать по приоритету"
        onClick={() => handleFilterClick('priority')}
        text="По приоритету"
      />
      <div className="todo-filters__div" />
      <TodoFilterBtn title="Сортировать по алфавиту" onClick={() => handleFilterClick('alphabet')} text="По алфавиту" />
      <div className="todo-filters__div" />
      <TodoFilterBtn title="Сортировать по дате" onClick={() => handleFilterClick('date')} text="По дате" />
    </div>
  );
}
