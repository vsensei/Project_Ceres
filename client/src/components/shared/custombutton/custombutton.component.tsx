import React, { MouseEventHandler } from 'react';
import './custombutton.styles.scss';

type Props = {
  children: JSX.Element | string;
  alternative?: boolean;
  inverted?: boolean;
  onClick?: MouseEventHandler;
};

const CustomButton: React.FC<Props> = ({
  children,
  alternative,
  inverted,
  ...otherProps
}) => (
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
