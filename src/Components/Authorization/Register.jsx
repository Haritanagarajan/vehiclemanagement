import React from 'react'
import loginimage from '../Assets/loginimage.jpg';
import '../Styles/Register.css';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';


const Register = () => {
    const { userDetails, setuserDetails } = useContext(UserContext);

    const [vusername, setvusername] = useState("");
    const [vpassword, setvpassword] = useState("");
    const [vemail, setvemail] = useState("");
    const naviagte = useNavigate();
    const [vconfirmPassword, setvconfirmPassword] = useState("");
    const [vmobile, setvmobile] = useState("");
    const [errors, setErrors] = useState({});


    const handleRegister = (e) => {
        e.preventDefault();

        setErrors({});
        const validationErrors = {};

        if (vusername.trim() === "") {
            validationErrors.name = "Required";
        } else if (!isValidName(vusername)) {
            validationErrors.vusername = "Set a valid name";
        }

        if (vemail.trim() === "") {
            validationErrors.vemail = "Required Field";
        } else if (!isValidEmail(vemail)) {
            validationErrors.vemail = "Enter a valid email";
        }

        if (vmobile.trim() === "") {
            validationErrors.vmobile = "Required Field";
        } else if (!isValidMobile(vmobile)) {
            validationErrors.vmobile = "Enter a valid Contact";
        }

        if (vconfirmPassword.trim() === "") {
            validationErrors.vconfirmPassword = "Required Field";
        } else if (!isValidConfirmPassword(vconfirmPassword)) {
            validationErrors.vconfirmPassword = "Passwords does not match";
        }


        if (vpassword.trim() === "") {
            validationErrors.vpassword = "Required Field";
        } else if (!isValidPassword(vpassword)) {
            validationErrors.vpassword = "Enter a Valid Password";
        }


        if (Object.keys(validationErrors).length === 0) {
            const newUser = {
                vusername,
                vemail,
                vpassword,
                vconfirmPassword,
                vmobile,
                vroleid: 2

            };


            fetch("https:/localhost:7229/api/Users/PostVuser", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userDetails.tokenResult}`,
                },
                body: JSON.stringify(newUser),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log(response.data);
                        setvusername("");
                        setvemail("");
                        setvpassword("");
                        setvconfirmPassword("");
                        setvmobile("");
                        toast.success("Registration Successful");
                        naviagte('/Login')
                    }
                    else {
                        throw new Error("Registration failed");

                    }
                })
                .catch((error) => {
                    console.error("Error during registration:", error);
                });

        } else {
            setErrors(validationErrors);
        }
    }

    const isValidEmail = (vemail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(vemail);
    };

    const isValidName = (vusername) => {
        const nameRegex = /^[A-Za-z]{1,30}$/;
        return nameRegex.test(vusername);
    };

    const isValidPassword = (vpassword) => {
        const codeRegex = /^\d{6}$/;
        return codeRegex.test(vpassword);
    };

    const isValidConfirmPassword = (vconfirmPassword) => {
        const codeRegex = /^\d{6}$/;
        return codeRegex.test(vconfirmPassword);
    };


    const isValidMobile = (vmobile) => {
        const codeRegex = /^\d{10}$/;
        return codeRegex.test(vmobile);
    };





    return (
        <>
            <div class="container text-white mt-3 mb-2">
                <div className='row justify-content-center'>
                    <div class="col-lg-6 logincontainer">
                        <h2 id='register' class="mt-3 pt-5 pb-3 text-center">Register your Details</h2>
                        <form class="form-horizontal ps-2">

                            <div class="form-group registerform pt-3">
                                <label class="control-label col-sm-2" for="Username">Username:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="Username" placeholder="Enter Username" name="vusername" value={vusername} onChange={(e) => setvusername(e.target.value)} />
                                    {errors.vusername && <span className="error">{errors.vusername}</span>}
                                </div>
                            </div>


                            <div class="form-group registerform pt-3">
                                <label class="control-label col-sm-2" for="email">Email:</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="vemail" value={vemail} onChange={(e) => setvemail(e.target.value)} />
                                    {errors.vemail && <span className="error">{errors.vemail}</span>}
                                </div>
                            </div>



                            <div class="form-group registerform pt-3">
                                <label class="control-label col-sm-2" for="pwd">Password:</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="Password" placeholder="Enter password" name="vpassword" value={vpassword} onChange={(e) => setvpassword(e.target.value)} />
                                    {errors.vpassword && <span className="error">{errors.vpassword}</span>}
                                </div>
                            </div>


                            <div class="form-group registerform pt-3">
                                <label class="control-label col-sm-2" for="pwd">ConfirmPassword:</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Enter password again" name="vconfirmPassword" value={vconfirmPassword} onChange={(e) => setvconfirmPassword(e.target.value)} />
                                    {errors.vconfirmPassword && <span className="error">{errors.vconfirmPassword}</span>}
                                </div>
                            </div>


                            <div class="form-group registerform pt-3" >
                                <label class="control-label col-sm-2" for="Contact">Contact:</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="Contact" placeholder="Enter Contact" name="vmobile" value={vmobile} onChange={(e) => setvmobile(e.target.value)} />
                                    {errors.vmobile && <span className="error">{errors.vmobile}</span>}
                                </div>
                            </div>

                            <div class="form-group mt-3 registerform pt-3 pb-5">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="button" class="btn submit login" onClick={handleRegister}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
                        <img src={loginimage} alt="carts" class="mt-5 pt-5" id='vehicleimage' />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Register