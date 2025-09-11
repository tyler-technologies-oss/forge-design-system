import React from 'react';
import styles from './text-input.module.css';

export default function InputField({ onInput, placeholder = '', type = 'text' }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} onInput={onInput} className={styles.input} />
    </div>
  );
}
