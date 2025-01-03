import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';

export default function Layout(){
    return  <>
       <Navbar/>

       <Outlet></Outlet>

       <Info/>

      <Footer/>
       
       </>
    
}

