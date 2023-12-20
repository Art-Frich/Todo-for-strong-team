import './TodoListRow.scss';

interface ITodoListRow {
  content: string;
}
export default function TodoListRow({ content }: ITodoListRow) {
  return (
    <div className="todo-list-row">
      <p className="todo-list-row__text mp-0">{content}</p>
    </div>
  );
}
