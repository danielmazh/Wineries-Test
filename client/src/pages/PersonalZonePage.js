import React, { useState } from 'react';
import NavBar from '../common/components/NavBar';
import QuestionnaireForm from '../common/components/QuestionnaireForm';
import '../styles/QuestionnaireForm.css';

function PersonalZonePage() {
  const authToken = localStorage.getItem('token');

  return (
    <div className="user-form-container">
    <>
      <NavBar authToken={authToken} setIsLoggedIn={null} />
      <br />
      {authToken ? (
        <>
        <QuestionnaireForm />
        </>

      ) : (
        <p style={{ textAlign: 'center' }}>Please log in to access this content.</p>
      )}
    </>
    </div>
  );
}

export default PersonalZonePage;
