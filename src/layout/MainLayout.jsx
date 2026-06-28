import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f8fafc]">
      <ScrollToTop />
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout