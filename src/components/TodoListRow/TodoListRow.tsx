interface ITodoListRow {
  content: string;
}
export default function TodoListRow({ content }: ITodoListRow) {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}
