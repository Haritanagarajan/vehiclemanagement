
// https://localhost:7229/api/BrandCars/GetBrandCars

import React, { useEffect, useState } from 'react';
import '../Styles/BrandCar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CarBrand = () => {
    const [BrandCar, setBrandCar] = useState([]);
    const { brandid } = useParams();
    console.log(brandid)
    const [CarBrand, setCarBrand] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCar/${brandid}`)
            const result = await response.data;
            setBrandCar(result);
            console.log()
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
                {/* {BrandCar.map((Cars) => (
                    <div className="col-md-6" key={Cars.carid}> */}
                {/* {Cars.brandid === CarBrand.brandid && ( */}
                {/* <div className="card brandcarcard">
                            <div className='card-body  text-center '>
                                {Cars.carName}
                                <br />
                                {Cars.brandid}
                            </div>
                        </div> */}
                {/* )} */}
            </div>
            {/* ))} */}
        </div>
        // </div>
    );
};




export default CarBrand;