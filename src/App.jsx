import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Homepage from "./components/pages/Homepage";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
