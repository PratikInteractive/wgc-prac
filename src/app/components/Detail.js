import React from "react";
import Image from "next/image";
import DetailImg from "@/app/assets/Gold-shopping.png";
import "@/app/styles/_detail.scss";

const Detail = () => {
  return (
    <section className="section-padding bg-black-gradient">
      <div className="container row pos-rel">
        <div className="b6">
          <h4 className="sub-title text-white">ABOUT IAGES</h4>
          <h1 className="title text-golden mb-1">
            We’re the Indian Association for Gold Excellence and Standards
          </h1>
          <p className="descp mb-2 text-white">
            IAGES is a self-regulatory organisation created by the Indian gold
            industry, for the Indian gold industry, and supported by World Gold
            Council.
          </p>
          <p className="descp mb-2 text-white">
            IAGES aims to bring the Indian gold industry together and will
            be based on key principles inspired by the World Gold Council’s
            Retail Gold Investment Principles. It will aim at increasing
            consumer confidence and trust in the Indian gold industry through
            encouraging fair and transparent practices, regulatory compliance,
            establishing codes of conduct, and introducing an audit framework –
            all by the Indian gold industry, for the Indian gold industry.
          </p>
            <a className="btn white-border-btn" href="#">
              Read More
            </a>
        </div>
        <div className="b6 b6-overflow">
          <Image
            src={DetailImg}
            width="635"
            height="597"
            alt="alt"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;
