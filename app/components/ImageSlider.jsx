"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import { MobileSlides, DesktopSlides } from "../constants";
import { nanoid } from "nanoid";

export default function ImageSlider() {
  var settings = {
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
  };

  return (
    <>
      <Slider className="w-full sm:hidden max-h-[500px] object-cover" {...settings}>
        {MobileSlides.map((slide) => (
          <img src={slide.url} alt={slide.url} key={nanoid()} className="max-h-[500px] object-cover" />
        ))}
      </Slider>

      <Slider className="w-full md:w-[60%] hidden sm:block max-h-[500px] object-cover" {...settings}>
        {DesktopSlides.map((slide) => (
          <img src={slide.url} alt={slide.url} key={nanoid()} className="max-h-[500px] object-cover" />
        ))}
      </Slider>
    </>
  );
}
