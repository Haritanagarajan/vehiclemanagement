import React, { useEffect, useState } from 'react';
import '../Styles/CarService.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarService = () => {
    const [carservice, setcarservice] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7229/api/CarServices")
            const result = await response.data;
            setcarservice(result);
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
            <h1 className='blogs text-center '>CarServices</h1>
            <div className='row' >
                {carservice.map((services) => (
                    <div className="col-md-6" key={services.id}>
                        <Link to={`/Notesdisplay/${services.id}`} style={{ textDecoration: 'none' }}>
                            <div className="cards">
                                <div className='card-title'>
                                    {services.serviceName}
                                </div>
                                <div className='card-body  text-center '>
                                    {services.warranty}
                                    <br />
                                    {services.subservice1}
                                    <br />
                                    {services.subservice2}
                                    <br />
                                    {services.subservice3}
                                    <br />
                                    {services.subservice3}
                                    <br />
                                    {services.timeTaken}
                                    <br />
                                    {services.servicecost}
                                </div>
                            </div>
                        </Link >

                    </div>
                ))}
            </div>
        </div>
    );
};




export default CarService;