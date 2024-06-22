'use client';
import Slider from "react-slick";
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({data , isLoading}) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true

      };
   
  return (
            <Slider {...settings} >
               {data.map((item, index) => (
                <div className="py-4 px-3  hover:border-none  hover:outline-none" key={index} >
                  <img src={item.poster} className="rounded-md " alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
  )
}

export default ImageSlider;