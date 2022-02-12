import React, { useState, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import chatProduct from "../../../assets/profile.jpg";
import { ChatAllcontent } from "../../features/chatting/chatarchive";
export const TwoTotab = ({
  firstTabname,
  secondTabname,
  thirdTabname,
  firstSlideContent,
  secondSlideContent,
  screenname,
  thirdSlideContent,

  children,
}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 100,
    arrows: false,
    slidesToShow: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const [deletechat, setdeletechat] = useState(null);

  const chatdeleter = (id) => {
    deletechat === id ? setdeletechat(null) : setdeletechat(id);
  };

  return (
    <div>
      <div class="close-popup-option"></div>
      {/* TOP NAV STARTS HERE */}
      {/* <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="m-top-nav"
      >
        <div className="left">
          <div class="return"></div>
          <div className="m-top-nav-title">Chat</div>
        </div>
        <div className="right">
          <div className="search" />
          <div className="thredot" />
        </div>
      </nav> */}
      {/* TOP NAV ENDS HERE */}
      {/* CHAT AREA STARTS HERE */}
      {/* CHAT NAV STARTS HERE */}

      {/* <hr /> */}
      {/* CHAT NAV ENDS HERE */}
      {/* CHATS STARTS HERE */}
      <div className="chat-area">
        <div className="ChatTopnav">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={2}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div id="first">
              {activeSlide === 0 ? (
                <div
                  style={{
                    padding: "2vw",
                    textAlign: "center",
                    borderBottom: "3px solid  rgb(29, 157, 243)",
                    fontWeight: "bold",
                    color: "rgb(29, 157, 243)",
                  }}
                  className="status-all"
                >
                  {firstTabname}
                </div>
              ) : (
                <div
                  style={{ padding: "2vw", textAlign: "center" }}
                  className="status-all"
                >
                  {firstTabname}
                </div>
              )}
            </div>
            <div id="second">
              {activeSlide === 1 ? (
                <div
                  style={{
                    padding: "2vw",
                    borderBottom: "3px solid  rgb(29, 157, 243)",
                    fontWeight: "bold",
                    color: "rgb(29, 157, 243)",
                    textAlign: "center",
                  }}
                  className="status-sold"
                >
                  {secondTabname}
                </div>
              ) : (
                <div
                  style={{ padding: "2vw", textAlign: "center" }}
                  className="status-sold"
                >
                  {secondTabname}
                </div>
              )}
            </div>
          </Slider>
        </div>

        <Slider
          {...settings}
          id="slicksforthat"
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div
            className={
              screenname === "chatting"
                ? "chattingcomponent"
                : screenname === "account"
                ? "accountuicomponent"
                : screenname === "accountad"
                ? "accountuiadscomponent"
                : null
            }
            id="AllMessages"
          >
            {firstSlideContent}
          </div>
          <div
            className={
              screenname === "chatting"
                ? "chattingcomponent"
                : screenname === "account"
                ? "accountuicomponent"
                : screenname === "accountad"
                ? "accountuiadscomponent"
                : null
            }
            id="SellingMessages"
          >
            {secondSlideContent}
          </div>
        </Slider>
      </div>
      {/* CHATS ENDS HERE */}
      {/* CHAT AREA ENDS HERE */}
    </div>
  );
};
