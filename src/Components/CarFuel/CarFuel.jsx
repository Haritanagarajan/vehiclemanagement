
// https://localhost:7229/api/CarFuels/GetCarFuels

import React, { useContext, useEffect, useState } from 'react';
import '../Styles/CarFuel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';

const CarFuel = () => {
    const [CarFuel, setCarFuel] = useState([]);
    const { FuelDetails, setFuelDetails } = useContext(UserContext)


    const handleSaveDetails = (fuel) => {
        setFuelDetails(fuel);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarFuels/GetCarFuels`)
            const result = await response.data;
            const carfuelarray = Array.isArray(result) ? result : [result];
            setCarFuel(carfuelarray);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    useEffect(() => {
        fetchData();
    });


    return (
        <div className='container mb-3'>
            <h1 className='blogs text-center mt-5'>Pick your CarBrands</h1>
            <div className='row'>
                <p>hello</p>
                {CarFuel.map((fuel) => (
                    <Link to='/CarDetails' onClick={() => handleSaveDetails(fuel)}>
                        <div className="col-md-6" key={fuel.fuelid}>
                            <div className="card carfuelcard">
                                <div className='card-body  text-center '>
                                    {fuel.fuelid}
                                    <br />
                                    {fuel.fuelName}
                                    <img src={fuel.imageSrc} alt={fuel.fuelName} width='80px' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};




export default CarFuel;