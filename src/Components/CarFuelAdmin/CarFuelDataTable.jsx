import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';

export default function CarFuelDataTable() {
    const { userDetails, setuserDetails } = useContext(UserContext);

    const columns = [
        {
            name: 'Fuel ID',
            selector: (row) => row.fuelid,
        },
        {
            name: 'Fuel Name',
            selector: (row) => row.fuelName,
        },
        {
            name: 'Fuel Image',
            cell: (row) => (
                <img
                    src={row.imageSrc}
                    alt={row.fuelName}
                    width="90px"
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
                <Link to={`/CarFuelEdit/${row.fuelid}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'black' }}></i></Link>
            ),
        },
        {
            name: 'Delete',
            cell: (row) => (
                <Link to={`/CarFuelDelete/${row.fuelid}`}><i class="fa-solid fa-trash" style={{ color: 'black' }}></i></Link>
            ),
        },

    ];

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7229/api/CarFuels/GetCarFuels', {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
            const result = response.data;
            setData(result);
            setFilter(result);
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

    useEffect(() => {
        const result = data.filter((item) =>
            item.fuelName.toLowerCase().includes(search.toLowerCase())
        );
        setFilter(result);
    }, [search]);



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
        <div className="container mt-5 text-center">
            <h1>Car Fuel</h1>
            <DataTable
                columns={columns}
                data={filter}
                pagination
                selectableRows
                fixedHeader
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        className="w-25 form-control"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                }
                subHeaderAlign="right"
                customStyles={tableHeaderStyle}
            />
            <ToastContainer />
            <div className='text-center'>
                <Link to='/CarFuelCreate' className='btn btn-primary'>
                    Create
                </Link>
            </div>
        </div>
    );
}
