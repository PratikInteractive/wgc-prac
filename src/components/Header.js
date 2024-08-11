"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import "@/styles/_headers.scss";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
 
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const pathname = usePathname();

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  useEffect(() => {
    setIsMobileNavVisible(false);
  }, [pathname]);



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
              <Link href="/about-us">About Us</Link>
              </li>
              <li>
              <Link href="/governance">Governance</Link></li>
              <li>
              <Link href="/resources">Resources</Link>
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
