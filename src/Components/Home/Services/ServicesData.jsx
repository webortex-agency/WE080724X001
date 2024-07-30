import React from "react";
import ReactDOM from "react-dom";
import Services from "./Services";

const ServicesData = [
  {
    image: "src/assets/Services/graphicdesign.png",
    title: "Graphic Designing",
    description:
      "We have extensive graphic design experience, and we provide high-quality, more accurate outcomes.",
  },
  {
    image: "src/assets/Services/motiongraphics.png",
    title: "Motion Graphics",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/interiordesign.png",
    title: "Interior Design",
    description:
      "With our development team, we are here to create the website in a personalized way and with excellent outcomes.",
  },
  {
    image: "src/assets/Services/webdevelopment.png",
    title: "Web Design",
    description:
      "We have extensive expertise editing videos, and we provide amazing insights into your thoughts.",
  },
  {
    image: "src/assets/Services/photography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/digitalmarketing.png",
    title: "Digital Marketing",
    description:
      "Our main goal is to provide 100% results and maintain social media with high precision.",
  },
  {
    image: "src/assets/Services/cinematography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/3dcinematography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms.",
  },
];

ReactDOM.render(
  <Services cards={ServicesData} />,
  document.getElementById("root")
);
