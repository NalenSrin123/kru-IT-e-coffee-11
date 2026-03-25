import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/common/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet នឹងបង្ហាញ Home, About, Contact ឬ Menu ទៅតាម URL */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;