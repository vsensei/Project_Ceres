import React, { useState } from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import { connect } from 'react-redux';
import SignInSignUp from 'components/signinsignup/signinsignup.component';
import { signUpStart } from 'redux/user/user.actions';

const SignUpPage = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { userName, email, password, confirmPassword } = userCredentials;
  const title = 'Sign up with your name, email and password';
  const buttons = <CustomButton type="submit">Sign Up</CustomButton>;
  const signUpInputs = [
    {
      name: 'userName',
      type: 'text',
      value: userName,
      label: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      value: email,
      label: 'Email',
    },
    {
      name: 'password',
      type: 'password',
      value: password,
      label: 'Password',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      value: confirmPassword,
      label: 'Confirm password',
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email, password, userName });
  };

  return (
    <SignInSignUp
      userCredentials={userCredentials}
      setUserCredentials={setUserCredentials}
      title={title}
      inputs={signUpInputs}
      handleSubmit={handleSubmit}
      buttons={buttons}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
