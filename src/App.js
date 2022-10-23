import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import './App.css';
function App(){
  return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
  )
}

export default App;