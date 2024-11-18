import React from "react";

const Checkbox = ({ label, value, onClick, isChecked }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        className="mr-2"
        onChange={(e) => onClick(value, label, e.target.checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
