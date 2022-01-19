import './Option.css';

const Option = ({ className, value, id, onSelected }) => {
  return (
    <button
      className={`option ${className}`}
      data-tip={value}
      data-id={id}
      onClick={onSelected}
    >
      {value}%
    </button>
  );
};

export default Option;
