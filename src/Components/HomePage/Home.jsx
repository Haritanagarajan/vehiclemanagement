import React from 'react'
import Logo from '../Assets/car.png';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className='container-fluid' id='Homeimage'>
        <div className='row'>
          <div className='col-sm-12 d-flex justify-content-center mt-3'>
            <img src={Logo} />
          </div>
          <p className='welcome mt-5'>"Welcome to VehiPro, your premier destination for vehicle service management solutions, where <br />efficiency and reliability meet to enhance your automotive experience."</p>
          <Link className='welcome1 mt-5 justify-content-center col-lg-6 col-sm-6 text-center' to='/CarBrand'>Book your Service</Link>
        </div>
      </div>
    </>
  )
}

export default Home