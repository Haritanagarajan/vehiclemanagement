
// https://localhost:7229/api/CarFuels/GetCarFuels

import React, { useContext, useEffect, useState } from 'react';
import '../Styles/CarFuel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
const CarFuel = () => {
    const [CarFuel, setCarFuel] = useState([]);
    const { FuelDetails, setFuelDetails } = useContext(UserContext)
    const { userDetails, setuserDetails } = useContext(UserContext);
    const handleSaveDetails = (fuel) => {
        setFuelDetails(fuel);
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarFuels/GetCarFuels`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            const carfuelarray = Array.isArray(result) ? result : [result];
            setCarFuel(carfuelarray);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    useEffect(() => {
        fetchData();
    });
    return (
        <div className='container-fluid carfuel d-flex justify-content-center'>
            <h1 className='blogs text-center pick text-white'>Pick your CarBrands</h1>
            <div className='row '>
                {CarFuel.map((fuel) => (
                    <Link to='/CarDetails' onClick={() => handleSaveDetails(fuel)}>
                        <div className="col-6 d-flex justify-content-center" key={fuel.fuelid}>
                            <div className='card-body  text-center '>
                                <p className='fuelname mt-5 pt-5'>{fuel.fuelName}</p>
                                <img src={fuel.imageSrc} alt={fuel.fuelName} width='200px' />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CarFuel;