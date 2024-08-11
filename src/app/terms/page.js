"use client";
import Accordion from "@/components/reusables/Accordion";

const data = [
  {
    title: "Terms and Conditions",
    content:
      "<ul><li>use this Website to carry out or assist any unlawful or criminal activity;</li><li>access without authority, interfere with, damage or disrupt any equipment, network or software on which this Website is stored or which is used or owned by this Website or that of a third party; or assist, encourage or permit any other person to do any of the acts described above.</li></ul><p>All the above are forbidden regardless of the means used, including but not limited to, hacking or by the introduction of any worms, trojans, virus, unauthorised, malicious or harmful code or other harmful software (viruses). Some of the acts described above may be criminal acts. You must not post or publish any copies or downloads of materials which come from this Website on any networked computer, or make any statements or undertake any actions which could result in liability for us.</p>",
  },
  {
    title: "Use of this Website",
    content:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
  },
];

const Page = () => {


  return (
    <div>
      <Accordion data={data} />
    </div>
  );
};

export default Page;
