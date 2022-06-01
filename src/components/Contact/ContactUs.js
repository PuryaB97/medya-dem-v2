import React from "react";
import {
  FormContent,
  Container,
  FormH1,
  FormWrap,
  Icon,
  Form,
  FormInput,
  FormLabel,
  FormButton,
} from "./ContactUsElements";

import DemLogo from "../../images/demmedyalogo.png";

const ContactUs = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <img
            style={{ height: "150px", width: "150px" }}
            src={DemLogo}
            alt="Dem Medya"
          />
        </Icon>
        <FormContent>
          <Form>
            <FormH1>Bize Ulaşın</FormH1>
            <FormLabel htmlFor="for">İsiminiz</FormLabel>
            <FormInput type="text" required />
            <FormLabel htmlFor="for">E-posta</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Mesajınız</FormLabel>
            <FormInput type="text" required />
            <FormButton type="submit">Gönder</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ContactUs;
