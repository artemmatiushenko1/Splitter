import './Option.css';

const Option = (props) => {
  return (
    <button
      className={`option ${props.className}`}
      data-tip={props.value}
      data-id={props.id}
      onClick={props.onSelected}
    >
      {props.value}%
    </button>
  );
};

export default Option;
