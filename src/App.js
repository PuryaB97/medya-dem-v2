import React from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import DetailsPage from "./pages/Details";
import data from "../src/components/Services/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/detail/:detailId" element={<DetailsPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
