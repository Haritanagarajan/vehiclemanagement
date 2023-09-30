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
        <div className='container mb-3 mt-5'>
            <h1 className='blogs text-center '>Pick your CarServices</h1>
            <div className='row' >
                {carservice.map((services) => (
                    <div className="col-md-6" key={services.id}>
                        {/* <Link to={`/Notesdisplay/${services.id}`} style={{ textDecoration: 'none' }}> */}
                        <div className="card carservicescard">
                            <div className='card-title carservicestitle'>
                                {services.serviceName}
                            </div>
                            <div className='card-body  text-center '>
                                <p>{services.warranty}</p>
                                <p>{services.subservice1}</p>
                                <p>{services.subservice2}</p>
                                <p>{services.subservice3}</p>
                                <p>{services.subservice3}</p>
                                <p>{services.timeTaken}</p>
                                <p>{services.servicecost}</p>
                            </div>
                        </div>
                        {/* </Link > */}
                    </div>
                ))}
            </div>
        </div>
    );
};




export default CarService;