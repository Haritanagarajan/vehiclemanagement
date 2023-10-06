import React from 'react'
import '../Styles/Footer.css';
import logo from '../Assets/V.gif';

export const Footer = () => {
    return (
        <>
            <div class="container-fluid  mt-5">

                <div class="row align-items-center footdiv" >
                    <div class="col-6">
                        <p class="text-center followus">follow us on</p>
                        <div class="container d-flex justify-content-center pt-3">
                            <button type="button foot" class="btn  btn-lg btn-floating mx-2 text-white" >
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button type="button foot" class="btn btn-lg btn-floating mx-2 text-white">
                                <i class="fab fa-youtube"></i>
                            </button>
                            <button type="button foot" class="btn  btn-lg btn-floating mx-2 text-white" >
                                <i class="fab fa-instagram"></i>
                            </button>
                            <button type="button foot" class="btn  btn-lg btn-floating mx-2 text-white" >
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="section-2 navbar-brand d-flex justify-content-center mt-5">
                            <img src={logo} width="29%" />
                        </div>
                    </div>

                    <div class="text-center text-white p-3 cpy" >
                        © 2020 Copyright: VehiPro
                    </div>
                </div>
            </div>
        </>
    )
}
