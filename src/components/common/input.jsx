import React from "react";
const Input = ({ name, type, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type={type}
        name={name}
        //ref={this.username} // refer the dom element
        className="form-control"
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
