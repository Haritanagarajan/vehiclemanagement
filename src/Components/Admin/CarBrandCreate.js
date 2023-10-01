import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const CarBrandCreate = () => {
    const [brandName, setbrandName] = useState();
    const [imageSrc, setimageSrc] = useState();
    const [imageFile, setImageFile] = useState(null); 


    const fileupload = (e) => {
        setImageFile(e.target.files[0]); 
    };
    

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('brandName', brandName);
        formData.append('imageFile', imageFile); 
    
        try {
            const response = await axios.post("https://localhost:7229/api/CarBrands1/PostCarBrand", formData, {
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






    return (
        <>
            <div class="container">
                <div className='row justify-content-center'>
                    <div class="col-6">
                        <h2 id='register' class="mt-3 pt-5 pb-3">Car Brand Upload</h2>
                        <form class="form-horizontal">

                            <div class="form-group registerform">
                                <label class="control-label col-sm-2" for="Username">BrandName:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="Username" placeholder="Enter brandName" name="brandName" value={brandName} onChange={(e) => setbrandName(e.target.value)} required />
                                </div>
                            </div>



                            <div class="form-group registerform" >
                                <label class="control-label col-sm-2" for="imageSrc">File Upload:</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="imageSrc" accept="image/*"  placeholder="Upload yor brand image " name="imageSrc" onChange={fileupload} required />
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
                </div>
            </div>
        </>
    )
}

export default CarBrandCreate




