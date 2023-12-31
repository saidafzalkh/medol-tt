import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ButtonLink from "../Button";

type Props = {
  data: {
    title: string;
    image: StaticImageData;
    link: string;
    data: string;
    description: string;
  };
};

export default function NewsCard({ data }: Props) {
  return (
    <div className="news-card">
      <div className="news-card__wrapper">
        <div data-aos="fade-down" className="news-card__image">
          <Image objectFit="fill" src={data.image} alt={data.title} />
        </div>

        <div className="news-card__box">
          <Link href={data.link} className="news-card__title">
            {data.title}
          </Link>
          <p className="news-card__data">{data.data}</p>
          <p className="news-card__description">{data.description}</p>
          <ButtonLink text="Подробнее" link={data.link} />
        </div>
      </div>
    </div>
  );
}
