import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginSuccess, loginFailure } from './actions/authActions'; // Import authentication actions
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // Default user type
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/user/login', { email, password });
      const { status, data, type } = response.data;

      if (status === 'ok') {
        dispatch(loginSuccess({ data, type })); // Dispatch login success action
        if (type === 'admin') {
          window.location.href = '/admin'; // Redirect admin to admin page
        } if (type === 'employee')  {
          window.location.href = '/about'; // Redirect employee to home page
        }
      } else {
        dispatch(loginFailure(status)); // Dispatch login failure action
      }
    } catch (error) {
      console.error('Login failed:', error);
      dispatch(loginFailure('Internal server error')); // Dispatch login failure action on server error
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Box sx={{ '& > :not(style)': { marginBottom: 2 } }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { marginBottom: 2 } }}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { marginBottom: 2 } }}>
          <FormControl>
            <InputLabel>User Type</InputLabel>
            <Select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button type="submit" variant="contained">Login</Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
