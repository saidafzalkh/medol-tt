"use client";

import { link } from "fs";
import Image from "next/image";
import React, { useState } from "react";

import slide1 from "@/public/slides/slide-1.png";
import slide2 from "@/public/slides/slide-2.png";
import slide3 from "@/public/slides/slide-3.png";

import ButtonLink from "./Button";

const Slide: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(2);
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

  const handleDotClick = (slideId: number) => {
    setActiveSlide(slideId);
  };

  return (
    <div className="container">
      <div className="slide-container">
        <div className="slides">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`slide ${activeSlide === slide.id ? "active" : ""}`}
            >
              <div className="slide__content">
                {slide.title}
                <p>{slide.content}</p>
                <ButtonLink text="Подробнее" link={slide.link} />
              </div>
              <div className="slide__image">
                <Image src={slide.image} alt="Slider Image" />
              </div>
            </div>
          ))}
        </div>
        <div className="dot-indicators">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`dot ${activeSlide === slide.id ? "active" : ""}`}
              onClick={() => handleDotClick(slide.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
