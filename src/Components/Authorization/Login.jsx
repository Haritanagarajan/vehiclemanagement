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


  console.log("userDetails", userDetails);

  return (
    <>

      <div class="container text-white">
        <div className='row justify-content-center'>
          <div class="col-6 logincontainer mt-5">
            <h2 id='register' class="mt-3 pt-5 pb-3 text-center">Login Into VehiPro</h2>
            <form class="form-horizontal ps-2" onSubmit={handleLogin}>


              <div class="form-group registerform pt-3">
                <label class="control-label col-sm-2" for="Username">Username:</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="Username" placeholder="Enter Username" name="vusername" value={vusername} onChange={(e) => setvusername(e.target.value)} required />
                </div>
              </div>


              <div class="form-group registerform pt-3">
                <label class="control-label col-sm-2" for="pwd">Password:</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="Password" placeholder="Enter password" name="vpassword" value={vpassword} onChange={(e) => setvpassword(e.target.value)} required />
                </div>
              </div>


              <div class="form-group registerform pt-3">
                <label class="control-label col-sm-2" for="Email">Email:</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="Email" placeholder="Enter Email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>


              <div class="form-group mt-3 registerform pt-3 pb-5">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn submit login">Login</button>      <ToastContainer />

                  {error && <p className="text-danger">{error}</p>}
                </div>
              </div>
            </form>
          </div>

          {/* <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
            <img src={loginimage} alt="carts" class="mt-5 pt-5" id='vehicleimage' />
          </div> */}
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Login

