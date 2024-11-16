import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const words = ['repairs', 'cleaning', 'installations', 'maintenance'];

const TextCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <span className="inline-block text-left w-[103px] h-8 align-top overflow-hidden">
      <Slider {...settings} className="!inline-block">
        {words.map((word, index) => (
          <span key={index}>
            {word}
          </span>
        ))}
      </Slider>
    </span>
  );
};

export default TextCarousel;