import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';

export const CarServiceDelete = () => {
    const { serviceid } = useParams();
    const { userDetails, setuserDetails } = useContext(UserContext);


    const handleDelete = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('serviceid', serviceid);
        try {
            const response = await axios.delete(`https://localhost:7229/api/CarServices/DeleteCarService/${serviceid}`, formData, {
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


    return (
        <div>
            <p>Are you sure you want to delete this id</p>
            <button className='btn' onClick={handleDelete}>Delete</button>
        </div>
    )
}
