import React from 'react'
import spotlight from '@/assets/inner-spotlight-about.jpeg';
import InnerSpotlight from '@/components/InnerSpotlight';
import Timeline from '@/components/Timeline';
import logo from '@/assets/logo.svg';
import Tabs from './Tabs';

const page = () => {
  return (
    <div>
        <InnerSpotlight spotlight={spotlight} subtitle="ABOUT US" title="Indian Association for Gold Excellence and Standards"/>
        <Timeline year={2017} title="Retail gold Investment principles" descp="The Retail Gold Investment Principles developed by the World Gold
              Council form the base of the operational principles of IAGES. 
              World Gold Council developed the RGIPs guide with an aim to build
              trust through professional principles for providers and guidance
              for investors on the opportunities that retail gold investment has
              to offer. These principles aim to promote trust and encourage the
              development of diverse gold investment products while reducing
              barriers to gold ownership." unique="full-width" />
        <Tabs />
        <Timeline year={2020} title="Swarna Adarsh Abhiyaan" descp="Following the RGIPs, a set of code of conducts inspired by the RGIPs were developed and introduced in the Swarna Adarsh Abhiyaan to mobilise the Indian gold industry to move in a unified direction. The Swarna Adarsh Abhiyaan was an industry initiative led by the World Gold Council to promote the values and benefits of working in a principled manner." unique="split-block" iframe="https://www.youtube.com/embed/otFWrPR50j0" row="rev-row" containerParent="full-width" videoClass="non-video-block" />
        <Timeline year={2024} title="IAGES As the Self-Regulatory Organisation (SRO)" descp="Indian Association for Gold Excellence and Standards is an SRO created by the Indian gold industry, for the Indian gold industry, and is supported by the World Gold Council." img={logo} imgClass="logo-block"  />
    </div>
  )
}

export default page