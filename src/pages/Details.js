import React, { useState } from "react";
import Detail from "../components/Details";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Sidebar from "../components/Sidebar";

const DetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Detail />
      <Footer />
    </div>
  );
};

export default DetailsPage;
