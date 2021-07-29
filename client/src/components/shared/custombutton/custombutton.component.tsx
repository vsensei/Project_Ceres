import React from 'react';
import './custombutton.styles.scss';

type Props = {
  children: JSX.Element;
  alternative: boolean;
  inverted: boolean;
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
