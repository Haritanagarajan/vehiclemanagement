import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../src/Components/Navbar/Nav';
import Register from '../src/Components/Authorization/Register';
import Login from '../src/Components/Authorization/Login';
import { UserContextProvider } from './Components/Context/userContext';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Home' element={<Home />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

