"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@/utils/mediaQuery";
import Image from "next/image";
import "@/styles/_tabs.scss";
import dummy1 from "@/assets/dummy1.jpeg";
import dummyIcon from "@/assets/manufacturer-icon.svg";

const Tabs = () => {
  // Sample data for the tabs
  const tabData = [
    {
      field_heading: "Fairness and integrity",
      field_tab_title: "PRINCIPLE 01",
      field_desktop_image: dummy1, 
      field_icon_image: dummyIcon, 
      field_description_content: "A provider must treat customers fairly and act with integrity, from information and service provision through to transaction completion.",
    },
    {
      field_heading: "Transparency",
      field_tab_title: "PRINCIPLE 02",
      field_desktop_image: dummy1, 
      field_icon_image: dummyIcon, 
      field_description_content: "A provider must treat customers fairly and act with integrity, from information and service provision through to transaction completion.",
    },
    {
      field_heading: "Protection of client assets",
      field_tab_title: "PRINCIPLE 03",
      field_desktop_image: dummy1, 
      field_icon_image: dummyIcon, 
      field_description_content: "A provider must treat customers fairly and act with integrity, from information and service provision through to transaction completion.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // State to manage the active tab
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  return (
    <div>
      <div className={`${isMobile ? "" : "container"} tabs-container`}>
        <div className="tabs">
          {tabData.map((tabTitle, index) => (
            <div
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
              key={index}
            >
              {tabTitle.field_heading}
            </div>
          ))}
        </div>

        <div className="tab-panels">
          {tabData.map((tabDetail, index) => (
            <div
              className={`tab-panel ${activeTab === index ? "active" : ""}`}
              key={index}
            >
              <div className="tabDetail">
                <div className="tabDetail-principle">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: tabDetail.field_tab_title,
                    }}
                  />
                  <Image
                    src={tabDetail.field_desktop_image}
                    alt={tabDetail.field_tab_title}
                    width={800} // Replace with actual width
                    height={400} // Replace with actual height
                    className="img-fluid"
                  />
                </div>
                <div className="tabDetail-iconsec">
                  <div>
                    <Image
                      src={tabDetail.field_icon_image}
                      alt="Icon"
                      width={100} // Replace with actual width
                      height={100} // Replace with actual height
                    />
                    <p>
                        {tabDetail.field_description_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="container text-center"><a class="btn maroon-border-btn" href="#" target="_blank">Read More</a></div>
    </div>
  );
};

export default Tabs;
