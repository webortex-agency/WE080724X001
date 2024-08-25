import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navbarLinks: [
      {
        id: 1,
        pageName: "Services",
        path: "#services",
        type: "section",
      },
      {
        id: 2,
        pageName: "Projects",
        path: "#projects",
        type: "section",
      },
      {
        id: 3,
        pageName: "About",
        path: "/about",
        type: "route",
      },
    ],

    servicesData: [
      {
        id: 1,
        image: "/Assets/Services/picture-dynamic-color.svg",
        title: "Graphic Designing",
        description:
          "We have extensive graphic design experience, and we provide high-quality, more accurate outcomes.",
        path: "/services/graphic-design",
      },
      {
        id: 2,
        image: "src/assets/Services/image 17.svg",
        title: "Motion Graphics",
        description:
          "Our motion graphics bring your ideas to life with dynamic animations. ",
        path: "/services/motion-graphics",
      },
      {
        id: 3,
        image: "src/assets/Services/paint-kit-dynamic-color.svg",
        title: "Interior Design",
        description:
          "We create innovative and stylish interior spaces tailored to your needs.",
        path: "/services/interior-design",
      },
      {
        id: 4,
        image: "src/assets/Services/webdev.svg",
        title: "Web Design",
        description:
          "Our web designs are user-friendly and visually stunning, enhancing your online presence.",
        path: "/services/web-design",
      },
      {
        id: 5,
        image: "src/assets/Services/camera-dynamic-color.svg",
        title: "Photography",
        description:
          "We capture your moments with professional and creative photography.",
        path: "/services/photography",
      },
      {
        id: 6,
        image: "src/assets/Services/digitalmarketing.png",
        title: "Digital Marketing",
        description:
          "Our main goal is to provide 100% results and maintain social media with high precision.",
        path: "/services/digital-marketing",
      },
      {
        id: 7,
        image: "src/assets/Services/image 15.svg",
        title: "Cinematography",
        description:
          "We have extensive expertise editing videos, and we provide amazing insights into your thoughts.",
        path: "/services/cinematography",
      },
      {
        id: 8,
        image: "src/assets/Services/3d-dynamic-color.svg",
        title: "3D Cinematography",
        description:
          "We produce immersive 3D cinematography that captivates and engages viewers.",
        path: "/services/3d-cinematography",
      },
    ],

    graphicProjects: [
      {
        id: 1,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 2,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 3,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 4,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 5,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 6,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 7,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 8,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 9,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 10,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 11,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 12,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 13,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 14,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 15,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
      {
        id: 16,
        pic: "../src/assets/Projects/dummy.png",
        btnText: "sample image",
      },
    ],

    testimonialsData: [
      {
        id: 1,
        content:
          "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
        image: "src/assets/Testimonials/Image1.png",
        name: "John Carter",
        role: "Marketing Lead at Google",
      },
      {
        id: 2,
        content:
          "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
        image: "src/assets/Testimonials/Image2.png",
        name: "Peeter pawl",
        role: "Designer",
      },
      {
        id: 3,
        content:
          "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
        image: "src/assets/Testimonials/Image2.png",
        name: "Peeter pawl",
        role: "Designer",
      },
      {
        id: 4,
        content:
          "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
        image: "src/assets/Testimonials/Image2.png",
        name: "Peeter pawl",
        role: "Designer",
      },
    ],

    teamMembers: [
      {
        id: 1,
        FirstName: "Angeri",
        LastName: "Pavan Reddy",
        Role: "Co-Founder",
        pic: "./src/assets/TeamMembers/pavan.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "https://x.com/?lang=en",
        hueA: 340,
        hueB: 10,
      },
      {
        id: 2,
        FirstName: "CH",
        LastName: "Vinay",
        Role: "Co-Founder",
        pic: "./src/assets/TeamMembers/vinay.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "https://x.com/?lang=en",
        hueA: 20,
        hueB: 40,
      },
      {
        id: 3,
        FirstName: "Hitesh",
        LastName: "Mehra",
        Role: "Creative Director",
        pic: "./src/assets/TeamMembers/Prathyusha.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "",
        hueA: 60,
        hueB: 90,
      },
      {
        id: 4,
        FirstName: "Pruthvi",
        LastName: "Raj",
        Role: "Project Manager",
        pic: "./src/assets/TeamMembers/pavan.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "",
        hueA: 80,
        hueB: 120,
      },
      {
        id: 5,
        FirstName: "Indu",
        LastName: "T",
        Role: "Creative Director",
        pic: "./src/assets/TeamMembers/indu.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "https://x.com/?lang=en",
        hueA: 100,
        hueB: 140,
      },

      {
        id: 6,
        FirstName: "Rishitha",
        LastName: "",
        Role: "Creative Director",
        pic: "./src/assets/TeamMembers/rishitha.jpg",
        insta: "https://www.instagram.com/",
        fb: "",
        x: "https://x.com/?lang=en",
        hueA: 2050,
        hueB: 245,
      },
      {
        id: 7,
        FirstName: "Prathyusha",
        LastName: "",
        Role: "Creative Director",
        pic: "./src/assets/TeamMembers/Prathyusha.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "https://x.com/?lang=en",
        hueA: 260,
        hueB: 290,
      },
      {
        id: 8,
        FirstName: "Rishitha",
        LastName: "",
        Role: "Web Designer",
        pic: "./src/assets/TeamMembers/rishitha.jpg",
        insta: "https://www.instagram.com/",
        fb: "https://www.facebook.com/",
        x: "https://x.com/?lang=en",
        hueA: 290,
        hueB: 320,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
