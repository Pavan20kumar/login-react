import React, { useState, useEffect } from 'react';
import { Navigate,Link} from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import { FaRegUser } from "react-icons/fa6";
function Navabar (){


    const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
        const token = cookies.get('jwttoken');
        
      
      if (!token) {
        setError('No token found. Please login.');
        return <Navigate to="/login" />;
      }

      try {
        const response = await axios.get('https://login-backend-zofi.onrender.com/login-user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (err) {
        setError(err.response?.data?.error || 'An error occurred');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }


  const onLogout = () => {
    cookies.remove('jwttoken');
    window.location.href = '/login';
  };



































    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link href="#" className="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="#" className="nav-link">Mobiles</Link>
        </li>
        <li class="nav-item">
        <Link href="#" className="nav-link">laptop</Link>
        </li>
        <li class="nav-item">
        <Link href="#" className="nav-link">Watches</Link>
        </li>
        <li class="nav-item">
          <Link href="#" className="nav-link"><FaRegUser/>{user.name}</Link>
        </li>

        <li class="nav-item">
          <Link href="#" className="nav-link btn btn-primary" onClick={onLogout}>logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    

    )
}
export default Navabar
