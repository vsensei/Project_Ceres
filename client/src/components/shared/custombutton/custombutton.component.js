import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({ children, inverted, alternative, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted ' : ''}${
      alternative ? 'alternative ' : ''
    }custombutton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
