import React, { useContext, useState, useEffect } from 'react';
import loginimage from '../Assets/loginimage.jpg';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [vusername, setvusername] = useState("");
  const [vpassword, setvpassword] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { userDetails, setuserDetails } = useContext(UserContext);
  const { userName, setuserName } = useContext(UserContext);
  const { uEmail, setuEmail } = useContext(UserContext);
  const Navigate = useNavigate();
  setuserName(vusername);
  setuEmail(Email)
  const handleLogin = async (e) => {
    e.preventDefault();
    if (Object.keys != null) {
      const newUser = {
        vusername,
        vpassword
      };
      try {
        const response = await axios.post("https:/localhost:7229/api/Users/ValidateUser", newUser, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userDetails.tokenResult}`,
          }
        })
        const result = await response.data;
        if (result) {
          console.log(result)
          setuserDetails(result);
          localStorage.setItem('role', result.roles)
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
          Navigate('/Home');
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
  return (
    <>
      <div className="container text-white">
        <div className='row justify-content-center'>
          <div className="col-6 logincontainer mt-5">
            <h2 id='register' className="mt-3 pt-5 pb-3 text-center">Login Into VehiPro</h2>
            <form className="form-horizontal ps-2" onSubmit={handleLogin}>
              <div className="form-group registerform pt-3">
                <label className="control-label col-sm-2" for="Username">Username:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="Username" placeholder="Enter Username" name="vusername" value={vusername} onChange={(e) => setvusername(e.target.value)} required />
                </div>
              </div>
              <div className="form-group registerform pt-3">
                <label className="control-label col-sm-2" for="pwd">Password:</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="Password" placeholder="Enter password" name="vpassword" value={vpassword} onChange={(e) => setvpassword(e.target.value)} required />
                </div>
              </div>
              <div className="form-group registerform pt-3">
                <label className="control-label col-sm-2" for="Email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="Email" placeholder="Enter Email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="form-group mt-3 registerform pt-3 pb-5">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn submit login">Login</button>      <ToastContainer />
                  {error && <p className="text-danger">{error}</p>}
                </div>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Login

