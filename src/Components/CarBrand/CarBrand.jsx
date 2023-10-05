
// https://localhost:7229/api/CarBrands1

import React, { useEffect, useState, useContext } from 'react';
import '../Styles/CarBrands.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';


const CarBrand = () => {
    const [CarBrand, setCarBrand] = useState([]);
    const { CarDetails, setCarDetails } = useContext(UserContext);
    const { userDetails, setuserDetails } = useContext(UserContext);


    const handleSaveDetails = (brand) => {
        setCarDetails(brand);
    }

    console.log("CarDetails", CarDetails);


    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`)
    //         const result = await response.data;
    //         setCarBrand(result);
    //         { console.log(result.branndImage) }

    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            setCarBrand(result);
            console.log(result.branndImage);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='container-fluid carbrand'>
            <h1 className='text-center pick text-white'>Pick your CarBrands</h1>
            <div className='row' >
                {CarBrand.map((brands) => (
                    <div className="col-md-6" key={brands.brandid}>
                        <Link to={`/BrandCar/${brands.brandid}`} style={{ textDecoration: 'none' }} onClick={() => handleSaveDetails(brands)}>
                            {console.log(brands.brandid)}
                            <div className="card carbrandcard">
                                <div className='card-body  text-center '>
                                    {/* {brands.brandName}
                                    <br /> */}
                                    {/* {brands.brandid} */}
                                    <img
                                        src={brands.imageSrc}
                                        width='200px'
                                        className='img-fluid imagesrc'
                                        alt={brands.brandName}
                                        onError={(e) => {
                                            console.log('Error loading image:', e);
                                        }}
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