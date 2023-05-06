import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar1 from './routes/navbar/Navbar.js'
import Homepage from './routes/homepage/Homepage';
import Shirt from './routes/shirt/shirt.componant';
import TShirt from './routes/t-shirt/t-shirt.componant';
import Jeans from './routes/jeans/jeans.componant';
import AboutUs from './routes/about-us/about-us.componant';
import Footer from './routes/footer/footer.componant';
// import Modal from './Componants/modal/modal.js';

import './App.css';
import { Fragment } from 'react';


function App() {

  const [isSubmitted, setSubmitted] = useState(false)

    return (
  <Fragment>
  <Navbar1 />
  {/* <Modal isSubmitted={isSubmitted} onSubmitted={()=> setSubmitted(true)}/> */}
  <Routes>
      <Route path="/" element={<Homepage isSubmitted={isSubmitted} onSubmitted={()=> setSubmitted(true)}/>}/> 
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/Jeans' element={<Jeans />}/>
        <Route path='/TShirt' element={<TShirt />}/>
        <Route path='/Shirt' element={<Shirt />}/>
  </Routes>
  <Footer />
  </Fragment>   
)
}

export default App;
