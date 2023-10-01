import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../src/Components/Navbar/Nav';
import Register from '../src/Components/Authorization/Register';
import Login from '../src/Components/Authorization/Login';
import { UserContextProvider } from './Components/Context/userContext';
import Home from './Components/HomePage/Home';
import CarService from './Components/CarServices/CarService';
import CarBrand from './Components/CarBrand/CarBrand';
import BrandCar from '../src/Components/BrandCar/BrandCar';
import CarFuel from './Components/CarFuel/CarFuel';
import { CarDetails } from './Components/CarDetails/CarDetails';
import CarBrandCreate from './Components/Admin/CarBrandCreate';
import CarBrandEdit from './Components/Admin/CarBrandEdit';
import CarBrandIndex from './Components/Admin/CarBrandIndex';
import { CarBrandDelete } from './Components/Admin/CarBrandDelete';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/CarService/:carid' element={<CarService />} />
          <Route exact path='/CarBrand' element={<CarBrand />} />
          <Route exact path='/BrandCar/:brandid' element={<BrandCar />} />
          <Route exact path='/CarFuel' element={<CarFuel />} />
          <Route exact path='/CarDetails' element={<CarDetails />} />
          <Route exact path='/CarBrandCreate' element={<CarBrandCreate />} />
          <Route exact path='/CarBrandIndex' element={<CarBrandIndex />} />
          <Route exact path='/CarBrandEdit/:brandid' element={<CarBrandEdit />} />
          <Route exact path='/CarBrandDelete/:brandid' element={<CarBrandDelete />} />

        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

