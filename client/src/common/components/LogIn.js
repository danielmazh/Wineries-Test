import React, { useState } from 'react';
import { setJwt } from '../../helpers/auth';
import axios from 'axios';
import '../../styles/UserForm.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../common/components/NavBar';

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;
      setJwt(token);
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      props.setIsLoggedIn(true); 
      navigate(`/PersonalZone/${token}`);
      console.log('Log-In Success');
    } catch (error) {
      console.error(error);
      setError('Incorrect email or password');
    }
  };

  return (
    <div dir="rtl" className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <br /><br /><br /><br />
        <div className="user-form-input">
          <label htmlFor="email">אימייל:</label>
          <input
            type="email"
            name="email"
            placeholder="הזינו את המייל שלכם"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="user-form-input">
          <label htmlFor="password">סיסמא:</label>
          <input
            type="password"
            name="password"
            placeholder="הזינו את הסיסמא שלכם"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <div className="user-error-message">{error}</div>}
        <button className="form-buttons-main-001" type="submit">כניסה</button>
      </form>
      <NavBar setIsLoggedIn={props.setIsLoggedIn} /> 
    </div>
  );
}

export default LogIn;







