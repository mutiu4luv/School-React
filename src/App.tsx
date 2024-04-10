import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import AdminLayout from "./admin/AdminDashboard/AdminLayout";
import SchoolRegister from "./screens/SchoolRegister/SchoolRegister";
import { Route, Routes } from "react-router-dom";
import SchoolLogin from "./screens/SchoolLogin/SchoolLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SchoolLogin />} />
        <Route path="/RegisterSchool" element={<SchoolRegister />} />
      </Routes>
    </>
  );
}

export default App;
