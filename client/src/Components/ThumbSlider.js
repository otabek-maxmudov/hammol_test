import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

const ThumbSlider = ({ product }) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Swiper
        style={{ width: 360 }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
        modules={[Navigation, Thumbs]}
        className="product-images-slider">
        {product.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // style={{ width: 360 }}
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs">
        {product.images.map((item, index) => (
          <SwiperSlide style={{ height: 80 }} key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ThumbSlider;
