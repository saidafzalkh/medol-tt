"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Image from "next/image";
import Slider from "react-slick";

import slide1 from "@/public/slides/slide-1.png";
import slide2 from "@/public/slides/slide-2.png";
import slide3 from "@/public/slides/slide-3.png";

import ButtonLink from "../Button";
import ServiceCard from "../cards/ServiceCard";
import HeroSlide from "../HeroSlide";

const slides = [
  {
    id: 1,
    title: (
      <h2>
        Аппарат ИК-лазерный <br /> МАКДЭЛ-09.1
      </h2>
    ),
    content:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    image: slide2,
    link: "#",
  },
  {
    id: 2,
    title: (
      <h2>
        Анализатор <br /> ABL800 FLEX
      </h2>
    ),
    content:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    image: slide1,
    link: "#",
  },
  {
    id: 3,
    title: (
      <h2>
        Система для <br /> аутогемотрансфузии
      </h2>
    ),
    content:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    image: slide3,
    link: "#",
  },
];

const settings = {
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  dots: true,
  // responsive: [
  //   {
  //     breakpoint: 1300,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 765,
  //     settings: {
  //       slidesToShow: 1,
  //       dots: false,
  //       autoplay: false,
  //     },
  //   },
  // ],
};

export default function HeroSlider() {
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <HeroSlide key={slide.id} data={slide} />
      ))}
    </Slider>
  );
}
