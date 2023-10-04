
import React from 'react';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const CarDetails = () => {
  const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName, uEmail } = useContext(
    UserContext
  );




  const navigate = useNavigate();

  const handlepayment = () => {
    navigate('/Gpay');
  }


  return (
    <div className='container' >
      <h1 className='text-center mt-5'>Service Details</h1>
      <div className='row'>
        <div className='col mt-5 d-flex justify-content-center mb-5 '>
          <div className='card'>
            <div className='card-body text-center'>
              {/* Service Details */}
              <h2 className='card-title'>{ServiceDetails.serviceName}</h2>
              <div className='service-details'>
                <p>Subservice 1: {ServiceDetails.subservice1}</p>
                <p>Subservice 2: {ServiceDetails.subservice2}</p>
                <p>Subservice 3: {ServiceDetails.subservice3}</p>
                <p>Subservice 4: {ServiceDetails.subservice4}</p>
              </div>
              <p>
                <i className='fas fa-clock'></i> Time Taken:{' '}
                {ServiceDetails.timeTaken}
              </p>
              <p>Service Cost: {ServiceDetails.servicecost}</p>
            </div>

            {/* Car and Brand Details */}
            <div className='card-body text-center'>
              <div className='car-details'>
                <h3>{CarDetails.brandName}</h3>
                {/* <p>Car ID: {CarDetails.brandid}</p> */}
                <p>Car Name: {BrandDetails.carName}</p>
                <img src={CarDetails.imageSrc} alt='Car Image' />

                {/* <p>Add Amount: {BrandDetails.addAmount}</p> */}
              </div>
              <img src={BrandDetails.imageSrc} alt='Car Image' />
            </div>

            {/* Fuel Details */}
            <div className='card-body text-center'>
              <h3>Fuel Details</h3>
              {/* <p>Fuel ID: {FuelDetails.fuelid}</p> */}
              <p>Fuel Name: {FuelDetails.fuelName}</p>
              {/* <img src={FuelDetails.imageSrc} alt='Fuel Image' /> */}
              <button className='btn btn-primary' onClick={handlepayment}>PayNow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

