import React from "react";
import { useParams } from "react-router-dom";

import Footer from "../Footer/index";

import { DetailContainer } from "./DetailElements";

import Data from "./Data";

const Detail = ({ data }) => {
  const { detailId } = useParams();

  const servicesData = Data.map((data) => {
    return <div id={detailId}>{data.title}</div>;
  });

  return (
    <>
      <DetailContainer>
        <div>{servicesData}</div>
      </DetailContainer>
      <Footer />
    </>
  );
};

export default Detail;
