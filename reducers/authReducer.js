// reducers/authReducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../src/actions/authActions';

const initialState = {
  token: null,
  userType: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userType: action.payload.userType,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
