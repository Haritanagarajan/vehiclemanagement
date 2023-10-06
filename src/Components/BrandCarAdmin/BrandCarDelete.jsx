import { React, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';
export const BrandCarDelete = () => {
    const { carid } = useParams();
    const { userDetails, setuserDetails } = useContext(UserContext);
    const Navigate = useNavigate();
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
            Navigate('/BrandCarDataTable');
            const result = await response.data;
            if (result) {

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
        <div className='container-fluid d-flex justify-content-center mt-5'>
            <h3>Are you sure you want to delete this id</h3>
            <button className='btn mt-5 text-white' onClick={handleDelete} style={{ backgroundColor: 'black' }}>Delete</button>
            <ToastContainer />
        </div>
    )
}
