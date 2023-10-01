
// https://localhost:7229/api/CarBrands1

import React, { useEffect, useState } from 'react';
import '../Styles/CarBrands.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarBrand = () => {
    const [CarBrand, setCarBrand] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`)
            const result = await response.data;
            setCarBrand(result);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='container mb-3'>
            <h1 className='blogs text-center mt-5'>Pick your CarBrands</h1>
            <div className='row' >
                {CarBrand.map((brands) => (
                    <div className="col-md-6" key={brands.brandid}>
                        <Link to={`/BrandCar/${brands.brandid}`} style={{ textDecoration: 'none' }}>
                            {console.log(brands.brandid)}
                            <div className="card carbrandcard">
                                <div className='card-body  text-center '>
                                    {brands.brandName}
                                    <br />
                                    {brands.brandid}
                                    <img
                                        src={brands.branndImage}
                                        alt={brands.brandName}
                                        onError={(e) => {
                                            console.log('Error loading image:', e);
                                        }}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </Link >
                    </div>
                ))}
            </div>
        </div>
    );
};




export default CarBrand;