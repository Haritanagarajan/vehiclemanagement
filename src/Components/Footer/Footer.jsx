import React from 'react'
import '../Styles/Footer.css';
import logo from '../Assets/V.gif';

export const Footer = () => {
    return (
        <>
            <div className="container-fluid  mt-5">

                <div className="row align-items-center footdiv" >
                    <div className="col-6">
                        <p className="text-center followus">follow us on</p>
                        <div className="container d-flex justify-content-center pt-3">
                            <button type="button foot" className="btn  btn-lg btn-floating mx-2 text-white" >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button foot" className="btn btn-lg btn-floating mx-2 text-white">
                                <i className="fab fa-youtube"></i>
                            </button>
                            <button type="button foot" className="btn  btn-lg btn-floating mx-2 text-white" >
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button type="button foot" className="btn  btn-lg btn-floating mx-2 text-white" >
                                <i className="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="section-2 navbar-brand d-flex justify-content-center mt-5">
                            <img src={logo} width="29%" />
                        </div>
                    </div>

                    <div className="text-center text-white p-3 cpy" >
                        © 2020 Copyright: VehiPro
                    </div>
                </div>
            </div>
        </>
    )
}
