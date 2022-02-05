import React from "react";
import "./component/productarchive.css";
import Background from "../../../assets/mobile.jpg";
import { NavLink } from "react-router-dom";
export const ProductArchive = () => {
  const Archives = [
    {
      title: "Used oppo phone",
      thumbnail: "1641133267608-4d2ee2e4-59ca-47fc-b156-0962182d820e.jpg",
      address: "midc malegaon sinnar",
      price: "11000",
      supercatogery: "mobiletablet",
      adid: "4d2ee2e4-59ca-47fc-b156-0962182d820e.jpga6okxxcdgwu",
      seller: "Tulsia6okxxbfk6t",
    },
    {
      title: "Lenovo 2018",
      thumbnail: "1641489082364-f2b035fe-4cbb-4018-a246-824dbf09868c.jpg",
      address: "midc malegaon sinnar",
      price: "25000",
      supercatogery: "pclaptop",
      adid: "f2b035fe-4cbb-4018-a246-824dbf09868c.jpg5dgky387tpa",
      seller: "Ashmita5hgkxxicbt5",
    },
    {
      title: "Secret code",
      thumbnail: "1641469855084-e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg",
      address: "midc malegaon sinnar",
      price: "120",
      supercatogery: "regular",
      adid: "e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg4ooky2wrpwh",
      seller: "Yakraj5hgkxxi7y4e",
    },
    {
      title: "Used oppo phone",
      thumbnail: "1641133267608-4d2ee2e4-59ca-47fc-b156-0962182d820e.jpg",
      address: "midc malegaon sinnar",
      price: "11000",
      supercatogery: "mobiletablet",
      adid: "4d2ee2e4-59ca-47fc-b156-0962182d820e.jpga6okxxcdgwu",
      seller: "Tulsia6okxxbfk6t",
    },
    {
      title: "Lenovo 2018",
      thumbnail: "1641489082364-f2b035fe-4cbb-4018-a246-824dbf09868c.jpg",
      address: "midc malegaon sinnar",
      price: "25000",
      supercatogery: "pclaptop",
      adid: "f2b035fe-4cbb-4018-a246-824dbf09868c.jpg5dgky387tpa",
      seller: "Ashmita5hgkxxicbt5",
    },
    {
      title: "Secret code",
      thumbnail: "1641469855084-e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg",
      address: "midc malegaon sinnar",
      price: "120",
      supercatogery: "regular",
      adid: "e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg4ooky2wrpwh",
      seller: "Yakraj5hgkxxi7y4e",
    },
    {
      title: "Used oppo phone",
      thumbnail: "1641133267608-4d2ee2e4-59ca-47fc-b156-0962182d820e.jpg",
      address: "midc malegaon sinnar",
      price: "11000",
      supercatogery: "mobiletablet",
      adid: "4d2ee2e4-59ca-47fc-b156-0962182d820e.jpga6okxxcdgwu",
      seller: "Tulsia6okxxbfk6t",
    },
    {
      title: "Lenovo 2018",
      thumbnail: "1641489082364-f2b035fe-4cbb-4018-a246-824dbf09868c.jpg",
      address: "midc malegaon sinnar",
      price: "25000",
      supercatogery: "pclaptop",
      adid: "f2b035fe-4cbb-4018-a246-824dbf09868c.jpg5dgky387tpa",
      seller: "Ashmita5hgkxxicbt5",
    },
    {
      title: "Secret code",
      thumbnail: "1641469855084-e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg",
      address: "midc malegaon sinnar",
      price: "120",
      supercatogery: "regular",
      adid: "e1881a86-80f2-4c11-85ac-f5c798ac0adc.jpg4ooky2wrpwh",
      seller: "Yakraj5hgkxxi7y4e",
    },
  ];

  return Archives.map((x, i) => {
    return (
      <NavLink style={{ width: "48%", textDecoration: "none" }} to="/product">
        <div id="productArchive">
          <div
            className="productImage"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          {/* <img
        className="productImage"
        alt="productimage"
        src={require("../../../assets/mobile.jpg")}
      /> */}
          <div className="bottomInfo">
            <div className="productinfo">
              {/* left side */}
              <div className="productdetail">
                <h2 className="productPrice">Rs. {x.price}</h2>
                <h1 className="productTitle">{x.title}</h1>
              </div>
              {/* right side */}
              <div onClick={() => console.log("hearted")} className="heart">
                <img
                  style={{ height: "22px", width: "22px" }}
                  src={require("../../../assets/icon/heart.png")}
                  alt="heart "
                />
              </div>
            </div>
            <div className="locationContainer">
              <img
                className="blackblue"
                style={{ height: "20px", width: "20px" }}
                src={require("../../../assets/icon/location.png")}
                alt="heart "
              />
              <p className="addresslabel">{x.address}</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  });
};
