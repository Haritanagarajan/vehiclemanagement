
import React from 'react';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Gpay from '../Payment/Gpay';

export const CarDetails = () => {
  const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName, uEmail } = useContext(
    UserContext
  );

  const navigate = useNavigate();

  const handlepayment = () => {
    navigate('/Gpay');
  }


  return (
    <>
      <div className='container-fluid cardetails' >
        <div className='container mt-5'>
          <div className='card'>
            <div className='row'>
              <div className='col-6'>
                <img src={BrandDetails.imageSrc} alt='Car Image' width='500px' height='500px' />
              </div>
              <div className='col-6'>
                <h2 className='card-title'>{ServiceDetails.serviceName}</h2>
                <p>Subservice 1: {ServiceDetails.subservice1}</p>
                <p>Subservice 2: {ServiceDetails.subservice2}</p>
                <p>Subservice 3: {ServiceDetails.subservice3}</p>
                <p>Subservice 4: {ServiceDetails.subservice4}</p>
                <p>
                  <i className='fas fa-clock'></i> Time Taken:{' '}
                  {ServiceDetails.timeTaken}
                </p>
                <p>Service Cost: {ServiceDetails.servicecost}</p>
                <h3>{CarDetails.brandName}</h3>
                <p>Car Name: {BrandDetails.carName}</p>
                {/* <img src={CarDetails.imageSrc} alt='Car Image' width='100px'/> */}
                <h3>Fuel Details</h3>
                <p>Fuel Name: {FuelDetails.fuelName}</p>
                <button className='btn bg-black text-white' onClick={handlepayment}>PayNow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

