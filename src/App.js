import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
import CarBrandCreate from './Components/CarBrandAdmin/CarBrandCreate';
import CarBrandEdit from './Components/CarBrandAdmin/CarBrandEdit';
import CarBrandIndex from './Components/CarBrandAdmin/CarBrandIndex';
import { CarBrandDelete } from './Components/CarBrandAdmin/CarBrandDelete';
import BrandCarCreate from './Components/BrandCarAdmin/BrandCarCreate';
import BrandCarIndex from './Components/BrandCarAdmin/BrandCarIndex';
import { BrandCarDelete } from './Components/BrandCarAdmin/BrandCarDelete';
import BrandCarEdit from './Components/BrandCarAdmin/BrandCarEdit';
import CarFuelIndex from './Components/CarFuelAdmin/CarFuelIndex';
import CarFuelCreate from './Components/CarFuelAdmin/CarFuelCreate';
import { CarFuelDelete } from './Components/CarFuelAdmin/CarFuelDelete';
import { CarFuelEdit } from './Components/CarFuelAdmin/CarFuelEdit';
import { CarServiceIndex } from './Components/CarServiceAdmin/CarServiceIndex';
import { CarServiceDelete } from './Components/CarServiceAdmin/CarServiceDelete';
import { CarServiceCreate } from './Components/CarServiceAdmin/CarServiceCreate';
import { CarServiceEdit } from './Components/CarServiceAdmin/CarServiceEdit';
import CarFuelDataTable from './Components/CarFuelAdmin/CarFuelDataTable';
import { CarServiceDataTable } from './Components/CarServiceAdmin/CarServiceDataTable';
import BrandCarDataTable from './Components/BrandCarAdmin/BrandCarDataTable';
import CarBrandDataTable from './Components/CarBrandAdmin/CarBrandDataTable';
import { Footer } from './Components/Footer/Footer';
import { Gpay } from './Components/Payment/Gpay';
import { Razorpays } from './Components/RazorPay/Razorpays';
import { AccessDenied } from './Components/AccessDenied/AccessDenied';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Thankyou } from './Components/Thanyou/Thankyou';

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log(role);
    if (role) {
      setRole(role);
    }
  }, []);


  return (
    <div>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
          <Route path='*' element={<AccessDenied />} />
          <Route exact path='/Home' element={<Home />} />


          {role == 'Customer' ? (
            <>
              <Route exact path='/CarService/:carid' element={<CarService />} />
              <Route exact path='/CarBrand' element={<CarBrand />} />
              <Route exact path='/BrandCar/:brandid' element={<BrandCar />} />
              <Route exact path='/CarFuel' element={<CarFuel />} />
              <Route exact path='/CarDetails' element={<CarDetails />} />
              <Route path='*' element={<AccessDenied />} />
              <Route path='/Thankyou' element={<Thankyou />} />
              <Route exact path='/Razorpays' element={<Razorpays />} />
              <Route exact path='/Gpay' element={<Gpay />} />
            </>
          ) : null}




          {role == 'Admin' ? (
            <>
              <Route exact path='/CarBrandCreate' element={<CarBrandCreate />} />
              <Route exact path='/CarBrandIndex' element={<CarBrandIndex />} />
              <Route exact path='/CarBrandEdit/:brandid' element={<CarBrandEdit />} />
              <Route exact path='/CarBrandDelete/:brandid' element={<CarBrandDelete />} />
              <Route exact path='/BrandCarCreate' element={<BrandCarCreate />} />
              <Route exact path='/BrandCarEdit/:carid' element={<BrandCarEdit />} />
              <Route exact path='/BrandCarDelete/:carid' element={<BrandCarDelete />} />
              <Route exact path='/BrandCarIndex' element={<BrandCarIndex />} />
              <Route exact path='/CarFuelDelete/:fuelid' element={<CarFuelDelete />} />
              <Route exact path='/CarFuelCreate' element={<CarFuelCreate />} />
              <Route exact path='/CarFuelEdit/:fuelid' element={<CarFuelEdit />} />
              <Route exact path='/CarFuelIndex' element={<CarFuelIndex />} />
              <Route exact path='/CarServiceIndex' element={<CarServiceIndex />} />
              <Route exact path='/CarServiceCreate' element={<CarServiceCreate />} />
              <Route exact path='/CarServiceEdit/:serviceid' element={<CarServiceEdit />} />
              <Route exact path='/CarServiceDelete/:serviceid' element={<CarServiceDelete />} />
              <Route exact path='/CarFuelDataTable' element={<CarFuelDataTable />} />
              <Route exact path='/CarServiceDataTable' element={<CarServiceDataTable />} />
              <Route exact path='/BrandCarDataTable' element={<BrandCarDataTable />} />
              <Route exact path='/CarBrandDataTable' element={<CarBrandDataTable />} />
              <Route exact path='/Razorpays' element={<Razorpays />} />
              <Route path='*' element={<AccessDenied />} />
            </>
          ) : null}

        </Routes>
        {/* <Footer/> */}
        <ToastContainer />
      </UserContextProvider>
    </div>
  );
}

export default App;

