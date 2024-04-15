/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
 
export default function ProtectedPage({ loggedIn }) {
   const navigate = useNavigate();

   if (!loggedIn) {
      navigate('/', { replace: true });
      return null;
   } 

   return ( 
         <>
            <Header />
            <Main />
            <Footer />
         </>
   );
} */
