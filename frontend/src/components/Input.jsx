import Poor from "../static/images/icons/poor.png";
import BelowAverage from "../static/images/icons/below-average.png";
import Average from "../static/images/icons/average.png";
import AboveAverage from "../static/images/icons/above-average.png";
import Excellent from "../static/images/icons/excellent.png";

export const Input = ({ id, type, name, label, required, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">
        {label}
        <span>{required ? "*" : ""}</span>
      </label>
      <input
        className="form-control"
        type={type}
        id={id}
        name={name}
        required={required ? true : false}
        {...rest}
      />
    </div>
  );
};

export const Select = ({ id, name, label, required, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} <span>{required ? "*" : ""}</span>
      </label>
      <select
        className="form-select"
        name={name}
        id={id}
        required={required ? true : false}
        {...rest}
      >
        <option value="">---</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Rating = ({ id, name, label, required, onChange, ...rest }) => {
  const options = [
    {
      id: "poor",
      value: 1,
      img: Poor,
      text: "Poor",
    },
    {
      id: "below-avg",
      value: 2,
      img: BelowAverage,
      text: "Below Average",
    },
    {
      id: "avg",
      value: 3,
      img: Average,
      text: "Average",
    },
    {
      id: "above-avg",
      value: 4,
      img: AboveAverage,
      text: "Above Average",
    },
    {
      id: "excellent",
      value: 5,
      img: Excellent,
      text: "Excellent",
    },
  ];

  return (
    <div className="form-group">
      <label>
        {label} <span>{required ? "*" : ""}</span>
      </label>
      <div className="rating">
        {options.map((option) => (
          <label key={option.id} htmlFor={`${option.id}-${id}`}>
            <input
              type="radio"
              id={`${option.id}-${id}`}
              name={name}
              value={option.value}
              checked={rest.value === option.value}
              required={required ? true : false}
              onChange={() => onChange({ name, value: option.value })} // Corrected invocation
              {...rest}
            />
            <img src={option.img} alt={option.value} />
            <b>{option.text}</b>
          </label>
        ))}
      </div>
    </div>
  );
};

export const Textarea = ({ id, name, label, required, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        <span>{required ? "*" : ""}</span>
      </label>
      <textarea
        className="form-control"
        name={name}
        id={id}
        rows="4"
        required={required ? true : false}
        {...rest}
      ></textarea>
    </div>
  );
};

export const Button = ({ id, type, value, classList, ...rest }) => {
  return (
    <button className={`btn ${classList}`} id={id} type={type} {...rest}>
      {value}
    </button>
  );
};
