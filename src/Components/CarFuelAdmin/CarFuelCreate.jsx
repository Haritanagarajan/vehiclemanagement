import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
const CarFuelCreate = () => {
    const [fuelName, setfuelName] = useState();
    const [imageFile, setImageFile] = useState(null);
    const { userDetails, setuserDetails } = useContext(UserContext);
    const [fuelNameError, setFuelNameError] = useState('');
    const [imageFileError, setImageFileError] = useState('');
    const Navigate = useNavigate();
    const fileupload = (e) => {
        setImageFile(e.target.files[0]);
    };
    const validateForm = () => {
        let isValid = true;
        if (!fuelName) {
            setFuelNameError('Please enter fuelName');
            isValid = false;
        } else {
            setFuelNameError('');
        }
        if (!imageFile) {
            setImageFileError('Please upload an image');
            isValid = false;
        } else {
            setImageFileError('');
        }
        return isValid;
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData();
            formData.append('fuelName', fuelName);
            formData.append('imageFile', imageFile);
            try {
                const response = await axios.post("https://localhost:7229/api/CarFuels/PostCarFuel", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${userDetails.tokenResult}`,

                    },
                });
                toast.success('successfully created !', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-success',
                });
                Navigate('/CarFuelDataTable');
            } catch (error) {
                console.log(error);
                toast.error('Error occurred while creating !', {
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
        }
    };
    return (
        <>
            <div class="container">
                <div className='row justify-content-center'>
                    <div class="col-6">
                        <h2 id='register' class="mt-3 pt-5 pb-3">Car Brand Upload</h2>
                        <form class="form-horizontal">
                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="fuelName">fuelName:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="fuelName" placeholder="Enter fuelName" name="brandName" value={fuelName} onChange={(e) => setfuelName(e.target.value)} required />
                                </div>
                                <span className="text-danger">{fuelNameError}</span>
                            </div>
                            <div class="form-group registerform" >
                                <label class="control-label col-sm-2" for="imageSrc">File Upload:</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="imageSrc" accept="image/*" placeholder="Upload yor brand image " name="imageSrc" onChange={fileupload} required />
                                </div>
                                <span className="text-danger">{imageFileError}</span>
                            </div>
                            <div class="form-group mt-3 registerform">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="button" class="btn submit" onClick={handleUpload}>Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
                        <p style={{ fontStyle: 'italic' }}>Upload images for Car Brand</p>
                    </div>
                </div>
                <ToastContainer />

            </div>
        </>
    )
}

export default CarFuelCreate




