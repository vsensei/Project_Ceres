import React from 'react';
import { ChangeEventHandler } from 'react';
import './forminput.styles.scss';

type Props = {
  handleChange: ChangeEventHandler;
  label: string;
  value: string;
};

const FormInput: React.FC<Props> = ({
  handleChange,
  label,
  value,
  ...otherProps
}) => (
  <div className="group">
    <input className="forminput" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} forminputlabel`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
