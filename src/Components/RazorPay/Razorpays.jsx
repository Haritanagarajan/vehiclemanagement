// import axios from "axios";
// import React, { useEffect } from "react";
// import { UserContext } from '../Context/userContext';
// import { useContext } from 'react';


// export const Razorpays = async () => {
//   const { ServiceDetails } = useContext(
//     UserContext
//   );

//  const amount = ServiceDetails.servicecost

//   const data =  amount ; // here anything extra can be passed while creating an order
//   const response = await axios.post(`https://localhost:7229/api/Payment`, data);
//   const order_id = response.data.id;
//   const options = {
//     key: `razorpay_key`,
//     amount:amount,
//     name: 'Your javascript client app',
//     description: 'Pro Membership',
//     image: '/your_logo.png',
//     order_id: order_id,
//     handler: (response) => {
//       axios.post(`https://localhost:7229/api/Payment`, response)
//         .then(response => alert(response.data))
//         .catch((err) => console.log(err))
//     },
//     prefill: {
//       name: "TESTUSER",
//       email: "testuser@mail.com",
//     },
//     theme: {
//       color: '#F37254'
//     }
//   };
//   const rzp1 = new window.Razorpay(options);
//   rzp1.open();
// };