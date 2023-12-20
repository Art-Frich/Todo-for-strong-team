import './IconBtn.scss';

interface IconBtn {
  Icon: () => JSX.Element;
  onClick: () => void;
  type?: 'normal' | 'small';
}

export default function IconBtn({ Icon, onClick, type = 'normal' }: IconBtn) {
  return (
    <button className={`icon-btn icon-btn_${type}`} onClick={onClick}>
      <Icon />
    </button>
  );
}
