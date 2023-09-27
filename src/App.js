import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../src/Components/Navbar/Nav';
import UserProvider from './Components/Context/Context';
import Register from '../src/Components/Authorization/Register';
import Login from '../src/Components/Authorization/Login';

function App() {
  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

