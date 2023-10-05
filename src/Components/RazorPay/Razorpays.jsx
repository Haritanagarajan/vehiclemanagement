import axios from "axios";
import React, { useEffect } from "react";
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';

export const Razorpays = () => {
  const { FuelDetails, CarDetails, BrandDetails, ServiceDetails, userDetails, userName, uEmail } = useContext(
    UserContext
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {};
        const response = await axios.post(`api/payment/initialize`, data);
        const order_id = response.data.id;

        const options = {
          key: `rzp_test_D3KXHgdS7fmKuO`,
          amount: `${ServiceDetails.servicecost}`,
          name: 'Your javascript client app',
          description: 'Pro Membership',
          image: '/your_logo.png',
          order_id: order_id,
          handler: (response) => {
            axios.post(`api/payment/confirm`, response)
              .then(response => alert(response.data))
              .catch((err) => console.log(err))
          },
          prefill: {
            name: "TESTUSER",
            email: "testuser@mail.com",
          },
          theme: {
            color: '#F37254'
          }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Razorpays Component</div>;
};
