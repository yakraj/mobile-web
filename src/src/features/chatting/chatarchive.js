import React, { useState, useRef } from "react";
import "./chatarchive.css";
import "./Account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import chatProduct from "../../../assets/profile.jpg";
import buyProduct from "../../../assets/iphone.jpg";
import sellProduct from "../../../assets/mobile.jpg";
import { NavLink } from "react-router-dom";
import { ThreeTotab } from "../../components/toptab/toptab";

export const ChatArchive = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const Allchat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const Sellchat = [1, 2, 3, 4, 5, 6, 7, 8];
  const Buychat = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const ChatAllcontent = ({ Listchat, chatImage }) => {
    const [deletechat, setdeletechat] = useState(null);
    const chatdeleter = (id) => {
      deletechat === id ? setdeletechat(null) : setdeletechat(id);
    };
    return Listchat.map((x, i) => {
      return (
        <NavLink style={{ textDecoration: "none" }} to="/chattingui">
          <div key={i} className="chatarchive">
            <div className="leftsidearchive">
              <div
                style={{ backgroundImage: `url(${chatImage})` }}
                className="productimage"
              />
              <div className="chatproductinfo">
                <h3>Lenovo 2018</h3>
                <p>Hey will you sell that item.</p>
              </div>
            </div>
            <div className="rightsidearchive">
              <p>2022-01-28</p>
              <img
                onClick={() => chatdeleter(i)}
                alt="threedots"
                style={{ cursor: "pointer", zIndex: 10 }}
                src={require("../../../assets/icon/three-dot.svg").default}
              />
              {deletechat === i && (
                <div className="deleteproductArchive">Delete</div>
              )}
            </div>
          </div>
        </NavLink>
      );
    });
  };
  const AllMessage = () => {
    return <ChatAllcontent chatImage={chatProduct} Listchat={Allchat} />;
  };
  const BuyMessage = () => {
    return <ChatAllcontent chatImage={buyProduct} Listchat={Sellchat} />;
  };
  const SellMessage = () => {
    return <ChatAllcontent chatImage={sellProduct} Listchat={Buychat} />;
  };
  const AllmessageFirst = <AllMessage />;
  const BuymessageSecond = <BuyMessage />;
  const SellmessageThird = <SellMessage />;

  // const ProductArchive = () => {
  //   return
  // };

  console.log(<ChatAllcontent />);
  return (
    <ThreeTotab
      firstSlideContent={AllmessageFirst}
      secondSlideContent={BuymessageSecond}
      thirdSlideContent={SellmessageThird}
      screenname="chatting"
      firstTabname="All"
      secondTabname="selling"
      thirdTabname="buying"
    />
  );
};
