import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "../pages/home_page";

export function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
