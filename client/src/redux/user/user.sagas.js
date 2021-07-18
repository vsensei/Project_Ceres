import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { auth } from 'firebase/firebase.utils';
import { signUpSuccess, signUpFailure } from './user.actions';

export function* signUp({ payload: { email, password, userName } }) {
  console.log(email, password, userName);
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { userName } }));
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
