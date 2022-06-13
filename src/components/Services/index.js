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
            <ServicesH2>Medya Planlama ve Satın Alma</ServicesH2>
            <ServicesP>
              Logonuzu, markanızı en iyi tanımlayacak şekilde tasarlıyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Açık Hava Reklamcılığı</ServicesH2>
            <ServicesP>
              Dem Medya, Ankara’da açık hava reklamcılığının lider ajansı
              konumundadır. 2012 yılından beri onlarca markaya açık hava
              reklamcılığında hizmet sunmuştur?
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Dijital Reklam ve Sosyal Medya</ServicesH2>
            <ServicesP>
              hesaplarınızı potansiyel müşterilerinize ulaştırıyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Web Programlama</ServicesH2>
            <ServicesP>
              Markanızın ihtiyacı olan kreatif hizmetler dahilinde konsept
              tasarımlar, kampanyalar oluşturuyor, yönetiyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Kurumsal Kimlik</ServicesH2>
            <ServicesP>
              Web sayfanız için yazılım çözümleri sunuyor ve yönetiyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Grafik Tasarım</ServicesH2>
            <ServicesP>
              Ürün yerleştirme, spot ve bant reklamı, radyo anonsu gibi birçok
              hizmetimiz var.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Prodüksiyon ve Organizasyon</ServicesH2>
            <ServicesP>
              Stratejik marka hedeflerinize göre dijital medya mecraları için
              reklamcılık çözümleri yaratıyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Baskı Hizmetleri ve Promosyon Ürünler</ServicesH2>
            <ServicesP>
              Yerel ve ulusal medya kurumlarıyla kurmuş olduğumuz işbirlikleri
              ile firmanız için en etkili kampanyayı yaratıyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
        <CardLink href="#">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Radyo, Televizyon, Sinema Gazete ve Dergi</ServicesH2>
            <ServicesP>
              İhtiyacınız olan fotoğraf ve video çekimlerini gerçekleştiriyor ve
              sunuma hazır hale getiriyoruz.
            </ServicesP>
          </ServicesCard>
        </CardLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
