import React from 'react'
import { UserContext } from '../Context/userContext';
import { useState, useEffect, useContext } from 'react';


export const CarDetails = () => {
  const { FuelDetails, setFuelDetails } = useContext(UserContext)
  const { CarDetails, setCarDetails } = useContext(UserContext);
  const { BrandDetails, setBrandDetails } = useContext(UserContext);
  const { ServiceDetails, setServiceDetails } = useContext(UserContext);
  const { userDetails, setuserDetails } = useContext(UserContext);


  return (
    <div className='container mb-3'>
      <h1 className='blogs text-center mt-5'>Pick your CarBrands</h1>
      <div className='row'>
        <div className="col-md-6">
          <div className="card">
            <div className='card-body  text-center '>
              <p>serviceid:{ServiceDetails.serviceid}</p>
              <p>carid:{ServiceDetails.carid}</p>
              <p>serviceName:{ServiceDetails.serviceName}</p>
              <p>warranty:{ServiceDetails.warranty}</p>
              <p>subservice1:{ServiceDetails.subservice1}</p>
              <p>subservice2:{ServiceDetails.subservice2}</p>
              <p>subservice3:{ServiceDetails.subservice3}</p>
              <p>subservice4:{ServiceDetails.subservice4}</p>
              <p>timeTaken:{ServiceDetails.timeTaken}</p>
              <p>servicecost:{ServiceDetails.servicecost}</p>
            </div>


            <div className='card-body  text-center '>
              <p>brandid:{CarDetails.brandid}</p>
              <p>brandName:{CarDetails.brandName}</p>
              <img src={CarDetails.imageSrc} />
            </div>

            <div className='card-body  text-center '>
              <p>brandid:{BrandDetails.brandid}</p>
              <p>brandName:{BrandDetails.brandName}</p>
              <img src={BrandDetails.imageSrc} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};



