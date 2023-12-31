import React, { useEffect, useState, useContext } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
const CarBrandDataTable = () => {
    const [carBrands, setCarBrands] = useState([]);
    const [search, setSearch] = useState('');
    const { userDetails, setuserDetails } = useContext(UserContext);
    const columns = [
        {
            name: 'Brand ID',
            selector: 'brandid',
        },
        {
            name: 'Brand Name',
            selector: 'brandName',
        },
        {
            name: 'Image',
            cell: (row) => (
                <img
                    src={row.imageSrc}
                    alt={row.brandName}
                    width='100px'
                    onError={(e) => {
                        console.log('Error loading image:', e);
                    }}
                    className="img-fluid"
                />
            ),
        },
        {
            name: 'Edit',
            cell: (row) => (
                <Link to={`/CarBrandEdit/${row.brandid}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'black' }}></i></Link>
            ),
        },
        {
            name: 'Delete',
            cell: (row) => (
                <Link to={`/CarBrandDelete/${row.brandid}`}><i class="fa-solid fa-trash" style={{ color: 'black' }}></i></Link>
            ),
        },
    ];
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7229/api/CarBrands1/GetCarBrands',
                {
                    headers: {
                        'Authorization': `Bearer ${userDetails.tokenResult}`,
                    }
                }
            );
            const result = await response.data;
            setCarBrands(result);
        } catch (error) {
            console.error(error);
            toast.error('Error occurred while fetching !', {
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
    useEffect(() => {
        fetchData();
    }, []);
    const filteredData = carBrands.filter((brand) =>
        brand.brandName.toLowerCase().includes(search.toLowerCase())
    );
    const tableHeaderStyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                backgroundColor: '#ccc',
            },
        },
    };
    return (
        <div className='container mb-3'>
            <h1 className='blogs text-center mt-5'>Car Brands</h1>
            <input
                type='text'
                className='form-control mb-3'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                selectableRows
                fixedHeader
                selectableRowsHighlight
                highlightOnHover
                customStyles={tableHeaderStyle}
            />
            <div className='text-center'>
                <Link to='/CarBrandCreate' className='btn btn-primary'>
                    Create
                </Link>
            </div>
            <ToastContainer />

        </div>
    );
};

export default CarBrandDataTable;
