"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoFt from "@/assets/iages-footer.svg";

import "@/styles/_footer.scss";

const Footer = () => {
  return (
    <footer className="ft">
      <div className="ft__container container">
        <div className="ft__container_logo">
          <Image src={logoFt} width={230} height={49} alt="Iages" />
          <ul className="ft__container_links">
            <li className="ft__link_title">
            <Link href="/about-us">About Us</Link>
            </li>
            <li className="ft__link_title">
            <Link href="/governance">Governance</Link>
            </li>
            <li className="ft__link_title">
            <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>

        <div className="ft__container_btm">
          <ul className="ft__list_btm">
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
