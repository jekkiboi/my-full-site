import './App.css';
import React from 'react'
import Footer from './components/Footer';
import Routes from './config/Routes'



function App() {

  return (
    <div 
    className='app-index' 
    style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/GrassS.png')`,
    }}
    >
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;

