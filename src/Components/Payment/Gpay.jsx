
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';


export const Gpay = () => {
    const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName, uEmail } = useContext(
        UserContext
    );
    const navigate = useNavigate();



    const handleMail = async () => {
        const data1 = {
            Vuserid: userDetails.vUserid,
            From: "20bsca150vigneshr@skacas.ac.in",
            To: uEmail
        };

        try {
            const response = await axios.post('https://localhost:7229/api/CarDetails/Mailer', data1);
            if (response) {
                toast.success('Payment6 and Mail is successfully!', {
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
            toast.success(' and Mail is successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'error-success',
            });
            navigate('/ThankYou');
        }

    };

    // const handleSubmit = async () => {

    //     const data = {
    //         VUserid: userDetails.vUserid,
    //         VUserName: userName,
    //         Email: uEmail,
    //         Brandid: CarDetails.brandid,
    //         BrandImage: CarDetails.imageSrc,
    //         Carid: BrandDetails.carid,
    //         CarImage: BrandDetails.imageSrc,
    //         Fuelid: FuelDetails.fuelid,
    //         FuelImage: FuelDetails.imageSrc,
    //         Serviceid: ServiceDetails.serviceid,
    //         CreatedDate: new Date(),
    //         DueDate: new Date(),
    //     };

    //     try {
    //         const response = await axios.post('https://localhost:7229/api/CarDetails/PostCarDetail/Details', data);

    //         if (response) {
    //             handleMail();
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         toast.error('Error while processing your Payment', {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             className: 'error-success',
    //         });
    //     }

    // }


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

            if (response) {
                handleMail();
            }
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

    return (
        <div className="mt-3 d-flex justify-content-center">

            <>
                {/* <button onClick={handleMail}>Mail</button> */}
                {/* Gpay option */}
                <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: '100',
                            currencyCode: 'USD',
                            countryCode: 'US',
                        },
                    }}
                    onLoadPaymentData={(paymentRequest) => {
                        console.log('load payment data', paymentRequest);
                        handleSubmit();

                    }}
                />
                <ToastContainer />
            </>
        </div>
    )
}

