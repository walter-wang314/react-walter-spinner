import React from 'react';
import styles from './style.css';

// below style is from : https://loading.io/css/
const Ring = (props) => (
  <>
    <style>{styles}</style>
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Ring;
