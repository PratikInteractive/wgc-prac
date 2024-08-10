"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import "@/app/styles/_headers.scss";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isLangOptionsVisible, setIsLangOptionsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const toggleLangOptions = () => {
    setIsLangOptionsVisible(!isLangOptionsVisible);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLangOptionsVisible(false);
  };


  return (
    <header className="header">
      <div className="header__container container">
        <Link href="/">
          <div className="logo">
            <Image
              src={logo}
              width={380}
              height={80}
              alt="alt"
              priority="true"
            />
          </div>
        </Link>
        <div className={`navigation ${isMobileNavVisible ? "visible" : ""}`}>
          <ul>
            <li>
              <a href="#">About Us</a>
              </li>
              <li>
              <a href="#">Governance</a></li>
              <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <div
            className={`hamburger-menu ${isMobileNavVisible ? "open" : ""}`}
            onClick={toggleMobileNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
