import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/UserForm.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // add message state
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setMessage('Please fill out all fields.');
      return;
    }
    try {
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
      });
      console.log('user-name', username);
      console.log(response.data);
      setMessage('SUCCESS!');
      navigate('/login');
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data);
    }
  };
  

  return (
    <div dir="rtl" className="user-form-container">
    <form className="user-form" onSubmit={handleSubmit}>
      <br /><br /><br /><br />

      <div className="user-form-input">
      <label>
        שם משתמש:<br />
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      </div>

      <div className="user-form-input">
      <label>
        אימייל:<br />
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      </div>

      <div className="user-form-input">
      <label>
        סיסמא:<br />
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      </div>

      <button className="form-buttons-main-001" type="submit">רישום</button>
      {message && <p className={message.includes('SUCCESS') ? 'success' : 'error'}>{message}</p>}
      {/* display message if it exists */}
    </form>
    </div>
  );
};

export default SignUp;
