import React, { useEffect, useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';

const BrandCarIndex = () => {
    const [BrandCar, setBrandCar] = useState([]);
    const { userDetails, setuserDetails } = useContext(UserContext);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCars`);
    //         const result = await response.data;
    //         setBrandCar(result);
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCars`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            setBrandCar(result);
        } catch (error) {
            console.error(error);
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
                        <th>Car Name</th>
                        <th>Add Amount</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {BrandCar.map((cars) => (
                        <tr key={cars.carid}>
                            <td>{cars.brandid}</td>
                            <td>{cars.carName}</td>
                            <td>{cars.addAmount}</td>
                            <td>
                                <img
                                    src={cars.imageSrc}
                                    alt={cars.carName}
                                    width='100px'
                                    onError={(e) => {
                                        console.log('Error loading image:', e);
                                    }}
                                    className="img-fluid"
                                />
                            </td>
                            <td>
                                <Link to={`/BrandCarEdit/${cars.carid}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link to={`/BrandCarDelete/${cars.carid}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='text-center'>
                <Link to="/BrandCarCreate" className='btn btn-primary'>Create</Link>
            </div>
        </div>
    );
};

export default BrandCarIndex;
