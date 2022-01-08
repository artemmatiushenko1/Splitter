import './Output.css';

const Output = (props) => {
  const value = Number(props.value).toFixed(2);

  return (
    <div className="output">
      <h2 className="output__title">
        {props.title} <br />
        <span className="output__label">/ person</span>
      </h2>
      <output className="output__value">${value}</output>
    </div>
  );
};

export default Output;
