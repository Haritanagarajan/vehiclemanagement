import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../Context/userContext';
export const CarBrandDelete = () => {
    const { brandid } = useParams();
    const { userDetails, setuserDetails } = useContext(UserContext);
    const Navigate = useNavigate();
    const handleDelete = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('brandid', brandid);
        try {
            const response = await axios.delete(`https://localhost:7229/api/CarBrands1/DeleteCarBrand/${brandid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                },
            });
            toast.success('Successfully deleted !', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'error-success',
            });
            Navigate('/CarBrandDataTable');
        } catch (error) {
            console.log(error);
            toast.error('Error occurred while Deleting !', {
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
    };
    return (
        <div className='container-fluid d-flex justify-content-center mt-5'>
            <h3>Are you sure you want to delete this id</h3>
            <button className='btn mt-5 text-white' onClick={handleDelete} style={{ backgroundColor: 'black' }}>Delete</button>
            <ToastContainer />
        </div>
    )
}
