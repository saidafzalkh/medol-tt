import Image, { StaticImageData } from "next/image";

import ButtonLink from "../Button";

type Props = {
  data: {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
  };
};

export default function ServiceCard({ data }: Props) {
  return (
    <div className="service-card__wrapper">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        className="service-card"
      >
        <div className="service-card__image">
          <Image src={data.image} alt={data.title} />
        </div>

        <h3 className="service-card__title">{data.title}</h3>
        <p className="service-card__description">{data.description}</p>
        <ButtonLink text="Подробнее" link={data.link} />
      </div>
    </div>
  );
}
