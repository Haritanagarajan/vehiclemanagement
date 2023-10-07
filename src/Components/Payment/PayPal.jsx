
import { CLIENT_ID } from '../Payment/Config'
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';
import axios from 'axios';
const Paypal = () => {

    const [show, setShow] = useState(true);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName, uEmail } = useContext(
        UserContext
    );
    console.log(userDetails.vUserid)

    const handleMail = async (e) => {
        e.preventDefault();
        const data1 = {
            Vuserid: userDetails.vUserid,
            From: "20bsca150vigneshr@skacas.ac.in",
            To: uEmail
        };

        try {
            const response = await axios.post('https://localhost:7229/api/CarDetails/Mailer', data1);
            if (response) {
                toast.success('Mail is successfully!', {
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
            console.error('Error:', error);
            toast.success('Mail sent!', {
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
    const handleSubmit = async () => {
        const data = {
            VUserid: userDetails.vUserid,
            VUserName: userName,
            Email: uEmail,
            Brandid: CarDetails.brandid,
            BrandImage: CarDetails.imageSrc,
            Carid: BrandDetails.carid,
            CarImage: BrandDetails.imageSrc,
            Fuelid: FuelDetails.fuelid,
            FuelImage: FuelDetails.imageSrc,
            Serviceid: ServiceDetails.serviceid,
            CreatedDate: new Date(),
            DueDate: new Date(),
        };

        try {
            const response = await axios.post('https://localhost:7229/api/CarDetails/PostCarDetail/Details', data, {
                headers: {
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                }
            });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error while processing your Payment', {
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
    }
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Purchase",
                    amount: {
                        currency_code: "USD",
                        value: ServiceDetails.servicecost,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            handleSubmit();
            toast('Payment Successfull :)')
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);

    return (
        <>
            <h3 style={{ fontStyle: 'italic' }} className='text-center mt-5'>Pay your service</h3>
            <div className='container-fluid d-flex justify-content-center mt-5 pt-5' style={{ backgroundColor: 'black', width: '50%' }}>
                <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                    <div >
                        {show ? (
                            <PayPalButtons
                                style={{}}
                                createOrder={createOrder}
                                onApprove={onApprove}
                            />
                        ) : null}
                    </div>
                </PayPalScriptProvider>
            </div>
            {success == true ? (
                <div className='container-fluid d-flex justify-content-center mt-5'>
                    <button className='btn bg-black text-white' onClick={handleMail}>Do you want a mail for this service</button>
                </div>
            ) : null}
        </>
    );
}

export default Paypal