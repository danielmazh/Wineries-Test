// import React, { useState, useEffect } from 'react';
// import NavBar from '../common/components/NavBar';
// import UserData from '../common/components/UserData';

// function UserDataPage() {
//   const authToken = localStorage.getItem('token');
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('/api/userdata');
//       const data = await response.json();
//       setFormData(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="user-form-container">
//       <>
//         <NavBar authToken={authToken} setIsLoggedIn={null} />
//         <br />
//         {authToken ? (
//           <>
//             {formData ? (
//               <UserData formData={formData} />
//             ) : (
//               <p style={{ textAlign: 'center' }}>Loading...</p>
//             )}
//           </>
//         ) : (
//           <p style={{ textAlign: 'center' }}>Please log in to access this content.</p>
//         )}
//       </>
//     </div>
//   );
// }

// export default UserDataPage;


import React from 'react';
import NavBar from '../common/components/NavBar';
import UserData from '../common/components/UserData';

function UserDataPage() {
  const authToken = localStorage.getItem('token');

  return (
    <div className="user-form-container">
      <>
        <NavBar authToken={authToken} setIsLoggedIn={null} />
        <br />
        {authToken ? (
          <UserData />
        ) : (
          <p style={{ textAlign: 'center' }}>Please log in to access this content.</p>
        )}
      </>
    </div>
  );
}

export default UserDataPage;
