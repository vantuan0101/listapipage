import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
interface ChildrenProps {
  children: React.ReactNode;
}
const SliderField = ({ children } : ChildrenProps, slidesToShow :number) => {
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
