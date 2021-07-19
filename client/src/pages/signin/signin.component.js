import React, { useState } from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import { connect } from 'react-redux';
import SignInSignUp from 'components/signinsignup/signinsignup.component';
import { emailSignInStart, googleSignInStart } from 'redux/user/user.actions';

const SignInPage = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const title = 'Sign in with your email and password';
  const buttons = (
    <>
      <CustomButton type="submit">Sign In</CustomButton>
      <CustomButton onClick={googleSignInStart} alternative>
        Sign In With Google
      </CustomButton>
    </>
  );
  const signInInputs = [
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
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart({ email, password });
  };

  return (
    <SignInSignUp
      userCredentials={userCredentials}
      setUserCredentials={setUserCredentials}
      title={title}
      inputs={signInInputs}
      handleSubmit={handleSubmit}
      buttons={buttons}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignInPage);
