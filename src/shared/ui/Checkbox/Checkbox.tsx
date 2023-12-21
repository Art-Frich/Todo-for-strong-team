import './Checkbox.scss';

interface ICheckbox {
  onClick: () => void;
  value: boolean;
}

export default function Checkbox({ onClick, value }: ICheckbox) {
  return (
    <label className="checkbox" onClick={onClick} title="Переключить чекбокс">
      <input className="checkbox__input" type="checkbox" defaultChecked={value} />
      <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <rect width="25" height="25" x={-2} y={-1} fill="#FFF" stroke="#006F94" rx="3" className="rect-tick" />
        <path className="tick" stroke="#6EA340" fill="none" strokeLinecap="round" strokeWidth="5" d="M4 10l5 5 9-9" />
      </svg>
    </label>
  );
}
