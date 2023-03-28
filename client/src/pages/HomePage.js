import React from 'react';
import NavBar from '../common/components/NavBar';

function HomePage() {
  const authToken = localStorage.getItem('token');
  return (
    <div>
      <NavBar authToken={authToken} /><br /><br /><br />
      <h1 style={{textAlign: 'center'}}>Wineries IL</h1>
    </div>
  );
}

export default HomePage;
