import Image, { StaticImageData } from "next/image";

import ButtonLink from "./Button";

type Props = {
  data: {
    id: number;
    title: JSX.Element;
    content: string;
    image: StaticImageData;
    link: string;
  };
};

export default function HeroSlide({ data }: Props) {
  return (
    <div className="hero-slide">
      <div className="hero-slide__content">
        {data.title}
        <p>{data.content}</p>
        <ButtonLink text="Подробнее" link={data.link} />
      </div>
      <div className="hero-slide__image">
        <Image data-aos="zoom-in" src={data.image} alt="Slider Image" />
      </div>
    </div>
  );
}
