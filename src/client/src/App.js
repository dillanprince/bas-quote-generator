import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';

import '../node_modules/bootstrap-scss/bootstrap.scss';

import './App.scss';

function App() {
  return (
    <div className="App text-center">
      <div className="container">
        <Header />
        <MainForm />
      </div>
    </div>
  );
}

export default App;
