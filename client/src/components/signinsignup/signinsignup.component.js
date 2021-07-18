import React from 'react';
import FormInput from 'components/shared/forminput/forminput.component';
import './signinsignup.styles.scss';

const SignInSignUp = ({
  userCredentials,
  setUserCredentials,
  title,
  inputs,
  handleSubmit,
  buttons,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signinsignup-container">
      <div className="signinsignup">
        <span>{title}</span>
        <form className="signinsignupform" onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <FormInput
              name={input.name}
              key={index}
              type={input.type}
              value={input.value}
              label={input.label}
              handleChange={handleChange}
              required
            />
          ))}

          <div className="buttons">{buttons}</div>
        </form>
      </div>
    </div>
  );
};

export default SignInSignUp;
