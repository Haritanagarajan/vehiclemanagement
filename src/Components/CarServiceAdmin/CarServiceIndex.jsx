import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';

export const CarServiceIndex = () => {
    const [Carservice, setCarservice] = useState([]);
    const { userDetails, setuserDetails } = useContext(UserContext);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(`https://localhost:7229/api/CarServices/GetCarServices`);
    //         const result = await response.data;
    //         setCarservice(result);
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarServices/GetCarServices`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            setCarservice(result);
        } catch (error) {
            console.log(error);
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
                        <th>Serviceid</th>
                        <th>Carid</th>
                        <th>ServiceName</th>
                        <th>Warranty</th>
                        <th>Subservice1</th>
                        <th>Subservice2</th>
                        <th>Subservice3</th>
                        <th>Subservice4</th>
                        <th>TimeTaken</th>
                        <th>Servicecost</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Carservice.map((service) => (
                        <tr key={service.serviceid}>
                            <td>{service.serviceid}</td>
                            <td>{service.carid}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.warranty}</td>
                            <td>{service.subservice1}</td>
                            <td>{service.subservice2}</td>
                            <td>{service.subservice3}</td>
                            <td>{service.subservice4}</td>
                            <td>{service.timeTaken}</td>
                            <td>{service.servicecost}</td>
                            <td>
                                <Link to={`/CarServiceEdit/${service.serviceid}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link to={`/CarServiceDelete/${service.serviceid}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='text-center'>
                <Link to="/CarServiceCreate" className='btn btn-primary'>Create</Link>
            </div>
            <ToastContainer />

        </div>
    );
};

