import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const SliderField = ({ children, slidesToShow }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToShow || 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderField;
