import React from 'react'
import Forms from './pages/Forms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Bookings from './pages/Bookings';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/forms" element={<Forms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
