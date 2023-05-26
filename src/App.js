import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar1 from './routes/navbar/Navbar.js'
import Homepage from './routes/homepage/Homepage';
import Shirt from './routes/shirt/shirt.componant';
import TShirt from './routes/t-shirt/t-shirt.componant';
import Jeans from './routes/jeans/jeans.componant';
import AboutUs from './routes/about-us/about-us.componant';
import Footer from './routes/footer/footer.componant';
import GoToTop from './Componants/goToTop/goToTop.componant.js';
import WholesaleInquiry from './routes/wholesale-inquiry/wholesale.inquiry.js';


import './App.css';
import { Fragment } from 'react';


function App() {

  const [isSubmitted, setSubmitted] = useState(false)

    return (
  <Fragment>
  <Navbar1 />
  <Routes>
      <Route path="/short-length" element={<Homepage isSubmitted={isSubmitted} onSubmitted={()=> setSubmitted(true)}/>}/> 
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/Jeans' element={<Jeans />}/>
        <Route path='/TShirt' element={<TShirt />}/>
        <Route path='/Shirt' element={<Shirt />}/>
        <Route path='/wholesale-inquiry' element={<WholesaleInquiry />}/>
        <Route path='/retail-inquiry' element={<Shirt />}/>
  </Routes>
  <Footer />
  <GoToTop />
  </Fragment>   
)
}

export default App;
