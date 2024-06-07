'use client';
import React from 'react';
import Image from 'next/image';

interface ClipboardbtnProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const Clipboardbtn: React.FC<ClipboardbtnProps> = ({ inputRef }) => {
  const copyTextToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      alert('copied!');
    }
  };

  return (
    <button onClick={copyTextToClipboard} className="btn btn-outline-secondary">
      <Image
        src="/bx-clipboard.svg"
        alt="clipboard"
        width={25}
        height={25}
      />
    </button>
  );
};

export default Clipboardbtn;
