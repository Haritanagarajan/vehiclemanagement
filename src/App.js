import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../src/Components/Navbar/Nav';
import Register from '../src/Components/Authorization/Register';
import Login from '../src/Components/Authorization/Login';
import { UserContextProvider } from './Components/Context/userContext';
import Home from './Components/HomePage/Home';
import Admin from './Components/Admin/Admin';
import CarService from './Components/CarServices/CarService';
import CarBrand from './Components/CarBrand/CarBrand';
import BrandCar from '../src/Components/BrandCar/BrandCar';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/Admin' element={<Admin />} />
          <Route exact path='/CarService' element={<CarService />} />
          <Route exact path='/CarBrand' element={<CarBrand />} />
          <Route exact path='/BrandCar/:brandid' element={<BrandCar />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

