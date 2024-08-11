import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/utils/mediaQuery";

const ResponsiveImage = ({ desktopImg, mobileImg, className , priority }) => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const selectedImg = isMobile && mobileImg ? mobileImg : desktopImg;

  return (
    <Image
      src={selectedImg.url}
      alt={selectedImg.alt}
      width={selectedImg.width}
      height={selectedImg.height}
      className={className}
      priority={priority}
    />
  );
};

export default ResponsiveImage;
