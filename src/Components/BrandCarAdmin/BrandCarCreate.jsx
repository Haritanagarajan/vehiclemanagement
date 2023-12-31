import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';

const BrandCarCreate = () => {
    const [carName, setcarName] = useState();
    const [addAmount, setaddAmount] = useState();
    const [brandid, setbrandid] = useState();
    const [imageFile, setImageFile] = useState(null);
    const [brandOptions, setBrandOptions] = useState([]);
    const { userDetails, setuserDetails } = useContext(UserContext);
    const [carNameError, setCarNameError] = useState('');
    const [addAmountError, setAddAmountError] = useState('');
    const [brandIdError, setBrandIdError] = useState('');
    const [imageFileError, setImageFileError] = useState('');
    const Navigate = useNavigate();
    const validateForm = () => {
        let isValid = true;
        if (!carName) {
            setCarNameError('Please enter carName');
            isValid = false;
        } else {
            setCarNameError('');
        }
        if (!addAmount) {
            setAddAmountError('Please enter addAmount');
            isValid = false;
        } else {
            setAddAmountError('');
        }
        if (!brandid) {
            setBrandIdError('Please choose a Brand');
            isValid = false;
        } else {
            setBrandIdError('');
        }
        if (!imageFile) {
            setImageFileError('Please upload an image');
            isValid = false;
        } else {
            setImageFileError('');
        }
        return isValid;
    };
    const fileupload = (e) => {
        setImageFile(e.target.files[0]);
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (!brandid) {
                setBrandIdError('Please choose a Brand');
                return;
            }
            const formData = new FormData();
            formData.append('brandid', brandid);
            formData.append('carName', carName);
            formData.append('addAmount', addAmount);
            formData.append('imageFile', imageFile);
            try {
                const response = await axios.post(`https://localhost:7229/api/BrandCars/PostBrandCar`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${userDetails.tokenResult}`,

                    },
                });
                Navigate('/BrandCarDataTable')
                toast.success('successfully created!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-success',
                });
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`, {
                    headers: {
                        'Authorization': `Bearer ${userDetails.tokenResult}`,
                    }
                });
                const result = response.data;
                setBrandOptions(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container">
                <div className='row justify-content-center'>
                    <div className="col-6">
                        <h2 id='register' className="mt-3 pt-5 pb-3">Brand Car Upload</h2>
                        <form className="form-horizontal">
                            <div className="form-group registerform">
                                <label className="control-label col-sm-2" for="carName">CarName:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="carName" placeholder="Enter carName" name="carName" value={carName} onChange={(e) => setcarName(e.target.value)} />
                                    <span className="text-danger">{carNameError}</span>
                                </div>
                            </div>
                            {brandOptions && brandOptions.length > 0 && (
                                <div className="form-group registerform">
                                    <label className="control-label col-sm-2" for="carName">Choose Brand:</label>
                                    <div className="col-sm-10">
                                        <select
                                            className="form-control text-black"
                                            id="brandid"
                                            name="brandid"
                                            value={brandid}
                                            onChange={(e) => setbrandid(e.target.value)}
                                        >
                                            {console.log(brandid)}
                                            <option value="" disabled>Select a Brand ID</option>
                                            {brandOptions.map((option) => (
                                                <option key={option.brandid} value={option.brandid} className='text-black'>
                                                    {option.brandid}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <span className="text-danger">{brandIdError}</span>
                                </div>
                            )}
                            <div className="form-group registerform">
                                <label className="control-label col-sm-2" for="addAmount">addAmount:</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="carName" placeholder="Enter addAmount" name="addAmount" value={addAmount} onChange={(e) => setaddAmount(e.target.value)} />
                                </div>
                                <span className="text-danger">{addAmountError}</span>
                            </div>
                            <div className="form-group registerform" >
                                <label className="control-label col-sm-2" for="imageSrc">File Upload:</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="imageSrc" accept="image/*" placeholder="Upload yor brand image " name="imageSrc" onChange={fileupload} />
                                </div>
                                <span className="text-danger">{imageFileError}</span>
                            </div>
                            <div className="form-group mt-3 registerform">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" className="btn submit" onClick={handleUpload}>Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
                        <p style={{ fontStyle: 'italic' }}>Upload images for Car Brand</p>
                    </div>
                </div >
                <ToastContainer />
            </div >
        </>
    )
}

export default BrandCarCreate




