import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const CarBrandDelete = () => {
    const { brandid } = useParams();


    const handleDelete = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('brandid', brandid);
        try {
            const response = await axios.delete(`https://localhost:7229/api/CarBrands1/DeleteCarBrand/${brandid}`, formData, {
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
        <div>
            <p>Are you sure you want to delete this id</p>
            <button className='btn' onClick={handleDelete}>Delete</button>
        </div>
    )
}