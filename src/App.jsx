

import React, { useState } from 'react';
import PortfolioHeader from './components/header/Header';
import MainPortfolio from './components/mainSection/mainSection';
import PortfolioFooter from './components/footer/PortfolioFooter';


function App() {
   const [shoModal, setShoModal] = useState(false);
  
    const openModal = () => {
      setShoModal(true);
    };
  
  const closeModal = () => {
          setShoModal(false);
      }  


  return (
    <>
   
      <PortfolioHeader onClick={openModal} show={shoModal} onClose={closeModal } />      
      <MainPortfolio />
      <PortfolioFooter/>
     
    </>
  )
}

export default App
