import Image from "next/image";

import aboutImage from "@/public/about-image.png";

import ButtonLink from "../Button";
import Title from "../Title";

export default function About() {
  return (
    <section className="section about">
      <Title>О КОМПАНИИ</Title>

      <div className="container">
        <div className="about__content">
          <Image src={aboutImage} alt="About Medol Medical" />
          <div className="about__text">
            <p>
              Группа компаний MEDOL создавалась высококвалифицированными
              специалистами в сфере медицины, инженерии и экономики, за плечами
              которых значительный опыт на рынке высоких медицинских технологий,
              которая имеет свои представительства в разных уголках Земли. В
              2011 году MEDOL зарегистрировал в Узбекистане ИП ООО &quot;Medical
              Online Services&quot;. Цель компании построить прозрачный
              долгосрочный бизнес, принести пользу обществу путем развития и
              внедрения передовых технологий в систему здравоохранения
              Республики Узбекистан.
            </p>
            <ButtonLink text="Узнать больше" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
