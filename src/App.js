import './App.css';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Link, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portofolio from './pages/portofolio/Portofolio';
import Services from './pages/services/Services';
import ServicesLoad from './pages/services/ServicesLoad'
import ServiceDetails from './pages/services/ServiceDetails'
import Contact, { contactAction } from './pages/contact-us/Contact';
import ErrorPage from './pages/error/ErrorPage';
import PortofolioLoad from './pages/portofolio/PortofolioLoad'
import RootLayout from './layout/RootLayout'
import PlaceDetails from './pages/portofolio/PlaceDetails';

// 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/Portofolio' element={<Portofolio />} errorElement={<ErrorPage />}  >
        <Route index element={<PortofolioLoad />}  />
        <Route path=":id" element={<PlaceDetails />}   />
      </Route>
      <Route path='/Services' element={<Services />} errorElement={<ErrorPage />}  >
        <Route index element={<ServicesLoad />}  />
        <Route path=":service" element={<ServiceDetails />}   />
      </Route>
      <Route path='/Contact' element={<Contact />} action={contactAction}/>
      <Route path='*' element={<ErrorPage />} />
     
   </Route>
  )
)
function App() {
  return (
    <>
    
    
      
  <RouterProvider router={router} />
    
    </>
  );
}

export default App;
