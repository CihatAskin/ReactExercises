import React from "react";

const TextIput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-input";
  console.log("error textInput", error);
  if (error && error.length) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextIput;
