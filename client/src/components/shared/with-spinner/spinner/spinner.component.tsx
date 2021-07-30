import React from 'react';
import './spinner.styles.scss';

const Spinner: React.FC = () => (
  <div className="spinner-overlay">
    <div className="spinner"></div>
  </div>
);

export default Spinner;
