import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Homepage from "./components/pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddBlogPage from "./components/pages/AddBlogPage";
import BlogDetailsPage from "./components/pages/BlogDetailsPage";
import EditBlogPage from "./components/pages/EditBlogPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="/blogs-detail" element={<BlogDetailsPage />} />
        <Route path="/edit-blog" element={<EditBlogPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
