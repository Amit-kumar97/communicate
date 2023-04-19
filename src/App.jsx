import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Navbar/Header';
import Reading from './Components/Reading/Articles/Reading';
function App() {
  return (
  <>
    <div className='header'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route> */}
      </Routes>
      </BrowserRouter>
      <Reading></Reading>
      {/* <Home></Home> */}
    </div>
  </>
  );
}

export default App;
