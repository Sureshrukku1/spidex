import React from 'react'
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Login />} />
          <Route path="/dashboard" element={< Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App