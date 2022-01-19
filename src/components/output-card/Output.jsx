import './Output.css';

const Output = ({ value, title }) => {
  const formatedValue = Number(value).toFixed(2);

  return (
    <div className="output">
      <h2 className="output__title">
        {title} <br />
        <span className="output__label">/ person</span>
      </h2>
      <output className="output__value">${formatedValue}</output>
    </div>
  );
};

export default Output;
