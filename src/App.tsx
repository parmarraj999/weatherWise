import React from 'react';
import './App.css';
import Sidebar from './pages/sidebar/sidebar';
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">
      <div className='right-main'>
        <Sidebar/>
      </div>
      <div className='left-main' >
        <Main/>
      </div>
    </div>
  );
}

export default App;