
// https://localhost:7229/api/BrandCars/GetBrandCars

import React, { useEffect, useState } from 'react'
import './Styles/BrandCar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BrandCar = () => {
    const [BrandCar, setBrandCar] = useState([]);
    const { brandid } = useParams();
    console.log(brandid)



    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCar/${brandid}`)
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


    return (
        <div className='container mb-3'>
            <h1 className='blogs text-center mt-5'>Pick your CarBrands</h1>
            <div className='row'>
                <p>hello</p>
                {BrandCar.map((cars) => (
                    <Link to={`/CarService/${cars.carid}`} style={{ textDecoration: 'none' }}>
                        {/* <Link to='/CarFuel'> */}
                        <div className="col-md-6" key={cars.carid}>
                            <div className="card brandcarcard">
                                <div className='card-body  text-center '>
                                    {cars.carName}
                                    <br />
                                    <p>brand id :{cars.brandid}</p>
                                    <p>carid id :{cars.carid}</p>

                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};




export default BrandCar;