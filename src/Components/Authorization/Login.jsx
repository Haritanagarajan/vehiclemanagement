import React, { useContext, useState, useEffect } from 'react';
import loginimage from '../Assets/loginimage.jpg';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';


const Login = () => {

  const [vusername, setvusername] = useState("");
  const [vpassword, setvpassword] = useState("");
  const [Email, setvemail] = useState("");
  const [error, setError] = useState("");

  const { userDetails, setuserDetails } = useContext(UserContext);
  const { userName, setuserName } = useContext(UserContext);

  const Navigate = useNavigate();

  setuserName(vusername);
console.log(userName)
  const handleLogin = async (e) => {
    e.preventDefault();
    if (Object.keys != null) {
      const newUser = {
        vusername,
        vpassword,
      };

      try {
        const response = await axios.post("https:/localhost:7229/api/Users/ValidateUser", newUser, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const result = await response.data;
        console.log(result)
        setuserDetails(result);
        if (result) {
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
      <div class="container">
        <div className='row justify-content-center'>
          <div class="col-6">
            <h2 id='register' class="mt-3 pt-5 pb-3">Login</h2>
            <form class="form-horizontal" onSubmit={handleLogin}>


              <div class="form-group registerform">
                <label class="control-label col-sm-2" for="Username">Username:</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="Username" placeholder="Enter Username" name="vusername" value={vusername} onChange={(e) => setvusername(e.target.value)} required />
                </div>
              </div>


              <div class="form-group registerform">
                <label class="control-label col-sm-2" for="pwd">Password:</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="Password" placeholder="Enter password" name="vpassword" value={vpassword} onChange={(e) => setvpassword(e.target.value)} required />
                </div>
              </div>


              <div class="form-group registerform">
                <label class="control-label col-sm-2" for="vemail">vemail:</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="vemail" placeholder="Enter vemail" name="vemail" value={Email} onChange={(e) => setvemail(e.target.value)} required />
                </div>
              </div>


              <div class="form-group mt-3 registerform">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn submit">Login</button>
                  {error && <p className="text-danger">{error}</p>}
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
            <img src={loginimage} alt="carts" class="mt-5 pt-5" id='vehicleimage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

