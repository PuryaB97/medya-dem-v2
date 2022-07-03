import React from "react";
import Data from "./Data";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  CardLink,
} from "./ServicesElements";

function Services() {
  const sevicesData = Data.map((data) => {
    return (
      <CardLink key={data.id} to={`/detail/${data.id}`}>
        <ServicesCard>
          <ServicesIcon src={data.icon} />
          <ServicesH2>{data.header}</ServicesH2>
          <ServicesP>{data.title}</ServicesP>
        </ServicesCard>
      </CardLink>
    );
  });

  return (
    <ServicesContainer id="services">
      <ServicesH1>Hizmetlerimiz</ServicesH1>
      <ServicesWrapper>{sevicesData}</ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
