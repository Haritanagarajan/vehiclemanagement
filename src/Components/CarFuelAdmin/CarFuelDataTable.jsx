import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CarFuelDataTable() {
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
                <Link to={`/CarFuelEdit/${row.fuelid}`}>Edit</Link>
            ),
        },
        {
            name: 'Delete',
            cell: (row) => (
                <Link to={`/CarFuelDelete/${row.fuelid}`}>Delete</Link>
            ),
        },

    ];

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7229/api/CarFuels/GetCarFuels'
            );
            const result = response.data;
            setData(result);
            setFilter(result);
        } catch (error) {
            console.error(error);
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
        <div>
            <h1>Car Fuel Data List</h1>
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
        </div>
    );
}
