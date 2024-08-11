"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Transparency from "@/assets/Transparency.svg";
import Intergrity from "@/assets/Integrity-icon.svg";
import Protection from "@/assets/protection-icon.svg";
import ComplianceIcon from "@/assets/compliance-icon.svg";
import PrudenceIcon from "@/assets/prudence-icon.svg";
import PrincpleImg from "@/assets/principle.png";
import GoldSourcing from "@/assets/gold-sourcing-icon.svg";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import arrow from "@/assets/arrow-front.svg";
import "@/styles/_principles.scss";

const principlesData = [
  {
    id: 1,
    icon: Intergrity,
    iconAlt: "Transparency",
    title: "Fairness and integrity ",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
  {
    id: 2,
    icon: Transparency,
    iconAlt: "Transparency",
    title: "Transparency",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
  {
    id: 3,
    icon: Protection,
    iconAlt: "Protection",
    title: "Protection of client assets",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
  {
    id: 4,
    icon: GoldSourcing,
    iconAlt: "GoldSourcing",
    title: "Responsible gold sourcing",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
  {
    id: 5,
    icon: ComplianceIcon,
    iconAlt: "ComplianceIcon",
    title: "Regulatory complaince",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
  {
    id: 6,
    icon: PrudenceIcon,
    iconAlt: "PrudenceIcon",
    title: "Commercial prudence",
    description: "A provider must treat customers fairly and act with integrity; from information and service provision to settlement.",
    image: PrincpleImg,
    imageAlt: "principle",
  },
];

const Principles = () => {

  return (
    <section className="our_principles">
       
      <div className="container container-title">
        <h4 className="sub-title text-white text-uppercase mb-05">INSPIRATION BEHIND IAGES</h4>
        <h2 className="title text-golden mb-2">Inspired by Retail Gold Investment Principles Developed by the World Gold Council</h2>
      </div>
      <div className="right_container">
        <Swiper
          modules={[Navigation]}
          //slidesPerView={"auto"}
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={0}
          loop={true}
          init={true}
          direction={"horizontal"}
          preloadimages={true}
          autoHeight={true}
          navigation={{
            prevEl: ".swiper_button_prev",
            nextEl: ".swiper_button_next",
          }}
          className="swiper_container"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 3.8,
            },
          }}>
          {principlesData.map((principle, index) => (
            <SwiperSlide
              key={index}
              className="swiper_slide">
              <div className="inner_swiper">
                <div className="inner_slide">
                  <div className="principle_inner_data">
                    <div className="inner-data">
                 
                      <Image src={principle.icon} width={150} height={80} alt="alt" />
                    </div>

                    <h5 className="princple_txt">{principle.title}</h5>
                  </div>
                  <div className="principle_img">
                  <Image src={principle.image} width={150} height={80} alt="alt" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="inner_container">
            <a
              className="btn white-border-btn"
              href="#" target="_blank">
             Know more
            </a>
            <div className="principlesNav_container">
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
      </div>
    </section>
  );
};
export default Principles;
