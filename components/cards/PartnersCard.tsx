import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    image: StaticImageData;
  };
};

export default function PartnersCard({ data }: Props) {
  return (
    <div className="partners-card">
      <Image src={data.image} alt="partner company" />
    </div>
  );
}
