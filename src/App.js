import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/navbar/Navbar';
import Homepage from './routes/homepage/Homepage';
import Shirt from './routes/shirt/shirt.componant';
import TShirt from './routes/t-shirt/t-shirt.componant';
import Jeans from './routes/jeans/jeans.componant';
import AboutUs from './routes/about-us/about-us.componant';
import Footer from './routes/footer/footer.componant';

import './App.css';
import { Fragment } from 'react';


function App() {
    
    return (
  <Fragment>
  <Navbar />
  <Routes>
      <Route path="/" element={<Homepage />}/> 
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
