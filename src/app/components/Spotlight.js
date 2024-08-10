"use client";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import arrow from "@/app/assets/arrow-front.svg";
import BannerImg from "@/app/assets/Banner.png";
import BannerMobImg from "@/app/assets/Banner-mob.png";
import { useMediaQuery } from "@/app/utils/mediaQuery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/styles/_spotlight.scss";
import ResponsiveImage from "@/app/utils/ResponsiveImage";

SwiperCore.use([Navigation, Pagination]);

const Spotlight = () => {

  const isMobile = useMediaQuery("(max-width: 767.98px)");

  const desktopImg = {
    url: BannerImg,
    alt: "Desktop Banner",
    width: 1440,
    height: 790,
  };

  const mobileImg = {
    url: BannerMobImg,
    alt: "Mobile Banner",
    width: 430,
    height: 779,
  };

  return (
    <div className="spotlight">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom_pagination",
        }}
        navigation={{
          prevEl: ".swiper_button_prev",
          nextEl: ".swiper_button_next",
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        >
          <SwiperSlide>
            <ResponsiveImage
              desktopImg={desktopImg}
              mobileImg={mobileImg}
              className={`banner_img img-fluid ${isMobile ? "mob" : "desk"}`}
              priority={true}
            />

            <div className="spotlight_container container">
              <div className="spotlight_content">
         
                  
                  <h2 className="spotlight_content_title">An Auspicious Beginning to a Golden Future</h2>
                  <h3 className="spotlight_content_Subtitle">Presenting IAGES - Indian Association for Gold Excellence and Standards.</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage
              desktopImg={desktopImg}
              mobileImg={mobileImg}
              className={`banner_img img-fluid ${isMobile ? "mob" : "desk"}`}
              priority={true}
            />

            <div className="spotlight_container container">
              <div className="spotlight_content">
         
                  
                  <h2 className="spotlight_content_title">An Auspicious Beginning to a Golden Future</h2>
                  <h3 className="spotlight_content_Subtitle">Presenting IAGES - Indian Association for Gold Excellence and Standards.</h3>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
      <div className="spotlightNav_container">
        <div className="container">
          <div className="custom_pagination"></div>
          <div className="swiper_button_prev">
            <Image
              src={arrow}
              alt="arrow"
              height={48}
              width={49}
            />
          </div>
          <div className="swiper_button_next">
            <Image
              src={arrow}
              alt="arrow"
              height={48}
              width={49}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
