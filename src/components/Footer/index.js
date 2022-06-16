import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import DemLogo from "../../images/demmedyalogo.png";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Bize Ulaşın</FooterLinkTitle>
              <FooterLink href="tel:+90 312 417 22 17">
                +90 312 417 22 17
              </FooterLink>
              <FooterLink href="mailto:bilgi@demmedya.com">
                bilgi@demmedya.com
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img
                style={{ height: "150%", width: "150%" }}
                src={DemLogo}
                alt="Dem Medya"
              />
            </SocialLogo>
            <WebsiteRights>
              Dem Medya © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/demmedya/"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/accounts/login/?next=/medyadem/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>{" "}
              <SocialIconLink href="/#" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/dem-medya/about/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
