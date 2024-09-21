
import React from 'react';
import './Login.css';

import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';










const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const onSubmiteSuccess = (token) => {
      cookies.set('jwttoken', token, { expires: 1 });
      navigate('/')
    };

    useEffect(() => {
      if (cookies.get('jwttoken')) {
        navigate('/');
      }
    }, [navigate]);

    const onerror = (err) => {
      setError(err)
    }
    


















  const onhandliySubmite = async (e) => {
    e.preventDefault();

    setEmail('')
    setPassword('')

    const response = await fetch('https://login-backend-zofi.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if(response.ok){
      onSubmiteSuccess(data.token)
      
      
    }else{
      onerror(data.error)
    }



    
   


  };







  return (
    <div className='bg-container'>
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={onhandliySubmite}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className='text-white fs-5'>{error}</span>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className='d-flex justify-content-between mt-3'>
            <Link to="/register">Register</Link>
            <Link to="/forget">Forget Password</Link>

          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
