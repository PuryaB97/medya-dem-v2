import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DetailContainer,
  HeroBg,
  HeroContent,
  VideoBg,
  DetailH1,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Column2,
  ServicesUl,
  ServicesLi,
} from "./DetailElements";
import productsData from "../Services/Data";

const Detail = () => {
  const { detailId } = useParams();
  const productId = productsData.find((prod) => prod.id === parseInt(detailId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DetailContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={productId.Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <DetailH1>{productId.header}</DetailH1>
        </HeroContent>

        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{productId.text}</TopLine>
                <Heading></Heading>
                <Subtitle>{productId.longText}</Subtitle>
                <ServicesUl>
                  {productId.servicesList.map((service, index) => {
                    return <ServicesLi key={index}>{service}</ServicesLi>;
                  })}
                </ServicesUl>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={productId.Image}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </DetailContainer>
    </>
  );
};

export default Detail;
