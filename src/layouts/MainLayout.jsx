import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  );
}
