import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/user/login', { email, password });
      const { status, data, type } = response.data;

      if (status === 'ok') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { data, type } }); // Dispatch action on successful login
        if (type === 'admin') {
          // Redirect admin to admin page
          window.location.href = '/admin';
        } else {
          // Redirect employee to home page
          window.location.href = '/home';
        }
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: status }); // Dispatch action on login failure
      }
    } catch (error) {
      console.error('Login failed:', error);
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Internal server error' }); // Dispatch action on server error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
