import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DetailContainer = styled.div`
  background: #fff;
  height: 1800px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin-bottom: 500px;
    height: 2200px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 60%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  height: 400px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const DetailH1 = styled.h1`
  color: #990000;
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.1rem;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    letter-spacing: 0.5rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1300px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;

  padding: 0 5px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;

  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 480px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #990000;
  padding-top: 160px;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: 2px;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 550px;
  margin-bottom: 35px;
  text-align: left;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;

export const ImgWrap = styled.div`
  padding-top: 440px;
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const Img = styled.img`
  padding-top: 130px;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const ServicesUl = styled.ul`
  list-style: none;
`;

export const ServicesLi = styled.li`
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const NavLinks = styled(NavLink)``;
