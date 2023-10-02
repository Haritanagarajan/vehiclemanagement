import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export const CarServiceEdit = () => {
    const [carid, setcarid] = useState();
    const [serviceName, setserviceName] = useState();
    const [warranty, setwarranty] = useState();
    const [subservice1, setsubservice1] = useState();
    const [subservice2, setsubservice2] = useState();
    const [subservice3, setsubservice3] = useState();
    const [subservice4, setsubservice4] = useState();
    const [timeTaken, settimeTaken] = useState();
    const [servicecost, setservicecost] = useState();
    const [CarOptions, setCarOptions] = useState();
    const { serviceid } = useParams();




    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('carid', carid);
        formData.append('serviceName', serviceName);
        formData.append('warranty', warranty);
        formData.append('subservice1', subservice1);
        formData.append('subservice2', subservice2);
        formData.append('subservice3', subservice3);
        formData.append('subservice4', subservice4);
        formData.append('timeTaken', timeTaken);
        formData.append('servicecost', servicecost);
        formData.append('serviceid', serviceid);

        try {
            const response = await axios.put(`https://localhost:7229/api/CarServices/PutCarService/${serviceid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const result = await response.data;
            if (result.Status === 200) {
                toast.success("File uploaded");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7229/api/BrandCars/GetBrandCars`);
                const result = response.data;
                setCarOptions(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            <div class="container">
                <div className='row justify-content-center'>
                    <div class="col-6">
                        <h2 id='register' class="mt-3 pt-5 pb-3">Car Service Upload</h2>
                        <form class="form-horizontal">




                            {CarOptions && CarOptions.length > 0 && (
                                <div class="form-group registerform">
                                    <label class="control-label col-sm-2" for="carName">Choose Car Id:</label>
                                    <div className="col-sm-10">
                                        <select
                                            className="form-control text-black"
                                            id="carid"
                                            name="carid"
                                            value={carid}
                                            onChange={(e) => setcarid(e.target.value)}
                                            required
                                        >
                                            {console.log(carid)}
                                            <option value="" disabled>Select a Car ID</option>
                                            {CarOptions.map((option) => (
                                                <option key={option.carid} value={option.carid} className='text-black'>
                                                    {option.carid}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}




                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="serviceName">serviceName:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="serviceName" placeholder="Enter service name" name="serviceName" value={serviceName} onChange={(e) => setserviceName(e.target.value)} required />
                                </div>
                            </div>



                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="warranty">warranty:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="warranty" placeholder="Enter warranty" name="warranty" value={warranty} onChange={(e) => setwarranty(e.target.value)} required />
                                </div>
                            </div>


                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="subservice1">subservice1:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="subservice1" placeholder="Enter subservice1" name="subservice1" value={subservice1} onChange={(e) => setsubservice1(e.target.value)} required />
                                </div>
                            </div>


                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="subservice2">subservice2:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="subservice2" placeholder="Enter subservice2" name="subservice2" value={subservice2} onChange={(e) => setsubservice2(e.target.value)} required />
                                </div>
                            </div>





                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="subservice3">subservice3:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="subservice3" placeholder="Enter subservice3" name="subservice3" value={subservice3} onChange={(e) => setsubservice3(e.target.value)} required />
                                </div>
                            </div>



                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="subservice4">subservice4:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="subservice4" placeholder="Enter subservice4" name="subservice4" value={subservice4} onChange={(e) => setsubservice4(e.target.value)} required />
                                </div>
                            </div>




                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="timeTaken">timeTaken:</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="timeTaken" placeholder="Enter timeTaken" name="timeTaken" value={timeTaken} onChange={(e) => settimeTaken(e.target.value)} required />
                                </div>
                            </div>

                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="servicecost">servicecost:</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="servicecost" placeholder="Enter servicecost" name="servicecost" value={servicecost} onChange={(e) => setservicecost(e.target.value)} required />
                                </div>
                            </div>


                            <div class="form-group mt-3 registerform">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="button" class="btn submit" onClick={handleUpload}>Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
                        <p style={{ fontStyle: 'italic' }}>Upload services for Car Brand</p>
                    </div>
                </div>
            </div>
        </>
    )
}






