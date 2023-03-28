import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearJwt } from '../../helpers/auth';
import '../../styles/NavBar.css';

function NavBar(props) {
   const navigate = useNavigate();

   const handleLogout = () => {
     clearJwt();
     navigate('/');
     window.location.reload();
   };

   return (
     <nav dir="rtl" className="navbar">
       <ul>
         {props.authToken ? (
           <>
             {/* <li>
               <Link className="nav-link" to={`/PersonalZone/${props.authToken}`}>Personal Zone</Link>
             </li> */}
             <li>
               <Link className="nav-link" onClick={handleLogout} to="/">התנתקות</Link>
             </li>
           </>
         ) : (
           <>
            <li>
              <Link className="nav-link" to="/">בית</Link>
            </li>
             <li>
               <Link className="nav-link" to="/signup">רישום</Link>
             </li>
             <li>
               <Link className="nav-link" to="/Login">כניסה</Link>
             </li>
           </>
         )}
       </ul>
     </nav>
   );
}

export default NavBar;


