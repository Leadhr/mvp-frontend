import React from 'react';
import './App.css';
import MainView from "./components/MainView/MainView"
import Sidebar from './components/Sidebar/Sidebar';
import SecondView from './components/SecondView/SecondView';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
      <Sidebar />
      <MainView />
      <SecondView />
      </div>
    </div>
  );
}

export default App;
