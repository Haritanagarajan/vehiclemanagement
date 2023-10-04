
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
    // <div className='container-fluid cardetails' >
    //   <h1 className='text-center mt-5'>Service Details</h1>
    //   <div className='row'>
    //     <div className='col mt-5 d-flex justify-content-center mb-5 '>
    //       <div className='card'>
    //         <div className='card-body text-center'>
    //           {/* Service Details */}
    //           <h2 className='card-title'>{ServiceDetails.serviceName}</h2>
    //           <img src={BrandDetails.imageSrc} alt='Car Image' width='400px' />
    //           <div className='service-details mt-5'>
    //             <p>Subservice 1: {ServiceDetails.subservice1}</p>
    //             <p>Subservice 2: {ServiceDetails.subservice2}</p>
    //             <p>Subservice 3: {ServiceDetails.subservice3}</p>
    //             <p>Subservice 4: {ServiceDetails.subservice4}</p>
    //           </div>
    //           <p>
    //             <i className='fas fa-clock'></i> Time Taken:{' '}
    //             {ServiceDetails.timeTaken}
    //           </p>
    //           <p>Service Cost: {ServiceDetails.servicecost}</p>
    //         </div>

    //         {/* Car and Brand Details */}
    //         <div className='card-body text-center'>
    //           <div className='car-details'>
    //             <h3>{CarDetails.brandName}</h3>
    //             {/* <p>Car ID: {CarDetails.brandid}</p> */}
    //             <p>Car Name: {BrandDetails.carName}</p>
    //             <img src={CarDetails.imageSrc} alt='Car Image' />

    //             {/* <p>Add Amount: {BrandDetails.addAmount}</p> */}
    //           </div>
    //         </div>

    //         {/* Fuel Details */}
    //         <div className='card-body text-center'>
    //           <h3>Fuel Details</h3>
    //           {/* <p>Fuel ID: {FuelDetails.fuelid}</p> */}
    //           <p>Fuel Name: {FuelDetails.fuelName}</p>
    //           {/* <img src={FuelDetails.imageSrc} alt='Fuel Image' /> */}
    //           <button className='btn btn-primary' onClick={handlepayment}>PayNow</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

