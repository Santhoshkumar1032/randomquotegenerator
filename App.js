import React from 'react';
import Quotes from './components/quote';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';

function App() {
  
  
  return (
    <div className="mydiv">
    
    <Header/>
      <Quotes/>
      <Footer/>
      
    </div>
   
  );
}

export default App;