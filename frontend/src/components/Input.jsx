import Poor from "../static/images/icons/poor.png";
import BelowAverage from "../static/images/icons/below-average.png";
import Average from "../static/images/icons/average.png";
import AboveAverage from "../static/images/icons/above-average.png";
import Excellent from "../static/images/icons/excellent.png";

export const Input = ({ id, type, name, label, required }) => {
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
      />
    </div>
  );
};

export const Select = ({ id, name, label, required, options }) => {
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
      >
        <option value="">---</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        className="form-control"
        type="text"
        id="other-position"
        placeholder="Please specify"
        required
        style={{ marginTop: "15px" }}
      />
    </div>
  );
};

export const Rating = ({ id, name, label, required }) => {
  const options = [
    {
      id: "poor",
      value: "Poor",
      img: Poor,
    },
    {
      id: "below-avg",
      value: "Below Average",
      img: BelowAverage,
    },
    {
      id: "avg",
      value: "Average",
      img: Average,
    },
    {
      id: "above-avg",
      value: "Above Average",
      img: AboveAverage,
    },
    {
      id: "excellent",
      value: "Excellent",
      img: Excellent,
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
              required={required ? true : false}
            />
            <img src={option.img} alt={option.value} />
            <b>{option.value}</b>
          </label>
        ))}
      </div>
    </div>
  );
};

export const Textarea = ({ id, name, label, required }) => {
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
      ></textarea>
    </div>
  );
};

export const Button = ({ id, type, value, classList }) => {
  return (
    <button className={`btn ${classList}`} id={id} type={type}>
      {value}
    </button>
  );
};