"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import newsImage from "@/public/news.jpg";

import NewsCard from "../cards/NewsCard";

const news = [
  {
    id: 1,
    title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
    data: "26.07.2021",
    description:
      "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
    image: newsImage,
    link: "#",
  },
  {
    id: 2,
    title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
    data: "26.07.2021",
    description:
      "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
    image: newsImage,
    link: "#",
  },
  {
    id: 3,
    title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
    data: "26.07.2021",
    description:
      "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
    image: newsImage,
    link: "#",
  },
  {
    id: 4,
    title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
    data: "26.07.2021",
    description:
      "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
    image: newsImage,
    link: "#",
  },
];

const settings = {
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 715,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function NewsSlider() {
  return (
    <Slider {...settings}>
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} data={newsItem} />
      ))}
    </Slider>
  );
}
