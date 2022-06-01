import React from "react";
import Slider from "react-slick";

import { HeadInfo, ImgRow, Img } from "./SlickElements";
import GarantiEgitim from "../../images/referances/garanti-egitim.png";
import AmericanCulture from "../../images/referances/amerikan-kultur-derneg.png";
import CerrahTip from "../../images/referances/cerrahi-tip-merkezi.png";
import tcdd from "../../images/referances/TCDD.png";
import dora from "../../images/referances/dora.png";
import kampus from "../../images/referances/kampus.png";
import jandarma from "../../images/referances/jandarma.png";
import gocidaresi from "../../images/referances/goc-idaresi.png";
import tastinlar from "../../images/referances/tastinlar.png";
import kayra from "../../images/referances/kayra.png";
import icisleri from "../../images/referances/icisleri.png";
import ormngnl from "../../images/referances/ormangnl.png";
import tarimveorman from "../../images/referances/tarimveorman.png";
import milliegitim from "../../images/referances/milliegitim.png";
import institut from "../../images/referances/institut.png";
import thku from "../../images/referances/THKU.png";

const Slick = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 2,
    speed: 1000,
    rows: 1,
    slidesPerRow: 2,
  };
  return (
    <>
      <HeadInfo>Referanslarımız</HeadInfo>
      <Slider {...settings}>
        <ImgRow>
          <Img src={GarantiEgitim} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={AmericanCulture} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={CerrahTip} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={tcdd} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={dora} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={kampus} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={jandarma} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={gocidaresi} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={tastinlar} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={kayra} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={icisleri} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={ormngnl} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={tarimveorman} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={milliegitim} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={institut} alt="garanti eğitim" />
        </ImgRow>
        <ImgRow>
          <Img src={thku} alt="garanti eğitim" />
        </ImgRow>
      </Slider>
    </>
  );
};

export default Slick;
