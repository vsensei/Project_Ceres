import UserActionTypes from './user.types';

export const setCurrentUser = (currentUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (e) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: e,
});

export const emailSignInStart = ({ email, password }) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
