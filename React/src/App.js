import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Find from './components/Find'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Find />
    </div>
  );
}

export default App;
