import React, { useEffect, useState, useContext } from 'react';
import '../Styles/CarService.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';
const CarService = () => {
    const [carservice, setcarservice] = useState([]);
    const { carid } = useParams();
    const { ServiceDetails, setServiceDetails } = useContext(UserContext);
    const { userDetails, setuserDetails } = useContext(UserContext);
    const handleSaveDetails = (services) => {
        setServiceDetails(services);
    }
    console.log("ServiceDetails", ServiceDetails);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7229/api/CarServices/GetCarService/${carid}`, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = await response.data;
            const carservicearray = Array.isArray(result) ? result : [result];
            setcarservice(carservicearray);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='container-fluid carservice'>
            <h1 className='blogs text-center pick text-white '>Pick your CarServices</h1>
            <div className='row' >
                {carservice.map((services) => (
                    <div className="col-md-6" key={services.id}>
                        <Link to='/CarFuel' style={{ textDecoration: 'none' }} onClick={() => handleSaveDetails(services)}>
                            <div className="card carservicescard">
                                <div className='card-title carservicestitle'>
                                    <p className='picks text-center'>{services.serviceName}</p>
                                </div>
                                <div className='card-body  text-center '>
                                    <p>Warranty : {services.warranty}</p>
                                    <p>SubServices : {services.subservice1}</p>
                                    <p>SubServices : {services.subservice2}</p>
                                    <p>SubServices : {services.subservice3}</p>
                                    <p>SubServices : {services.subservice4}</p>
                                    <p>TimeTaken to complete :  {services.timeTaken}</p>
                                    <p>Service cost : {services.servicecost}</p>
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