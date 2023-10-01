
// https://localhost:7229/api/CarFuels/GetCarFuels

import React, { useEffect, useState } from 'react';
import '../Styles/CarFuel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarFuel = () => {
    const [CarFuel, setCarFuel] = useState([]);



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
                     <Link to='/CarDetails'>
                        <div className="col-md-6" key={fuel.fuelid}>
                            <div className="card carfuelcard">
                                <div className='card-body  text-center '>
                                    {fuel.fuelid}
                                    <br />
                                    {fuel.fuelName}
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