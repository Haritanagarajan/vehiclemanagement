import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
const CarBrandCreate = () => {
    const [brandName, setbrandName] = useState();
    const [imageSrc, setimageSrc] = useState();
    const [imageFile, setImageFile] = useState(null);
    const { userDetails, setuserDetails } = useContext(UserContext);
    const [brandNameError, setBrandNameError] = useState('');
    const [imageFileError, setImageFileError] = useState('');
    const Navigate = useNavigate();
    const fileupload = (e) => {
        setImageFile(e.target.files[0]);
    };
    const validateForm = () => {
        let isValid = true;
        if (!brandName) {
            setBrandNameError('Please enter brandName');
            isValid = false;
        } else {
            setBrandNameError('');
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
            formData.append('brandName', brandName);
            formData.append('imageFile', imageFile);
            try {
                const response = await axios.post("https://localhost:7229/api/CarBrands1/PostCarBrand", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${userDetails.tokenResult}`,
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
                Navigate('/CarBrandDataTable')
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
            <div className="container">
                <div className='row justify-content-center'>
                    <div className="col-6">
                        <h2 id='register' className="mt-3 pt-5 pb-3">Car Brand Upload</h2>
                        <form className="form-horizontal">
                            <div className="form-group registerform">
                                <label className="control-label col-sm-2" for="Username">BrandName:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="Username" placeholder="Enter brandName" name="brandName" value={brandName} onChange={(e) => setbrandName(e.target.value)} required />
                                </div>
                                <span className="text-danger">{brandNameError}</span>
                            </div>
                            <div className="form-group registerform" >
                                <label className="control-label col-sm-2" for="imageSrc">File Upload:</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="imageSrc" accept="image/*" placeholder="Upload yor brand image " name="imageSrc" onChange={fileupload} required />
                                </div>
                                <span className="text-danger">{imageFileError}</span>
                            </div>
                            <div clclassNameass="form-group mt-3 registerform">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" className="btn submit" onClick={handleUpload}>Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
                        <p style={{ fontStyle: 'italic' }}>Upload images for Car Brand</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBrandCreate




