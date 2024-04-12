
import React from "react";
import "./Input.css"; 

interface InputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    const newValue = isNaN(inputValue) ? 0 : inputValue; 
    onChange(newValue.toString());
  };

  return (
    <div className="input-container">
      <label className="input-label" title={label}>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
      <input type="range" min="0" max="100" value={value as number} onChange={handleChange} title={label} /> {/* Adjust min value to 0 */}
    </div>
  );
};

export default Input;
