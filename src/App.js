import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Hotels from './components/Hotel/Hotels';
import CreateHotel from './components/Hotel/CreateHotel'; 
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/new" element={<CreateHotel />} />
      </Routes>
    </Router>
  );
}

export default App;







