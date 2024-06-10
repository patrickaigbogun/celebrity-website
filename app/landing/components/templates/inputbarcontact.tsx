'use client';
import React, { useState, useRef } from 'react';
// import Clipboardbtn from './clipboardbtn';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (label: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const styles = {
    formControl: {
      borderstyle: 'none',
      borderColor: isFocused ? 'grey' : 'initial',
      boxShadow: isFocused
        ? '0px 1px 1px rgba(0, 5, 5, 0.075) inset, 0px 0px 8px rgba(3, 3, 3)'
        : 'initial',
    },
  };

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <div className="d-flex">
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          style={styles.formControl}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={(e) => onChange(label, e.target.value)}
        />
        {/* <Clipboardbtn inputRef={inputRef} /> */}
      </div>
    </div>  
  );
};

type Fields = {
  [key: string]: string;
};

const InputbarContact: React.FC = () => {
  const [fields, setFields] = useState<Fields>({
    'First Name': '',
    'Last Name': '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const handleInputChange = (label: string, value: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [label]: value,
    }));
  };

  return (
    <>
      {Object.keys(fields).map((label) => (
        <InputField
          key={label}
          label={label}
          value={fields[label]}
          onChange={handleInputChange}
        />
      ))}
    </>
  );
};

export default InputbarContact;
