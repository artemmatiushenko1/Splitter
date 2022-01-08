import './ResetButton.css';

const ResetButton = (props) => {
  return (
    <button
      className="output-card__btn-reset"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Reset
    </button>
  );
};

export default ResetButton;
