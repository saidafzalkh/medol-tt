"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import s1 from "@/public/services/1.png";
import s2 from "@/public/services/2.png";
import s3 from "@/public/services/3.png";

import ServiceCard from "../cards/ServiceCard";

const services = [
  {
    id: 1,
    title: "СЕРВИС ОБОРУДОВАНИЯ",
    image: s1,
    link: "#",
    description:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
  },
  {
    id: 2,
    title: "РЕГИСТРАЦИИ",
    image: s2,
    link: "#",
    description:
      "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
  },
  {
    id: 3,
    title: "УСЛУГИ ЛОГИСТИКИ",
    image: s3,
    link: "#",
    description:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
  },
];

const settings = {
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ServicesSlider() {
  return (
    <Slider {...settings}>
      {services.map((service) => (
        <ServiceCard key={service.id} data={service} />
      ))}
    </Slider>
  );
}
