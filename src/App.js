import React from 'react';
import './App.css';
import MainView from "./components/mainView/mainview"
import Sidebar from './components/sidebar/sidebar';
import SecondView from './components/secondView/secondView';

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
