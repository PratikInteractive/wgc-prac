"use client";
import React, { useState } from "react";
import Image from "next/image";
import EnhancedCred from "@/assets/Enhanced_credibility .svg";
import ExclusiveMarket from "@/assets/exclusive_markets.svg";
import ClientBase from "@/assets/client_base.svg";
import BillionTrader from "@/assets/billion-trader.png";
import BillionTraderIcon from "@/assets/billion-trader-icon.svg";
import Assaying from "@/assets/assaying.png";
import Retailer from "@/assets/Retailer.png";
import HallmarkIcon from "@/assets/hallmark-agent-icon.svg";
import RetailerIcon from "@/assets/billion-trader-icon.svg";
import ManufacturerIcon from "@/assets/retailer-icon.svg";
import DigitalIcon from "@/assets/manufacturer-icon.svg";
import RefinerIcon from "@/assets/Refiner-icon.svg";


import "@/styles/_usertype.scss";

const UserType = () => {
  return (
    <section className="section_padding_tab bg-black-gradient flare flare-right">
      <div className="container">
        <div className="title-block text-center">
          <h2 className="sub-title text-white">WHO IS IT FOR</h2>
          <h3 className="title text-golden">Golden Insights. Solid Returns.</h3>
        </div>
        <div className="grid-block">
          <div className="grid-single">
            <Image
              src={BillionTrader}
              alt="Billion Trader"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={BillionTraderIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Bullion Trader</p>
            </div>
          </div>
          <div className="grid-single">
            <Image
              src={Assaying}
              alt="Assaying"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={HallmarkIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Assaying &
              Hallmarking Agent </p>
            </div>
          </div>
          <div className="grid-single">
            <Image
              src={Retailer}
              alt="Retailer"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={RetailerIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Retailer</p>
            </div>
          </div>
          <div className="grid-single">
            <Image
              src={BillionTrader}
              alt="Billion Trader"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={ManufacturerIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Manufacturer</p>
            </div>
          </div>
          <div className="grid-single">
            <Image
              src={BillionTrader}
              alt="Billion Trader"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={DigitalIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Digital Gold Retailer</p>
            </div>
          </div>
          <div className="grid-single">
            <Image
              src={BillionTrader}
              alt="Billion Trader"
              width={426}
              height={250}
              className="img-fluid w-100"
            />
            <div className="grid-single-detail">
              <Image
                src={RefinerIcon}
                alt="Billion Trader"
                width={85}
                height={65}
                className="grid-single-icon"
              />
              <p className="grid-single-text">Refiner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserType;
