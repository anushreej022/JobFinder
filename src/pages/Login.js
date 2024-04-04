import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import axios from 'axios';
import { loginSuccess, loginFailure } from './actions/authActions';
import { Navigate } from 'react-router-dom'; // Import Navigate component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user !== null); // Check if user is logged in

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', { email, password, userType });
      const { status, data } = response.data;

      if (status === 'ok') {
        dispatch(loginSuccess(data.token, userType)); // Dispatch loginSuccess with token and userType
      } else {
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      console.error('Login failed:', error);
      dispatch(loginFailure('Internal server error'));
    }
  };

  // If user is logged in, redirect to appropriate page based on userType
  if (isLoggedIn) {
    return <Navigate to={userType === 'admin' ? '/admin' : '/home'} replace />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
