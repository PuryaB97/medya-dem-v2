import React from "react";

import ShareBtn from "../Share-Btn/ShareBtn";
import { Button } from "../ButtonElement";
import { saveAs } from "file-saver";
import catalog from "../../catalog/dem-catalog.pdf";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Column2,
  BtnWrap,
  ImgWrap,
  Img,
} from "./RefElements";
import Slick from "../Slick";

const RefSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const saveFile = () => {
    saveAs({ catalog }, "dem-catalog.pdf");
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Slick />
        <ShareBtn />
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <a style={{ textDecoration: "none" }} href={catalog} download>
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      onClick={saveFile}
                    >
                      {buttonLabel}
                    </Button>
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default RefSection;
