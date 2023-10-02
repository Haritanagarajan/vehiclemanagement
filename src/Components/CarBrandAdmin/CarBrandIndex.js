import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarBrandIndex = () => {
    const [carBrands, setCarBrands] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`);
            const result = await response.data;
            setCarBrands(result);
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
            <h1 className='blogs text-center mt-5'>Car Brands</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Brand ID</th>
                        <th>Brand Name</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {carBrands.map((brand) => (
                        <tr key={brand.brandid}>
                            <td>{brand.brandid}</td>
                            <td>{brand.brandName}</td>
                            <td>
                                <img
                                    src={brand.imageSrc}
                                    alt={brand.brandName}
                                    width='100px'
                                    onError={(e) => {
                                        console.log('Error loading image:', e);
                                    }}
                                    className="img-fluid"
                                />
                            </td>
                            <td>
                                <Link to={`/CarBrandEdit/${brand.brandid}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link to={`/CarBrandDelete/${brand.brandid}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='text-center'>
                <Link to="/CarBrandCreate" className='btn btn-primary'>Create</Link>
            </div>
        </div>
    );
};

export default CarBrandIndex;
