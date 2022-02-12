import {
  Properties,
  Cars,
  Furniture,
  Jobs,
  Kitchen,
  Computer,
  Camera,
  TV,
  Mobile,
  Electronics,
  Motorbike,
  Books,
  Sports,
  Fashion,
  Pets,
  Service,
} from "./component.details";
export const firstCat = [
  {
    title: "Mobile",
    image: require("../../../../assets/catogery/phone.svg"),
    navigate: "second-cato",

    font: "19",
    mapCat: "Mobile",
    payload: Mobile,
  },
  {
    title: "Computers",

    image: require("../../../../assets/catogery/desktop.svg"),
    navigate: "second-cato",

    font: "17",
    mapCat: "Computers",
    payload: Computer,
  },
  {
    title: "Furniture",

    image: require("../../../../assets/catogery/furniture.svg"),
    navigate: "second-cato",
    font: "19",
    mapCat: "Furniture",
    payload: Furniture,
  },
  {
    title: "Bikes",

    image: require("../../../../assets/catogery/bikes.svg"),
    navigate: "second-cato",

    font: "19",
    mapCat: "Bikes",
    payload: Motorbike,
  },

  {
    title: "Cars",

    image: require("../../../../assets/catogery/car.svg"),
    navigate: "second-cato",

    font: "19",
    mapCat: "Cars",
    payload: Cars,
  },

  // {
  //   title: "Pets",
  //
  //   navigate: "properties",
  //
  //   font: "19",
  //   mapCat: "Pets",
  //   payload: Pets,
  // },
  // {
  //   title: "Properties",
  //  ",
  //   navigate: "properties",
  //    //   font: "17",
  //   mapCat: "Properties",
  //   payload: Properties,
  // },
  // {
  //   title: "Fashion",
  //
  //   navigate: "properties",
  //
  //   font: "19",
  //   mapCat: "Fashion",
  //   payload: Fashion,
  // },

  // {
  //   title: "Art",
  //  ",
  //   navigate: "properties",
  //
  //   font: "19",
  //   mapCat: "Art and Hobby",
  //   payload: Sports,
  // },
  // {
  //   title: "Service",
  //
  //   navigate: "properties",
  //
  //   font: "19",
  //   mapCat: "Service",
  //   payload: Service,
  // },
  {
    title: "More",

    image: require("../../../../assets/catogery/more.svg"),
    navigate: "second-cato",
    font: "19",
    mapCat: "Jobs",
  },
];
