import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
const CarBrandIndex = () => {
    const [carBrands, setCarBrands] = useState([]);
    const { userDetails, setuserDetails } = useContext(UserContext);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            setCarBrands(result);
        } catch (error) {
            console.log(error);
            toast.error('Error occurred while fetching !', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'error-success',
            });
            throw error;
        }
    };
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
            <ToastContainer />

        </div>
    );
};

export default CarBrandIndex;
