import React from 'react';
import styles from './style.css';

// below style is from : https://loading.io/css/
const Ellipsis = (props) => (
  <>
    <style>{styles}</style>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Ellipsis;
