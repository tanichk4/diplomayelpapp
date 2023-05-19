import React from "react";
import "../styles/Input.scss";
import classNames from "classnames";

const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}) => {

  const labelClass = classNames("label");
  
  return (
    <label className={labelClass}>
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export default Input;
