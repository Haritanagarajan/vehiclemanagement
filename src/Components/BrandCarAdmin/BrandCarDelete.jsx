import { React, useContext } from 'react'
import { useParams, } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';

export const BrandCarDelete = () => {
    const { carid } = useParams();
    const { userDetails, setuserDetails } = useContext(UserContext);


    const handleDelete = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('carid', carid);
        try {
            const response = await axios.delete(`https://localhost:7229/api/BrandCars/DeleteBrandCar/${carid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                },
            });

            const result = await response.data;
            if (result) {
                toast.success('Deleted successful!', {
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
        <div>
            <p>Are you sure you want to delete this id</p>
            <button className='btn' onClick={handleDelete}>Delete</button>
            <ToastContainer/>

        </div>
    )
}
