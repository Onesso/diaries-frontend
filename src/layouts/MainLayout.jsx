import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/pages/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';

export default function MainLayout({searchText, handleSearchText}) {
  return (
    <>
      <NavBar searchText={searchText} handleSearchText={handleSearchText}/>
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}
