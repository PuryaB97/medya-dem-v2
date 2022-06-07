import React from "react";
import Icon1 from "../../images/socialmedia.png";
import Icon2 from "../../images/web.png";
import Icon3 from "../../images/designer.png";
import Icon4 from "../../images/animation.png";
import Icon5 from "../../images/building.png";
import Icon6 from "../../images/devices.png";
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
  return (
    <ServicesContainer id="services">
      <ServicesH1>Hizmetlerimiz</ServicesH1>
      <ServicesWrapper>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Kurumsal Kimlik</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Açık Hava</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Sosyal Medya</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Grafik Tasarım</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Web Programlama</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Radyo, Televizyon, Gazete Ve Dergi</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Sosyal Medya</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Grafik Tasarım</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Web Programlama</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </CardLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
