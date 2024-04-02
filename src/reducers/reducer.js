// reducers.js

import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your reducers

const rootReducer = combineReducers({
  auth: authReducer, // Combine multiple reducers here if needed
});

export default rootReducer;
