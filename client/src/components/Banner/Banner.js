import React, { useState, useEffect } from "react";
import "./Banner.css";
import { BannerData } from "./BannerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);
  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  console.log(current);
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="3x"
        className="left"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="3x"
        className="right"
        onClick={nextSlide}
      />
      {BannerData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="banner" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Banner;
