import React from "react";
import { Container, Wrap, Icon } from "./ContactUsElements";

import DemLogo from "../../images/demmedyalogo.png";

import ContactSections from "../ContactNavigation/ContactSections";

const ContactUs = () => {
  return (
    <Container>
      <Wrap>
        <Icon to="/">
          <img
            style={{ height: "150px", width: "150px" }}
            src={DemLogo}
            alt="Dem Medya"
          />
        </Icon>
      </Wrap>
      <ContactSections />
    </Container>
  );
};

export default ContactUs;
