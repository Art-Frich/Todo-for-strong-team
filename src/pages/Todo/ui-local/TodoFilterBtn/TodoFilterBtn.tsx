interface ITodoFilterBtn {
  className?: string;
  title: string;
  onClick: () => void;
  text: string;
}

export default function TodoFilterBtn({ title, onClick, text, className = 'todo-filters__btn' }: ITodoFilterBtn) {
  return (
    <button className={className} title={title} onClick={onClick}>
      {text}
    </button>
  );
}
