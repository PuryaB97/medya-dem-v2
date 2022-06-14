import React from "react";
import Icon1 from "../../images/socialmedia.png";
import Icon2 from "../../images/web.png";
import Icon3 from "../../images/designer.png";
import Icon4 from "../../images/radio.png";
import Icon5 from "../../images/videography.png";
import Icon6 from "../../images/baski.png";
import Icon7 from "../../images/conception.png";
import Icon8 from "../../images/medyaplanlama.png";
import Icon9 from "../../images/yazilim.png";
import Icon10 from "../../images/identity.png";

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
            <ServicesIcon src={Icon8} />
            <ServicesH2>
              Medya Planlama ve <br /> Satın Alma
            </ServicesH2>
            <ServicesP>
              Yerel ve ulusal medya kurumlarıyla kurmuş olduğumuz iş birlikleri
              ile firmanız için en etkili kampanyayı üretiyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon7} />
            <ServicesH2>Açık Hava Reklamcılığı</ServicesH2>
            <ServicesP>
              Dem Medya olarak, Ankara’da açık hava reklamcılığının lider ajansı
              konumundayız.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>
              Dijital Reklam ve <br /> Sosyal Medya
            </ServicesH2>
            <ServicesP>
              Stratejik marka hedeflerinize göre dijital mecralar için yenilikçi
              reklamcılık çözümleri üretiyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon9} />
            <ServicesH2>Web Programlama</ServicesH2>
            <ServicesP>
              Markanızın ihtiyacı olan web sayfası için yazılım çözümleri
              geliştiriyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon10} />
            <ServicesH2>Kurumsal Kimlik</ServicesH2>
            <ServicesP>
              Logonuzu, markanızı en iyi tanımlayacak şekilde tasarlıyoruz
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Grafik Tasarım</ServicesH2>
            <ServicesP>
              Markanızın ihtiyacı olan kreatif hizmetler dahilinde hedef
              kitlenize göre konsept tasarımlar oluşturuyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Prodüksiyon ve Organizasyon</ServicesH2>
            <ServicesP>
              Tüm fotoğraf ve video ekipmanlarımız ile organizasyonunuzu
              düzenliyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Baskı Hizmetleri ve Promosyon Ürünler</ServicesH2>
            <ServicesP>
              Yaratıcı basılı ve promosyon ürünler markanızı daha etkili hale
              getirir.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Radyo, Televizyon, Sinema Gazete ve Dergi</ServicesH2>
            <ServicesP>
              Ürün yerleştirme, spot ve bant reklamı, radyo anonsu gibi birçok
              hizmet vermekteyiz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
