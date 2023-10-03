
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';


export const Gpay = () => {
    const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName } = useContext(
        UserContext
    );
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const handlePaymentSuccess = () => {
        // Display a success toast
        toast.success('Payment successful!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setIsPaymentSuccessful(true);
    };

    const handleMail = async (e) => {
        e.preventDefault();
        const data1 = {
            Vuserid: userDetails.vUserid,
        };

        try {
            const response = await axios.post('https://localhost:7229/api/CarDetails/Mailer', data1);

            if (response.status === 200) {
                alert('Data saved successfully');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving data');
        }

    };





    const handleSubmit = async () => {
        if (isPaymentSuccessful) {
            const data = {
                VUserid: userDetails.vUserid,
                VUserName: userName,
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
                const response = await axios.post('https://localhost:7229/api/CarDetails/PostCarDetail', data);

                if (response.status === 200) {
                    alert('Data saved successfully');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while saving data');
            }
        };
    }
    return (
        <div className="mt-3 d-flex justify-content-center">

            <>
                <button onClick={handleMail}>Mail</button>
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
                            totalPrice: '100.00',
                            currencyCode: 'USD',
                            countryCode: 'US',
                        },
                    }}
                    onLoadPaymentData={(paymentRequest) => {
                        console.log('load payment data', paymentRequest);
                        handlePaymentSuccess();
                        const isSuccessful = true;
                        if (isSuccessful) {
                            handlePaymentSuccess();
                            handleSubmit();
                        }
                    }}
                />

            </>
        </div>
    )
}

