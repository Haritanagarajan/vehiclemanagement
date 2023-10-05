import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';


//carid = no
//carname yes ..
//imagefile yes ..
//brandid yes
//addamount yes ..

const BrandCarEdit = () => {
    const [carName, setcarName] = useState();
    const [addAmount, setaddAmount] = useState();
    const [brandid, setbrandid] = useState();
    const [imageFile, setImageFile] = useState(null);
    const [brandOptions, setBrandOptions] = useState([]);
    const { carid } = useParams();
    const { userDetails, setuserDetails } = useContext(UserContext);


    const fileupload = (e) => {
        setImageFile(e.target.files[0]);
    };


    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('carid', carid);
        formData.append('brandid', brandid);
        formData.append('carName', carName);
        formData.append('addAmount', addAmount);
        formData.append('imageFile', imageFile);

        try {
            const response = await axios.put(`https://localhost:7229/api/BrandCars/PutBrandCar/${carid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
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
                const response = await axios.get(`https://localhost:7229/api/CarBrands1/GetCarBrands`);
                const result = response.data;
                if (result) {
                    toast.success('Successfully Edited !', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        className: 'error-success',
                    });
                }
                setBrandOptions(result);
            } catch (error) {
                console.error(error);
                toast.error('Error occurred while editing !', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-success',
                  });
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <div class="container">
                <div className='row justify-content-center'>
                    <div class="col-6">
                        <h2 id='register' class="mt-3 pt-5 pb-3">Brand Car Upload</h2>
                        <form class="form-horizontal">

                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="carName">CarName:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="carName" placeholder="Enter carName" name="carName" value={carName} onChange={(e) => setcarName(e.target.value)} required />
                                </div>
                            </div>

                            {brandOptions && brandOptions.length > 0 && (
                                <div class="form-group registerform">
                                    <label class="control-label col-sm-2" for="carName">Choose Brand:</label>
                                    <div className="col-sm-10">
                                        <select
                                            className="form-control text-black"
                                            id="brandid"
                                            name="brandid"
                                            value={brandid}
                                            onChange={(e) => setbrandid(e.target.value)}
                                            required
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
                                </div>
                            )}

                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="addAmount">addAmount:</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="carName" placeholder="Enter addAmount" name="addAmount" value={addAmount} onChange={(e) => setaddAmount(e.target.value)} required />
                                </div>
                            </div>


                            <div class="form-group registerform" >
                                <label class="control-label col-sm-2" for="imageFile">File Upload:</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="imageFile" accept="image/*" placeholder="Upload yor brand image " name="imageFile" onChange={fileupload} required />
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
                        <p style={{ fontStyle: 'italic' }}>Upload images for Car Brand</p>
                    </div>
                </div >
                <ToastContainer/>

            </div >
        </>
    )
}

export default BrandCarEdit




