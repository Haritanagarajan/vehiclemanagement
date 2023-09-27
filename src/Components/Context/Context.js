// import React, { createContext, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Styles/Context.css';
// import { Navigate } from 'react-router-dom';
// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         loggedIn: false,
//         vpassword: '',
//         vusername: '',
//     });

//     const handleLogin = async (vusername, vpassword) => {
//         try {
//             const response = await fetch('https://localhost:7229/api/Users');
//             const data = await response.json();
//             const registeredUser = data.find(user => user.vusername === vusername && user.vpassword === vpassword);
//             if (registeredUser) {
//                 toast.success('Login successful!', {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     className: 'error-success',
//                 });
//                 setUser({
//                     loggedIn: true,
//                     vusername,
//                     vpassword,

//                 });
//                 <Navigate to="/" />
//             } else {
//                 toast.error('Login failed', {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     className: 'error-toast',
//                 });
//                 setUser({
//                     loggedIn: false,
//                     vusername,
//                     vpassword,
//                 });
//             }
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//             setUser({
//                 loggedIn: false,
//                 vusername,
//                 vpassword,
//             });
//         }
//     };
//     const handleLogout = () => {
//         toast.success('Logged out successful!', {
//             position: 'top-center',
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             className: 'error-success',
//         });
//         setUser({
//             loggedIn: false,
//             vusername,
//             vpassword,
//         });
//         <Navigate to="/" />
//     };

//     return (
//         <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
//             {children}
//             <ToastContainer />
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;



import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Context.css';
import { Navigate } from 'react-router-dom';
export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        loggedIn: false,
        vpassword: '',
        vusername: '',
    });

    const handleLogin = async (vusername, vpassword) => {
        try {
            const response = await fetch('https://localhost:7229/api/Users');
            const data = await response.json();
            const registeredUser = data.find(user => user.vusername === vusername && user.vpassword === vpassword);
            if (registeredUser) {
                toast.success('Login successful!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-success',
                });
                setUser({
                    loggedIn: true,
                    vusername,
                    vpassword,
                });
                <Navigate to="/" />
            } else {
                toast.error('Login failed', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-toast',
                });
                setUser({
                    loggedIn: false,
                    vusername,
                    vpassword,
                });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUser({
                loggedIn: false,
                vusername,
                vpassword,
            });
        }
    };

    const handleLogout = () => {
        toast.success('Logged out successful!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'error-success',
        });
        setUser({
            loggedIn: false,
            vusername: '',
            vpassword: '',
        });
        <Navigate to="/Register" />
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
            <ToastContainer />
        </UserContext.Provider>
    );
};

export default UserProvider;
