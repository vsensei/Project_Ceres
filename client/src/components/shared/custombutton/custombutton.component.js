import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} custombutton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
