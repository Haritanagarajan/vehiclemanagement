
// https://localhost:7229/api/BrandCars/GetBrandCars

import React, { useEffect, useState, useContext } from 'react'
import '../Styles/BrandCar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const BrandCar = () => {
    const [BrandCar, setBrandCar] = useState([]);
    const { brandid } = useParams();
    const { BrandDetails, setBrandDetails } = useContext(UserContext);
    const { userDetails, setuserDetails } = useContext(UserContext);


    const handleSaveDetails = (cars) => {
        setBrandDetails(cars);
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCar/${brandid}`)
    //         const result = await response.data;
    //         const brandCarArray = Array.isArray(result) ? result : [result];
    //         setBrandCar(brandCarArray);
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCar/${brandid}`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
    
            const result = await response.data;
            const brandCarArray = Array.isArray(result) ? result : [result];
            setBrandCar(brandCarArray);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [brandid]);

    console.log("BrandDetails", BrandDetails);

    return (
        <div className='container-fluid brandcar d-flex justify-content-center'>
            <div className='col-6'>
                <h1 className='blogs text-center pick text-white '>Pick your CarBrands</h1>
                <div className='row'>
                    {BrandCar.map((cars) => (
                        <Link to={`/CarService/${cars.carid}`} style={{ textDecoration: 'none' }} onClick={() => handleSaveDetails(cars)}>
                            <div className="" key={cars.carid}>
                                {/* <div className="card brandcarcard text-center justify-content-center "> */}
                                <p className='carname d-flex justify-content-center'>{cars.carName}</p>
                                <div className=''>
                                    <img src={cars.imageSrc} alt={cars.carName} width='300px' height='230px' />
                                </div>
                            </div>
                            {/* </div> */}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};




export default BrandCar;