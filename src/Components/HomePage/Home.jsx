import React from 'react'
import Homeimg from '../Assets/Homeimage.jpg';
import '../Styles/Home.css';

const Home = () => {
  return (
    <>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-12'>
            <img src={Homeimg} alt="Homeimage" class='img-fluid mt-5 ms-5 ps-5' width='90%' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home