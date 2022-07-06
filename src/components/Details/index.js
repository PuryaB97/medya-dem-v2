import React from "react";
import { useParams } from "react-router-dom";

import Footer from "../Footer/index";

import { DetailContainer } from "./DetailElements";

import Navbar from "../Navbar";
import productsData from "../Services/Data";

const Detail = () => {
  const { detailId } = useParams();
  const productId = productsData.find((prod) => prod.id === parseInt(detailId));

  console.log(productId);

  return (
    <>
      <Navbar />
      <DetailContainer>
        <h1>{productId.header}</h1>
      </DetailContainer>
      <Footer />
    </>
  );
};

export default Detail;
