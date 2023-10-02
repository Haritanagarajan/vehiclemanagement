import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarFuelIndex = () => {
    const [carFuel, setcarFuel] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarFuels/GetCarFuels`);
            const result = await response.data;
            setcarFuel(result);
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
                        <th>Fuel ID</th>
                        <th>Fuel Name</th>
                        <th>Fuel Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {carFuel.map((fuel) => (
                        <tr key={fuel.fuelid}>
                            <td>{fuel.fuelid}</td>
                            <td>{fuel.fuelName}</td>
                            <td>
                                <img
                                    src={fuel.imageSrc}
                                    alt={fuel.fuelName}
                                    width='90px'
                                    onError={(e) => {
                                        console.log('Error loading image:', e);
                                    }}
                                    className="img-fluid"
                                />
                            </td>
                            <td>
                                <Link to={`/CarFuelEdit/${fuel.fuelid}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link to={`/CarFuelDelete/${fuel.fuelid}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='text-center'>
                <Link to="/CarFuelCreate" className='btn btn-primary'>Create</Link>
            </div>
        </div>
    );
};

export default CarFuelIndex;
