// src/components/Input.tsx

import React from "react";

interface InputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
      <input type="range" min="-100" max="100" value={value as number} onChange={handleChange} /> 
    </div>
  );
};

export default Input;
