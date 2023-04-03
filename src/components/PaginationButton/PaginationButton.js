// components/PaginationDots/PaginationDots.js

import React from 'react';
import styles from './PaginationButton.module.css';

const PaginationDots = ({ totalSlides, activeSlide, onClick }) => {
  return (
    <div className={styles.paginationDots}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`${styles.dot} ${
            index === activeSlide ? styles.active : ''
          }`}
          onClick={() => onClick(index)}
        ></button>
      ))}
    </div>
  );
};

export default PaginationDots;
