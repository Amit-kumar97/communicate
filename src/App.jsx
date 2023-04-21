import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Reading from './Components/Reading/Reading';
import News from "./Components/Reading/News/News";
import Navbar from './Components/Reading/News/Navbar';
import HomePage from './HomePage';
import Carousels from './Carousels';

function App() {
  return (
  <>
    <div className='header'>
      {/* <Header></Header> */}
    </div>
      {/* <Navbar></Navbar> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Carousels/>}></Route> */}
        <Route path='/' element={<HomePage/>}></Route>

        <Route path='/HomePage' element={<HomePage/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/Reading' element={<Reading/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>

        
          <Route exact path="/News" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" topic="Business"/>}></Route> 
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" topic="EntertainMent"/>}></Route> 
          <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/health" element={<News key="health"  pageSize={9} country="in" category="health" topic="Health"/>}></Route> 
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" topic="Science"/>}></Route> 
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" topic="Sports"/>}></Route> 
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" topic="Technology"/>}></Route> 
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;





// import './App.css';
// import Navbar from "./Components/Reading/News/Navbar";
// import News from "./Components/Reading/News/News";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
      
//       <BrowserRouter>
//         <Navbar />
//         <div style={{display:"flex"}}>
          
//         <Routes>
//           
//         </Routes>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;