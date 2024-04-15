// import React from 'react';
import { Navigate } from 'react-router-dom';

  export default function ProtectedRoute({ element: Component, loggedIn, ...props }) {
   return ( 
      loggedIn ? <Component {...props} /> : <Navigate to='/' replace />
   );
}

/* export default function ProtectedRoute({ element, loggedIn, ...props }) {
   return ( 
      loggedIn ? <element {...props} /> : <Navigate to='/' replace />
   );
}*/ 

 /* export default function ProtectedRoute({ element: Component, loggedIn, ...props }) {
  return (
   <Routes>
    <Route {...props} element={loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />} />
    </Routes>
  );
} */
