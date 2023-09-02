import Image, { StaticImageData } from "next/image";

import ButtonLink from "../Button";

type Props = {
  data: {
    title: string;
    image: StaticImageData;
    link: string;
  };
};

export default function ProductCard({ data }: Props) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Image src={data.image} alt={data.title} />
      </div>

      <h3 className="product-card__title">{data.title}</h3>
      <ButtonLink text="Посмотреть все" link={data.link} />
    </div>
  );
}
