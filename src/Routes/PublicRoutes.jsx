import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "../SideBar";
import HomePage from "../components/HomePage/HomePage";
import Messages from "../components/Messages/Messages";
import Testings from "../Testings/Testings";

function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/testings" element={<Testings />} />
      </Routes>
    </Router>
  )
}
export default PublicRoutes;