// components/PaginationButton/PaginationButton.js

import React from 'react';
import styles from './PaginationButton.module.css';

const PaginationButton = ({ direction, onClick }) => {
  return (
    <button
      className={`${styles.paginationButton} ${
        direction === 'prev' ? styles.prev : styles.next
      }`}
      onClick={onClick}
    >
      {direction === 'prev' ? '<' : '>'}
    </button>
  );
};

export default PaginationButton;
