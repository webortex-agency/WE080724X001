import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navbarLinks: [
      {
        id: 1,
        pageName: "About",
        path: "/about",
        type: "route",
      },
      {
        id: 2,
        pageName: "Services",
        path: "#services",
        type: "section",
      },
      {
        id: 3,
        pageName: "Projects",
        path: "#projects",
        type: "section",
      },
    ],

    //   teamMembers: [
    //     {
    //       id: 1,
    //       FirstName: "Angeri",
    //       LastName: "Pavan Reddy",
    //       Role: "Co-Founder",
    //       pic: "./src/assets/TeamMembers/pavan.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "https://x.com/?lang=en",
    //       hueA: 340,
    //       hueB: 10,
    //     },
    //     {
    //       id: 2,
    //       FirstName: "CH",
    //       LastName: "Vinay",
    //       Role: "Co-Founder",
    //       pic: "./src/assets/TeamMembers/vinay.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "https://x.com/?lang=en",
    //       hueA: 20,
    //       hueB: 40,
    //     },
    //     {
    //       id: 3,
    //       FirstName: "Hitesh",
    //       LastName: "Mehra",
    //       Role: "Creative Director",
    //       pic: "./src/assets/TeamMembers/Prathyusha.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "",
    //       hueA: 60,
    //       hueB: 90,
    //     },
    //     {
    //       id: 4,
    //       FirstName: "Pruthvi",
    //       LastName: "Raj",
    //       Role: "Project Manager",
    //       pic: "./src/assets/TeamMembers/pavan.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "",
    //       hueA: 80,
    //       hueB: 120,
    //     },
    //     {
    //       id: 5,
    //       FirstName: "Indu",
    //       LastName: "T",
    //       Role: "Creative Director",
    //       pic: "./src/assets/TeamMembers/indu.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "https://x.com/?lang=en",
    //       hueA: 100,
    //       hueB: 140,
    //     },

    //     {
    //       id: 6,
    //       FirstName: "Rishitha",
    //       LastName: "",
    //       Role: "Creative Director",
    //       pic: "./src/assets/TeamMembers/rishitha.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "",
    //       x: "https://x.com/?lang=en",
    //       hueA: 2050,
    //       hueB: 245,
    //     },
    //     {
    //       id: 7,
    //       FirstName: "Prathyusha",
    //       LastName: "",
    //       Role: "Creative Director",
    //       pic: "./src/assets/TeamMembers/Prathyusha.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "https://x.com/?lang=en",
    //       hueA: 260,
    //       hueB: 290,
    //     },
    //     {
    //       id: 8,
    //       FirstName: "Rishitha",
    //       LastName: "",
    //       Role: "Web Designer",
    //       pic: "./src/assets/TeamMembers/rishitha.jpg",
    //       insta: "https://www.instagram.com/",
    //       fb: "https://www.facebook.com/",
    //       x: "https://x.com/?lang=en",
    //       hueA: 290,
    //       hueB: 320,
    //     },
    //   ],
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
