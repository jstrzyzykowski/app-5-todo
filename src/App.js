import React from 'react';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import AppProvider from './context/AppContext';

import './App.css';

function App() {
  return (
    <AppProvider>
    <div className='app'>
      <div className="app__container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
