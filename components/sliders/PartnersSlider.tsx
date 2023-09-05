"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import p1 from "@/public/partners/1.png";
import p2 from "@/public/partners/2.png";
import p3 from "@/public/partners/3.png";
import p4 from "@/public/partners/4.png";
import p5 from "@/public/partners/5.png";
import p6 from "@/public/partners/6.png";
import p7 from "@/public/partners/7.png";
import p8 from "@/public/partners/8.png";

import PartnersCard from "../cards/PartnersCard";

const partners = [
  { id: 1, image: p1 },
  { id: 2, image: p2 },
  { id: 3, image: p3 },
  { id: 4, image: p4 },
  { id: 5, image: p5 },
  { id: 6, image: p6 },
  { id: 7, image: p7 },
  { id: 8, image: p8 },
  { id: 1, image: p1 },
  { id: 2, image: p2 },
];

const settings = {
  arrows: true,
  slidesToShow: 4,
  rows: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1215,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 945,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        rows: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

export default function PartnersSlider() {
  return (
    <Slider {...settings}>
      {partners.map((partner) => (
        <PartnersCard key={partner.id} data={partner} />
      ))}
    </Slider>
  );
}
