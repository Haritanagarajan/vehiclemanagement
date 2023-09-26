import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../src/Components/Navbar/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route exact path='/Notesdisplay/:id' element={<Notesdisplay />} /> */}
      </Routes>
    </div>
  );
}

export default App;

