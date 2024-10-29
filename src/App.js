// App.jsx
import React from 'react';
import { Router, HashRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
      <HashRouter>
      <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          

      </Routes>
      </HashRouter>
  );
}

export default App;
