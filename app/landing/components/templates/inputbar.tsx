'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import Clipboardbtn from './clipboardbtn';

const Inputbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    formControl: {
      borderColor: isFocused ? '#000000' : 'initial',
      boxShadow: isFocused
        ? '0px 1px 1px rgb(128, 128, 128, 0.075) inset, 0px 0px 8px rgb(169, 169, 169, 0.5)'
        : 'initial',
    },
  };

  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <div className="d-flex input-group">
    <input
    ref={inputRef}
    className='form-control w-75 align-center'
      type="text"
      style={styles.formControl}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      readOnly
      value={"btc address eg; 0xbsdlvb0820bv"}
    />
    <Clipboardbtn inputRef={inputRef}/>
    </div>
  );
};

export default Inputbar;
