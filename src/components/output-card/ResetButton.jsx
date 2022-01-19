import './ResetButton.css';

const ResetButton = ({ onClick, disabled }) => {
  return (
    <button
      className="output-card__btn-reset"
      onClick={onClick}
      disabled={disabled}
    >
      Reset
    </button>
  );
};

export default ResetButton;
