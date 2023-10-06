import React, { useEffect, useState, useContext } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
export const CarServiceDataTable = () => {
    const [carService, setCarService] = useState([]);
    const [search, setSearch] = useState('');
    const { userDetails, setuserDetails } = useContext(UserContext);
    const columns = [
        {
            name: 'Service ID',
            selector: 'serviceid',
        },
        {
            name: 'Car ID',
            selector: 'carid',
        },
        {
            name: 'Service Name',
            selector: 'serviceName',
        },
        {
            name: 'Warranty',
            selector: 'warranty',
        },
        {
            name: 'Subservice 1',
            selector: 'subservice1',
        },
        {
            name: 'Subservice 2',
            selector: 'subservice2',
        },
        {
            name: 'Subservice 3',
            selector: 'subservice3',
        },
        {
            name: 'Subservice 4',
            selector: 'subservice4',
        },
        {
            name: 'Time Taken',
            selector: 'timeTaken',
        },
        {
            name: 'Service Cost',
            selector: 'servicecost',
        },
        {
            name: 'Edit',
            cell: (row) => (
                <Link to={`/CarServiceEdit/${row.serviceid}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'black' }}></i></Link>
            ),
        },
        {
            name: 'Delete',
            cell: (row) => (
                <Link to={`/CarServiceDelete/${row.serviceid}`}><i class="fa-solid fa-trash" style={{ color: 'black' }}></i></Link>
            ),
        },
    ];
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7229/api/CarServices/GetCarServices', {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            }
            );
            const result = await response.data;
            setCarService(result);
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

    const filteredData = carService.filter((service) =>
        service.serviceName.toLowerCase().includes(search.toLowerCase())
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
        <div className="container mb-3">
            <h1 className="blogs text-center mt-5">Car Services</h1>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search..."
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
            <div className="text-center">
                <Link to="/CarServiceCreate" className="btn btn-primary">
                    Create
                </Link>
            </div>
            <ToastContainer />

        </div>
    );
};
