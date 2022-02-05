import React, { useState } from "react";
import "./chatarchive.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import chatProduct from "../../../assets/profile.jpg";
export const ChatArchive = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [deletechat, setdeletechat] = useState(false);
  const Listchat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  // const ProductArchive = () => {
  //   return
  // };

  return (
    <div>
      <div className="ChatTopnav">
        <Slider
          // asNavFor={nav1}
          // ref={slider2 => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="ChattingTab">All</div>
          <div className="ChattingTab">Buying</div>
          <div className="ChattingTab">Selling</div>
        </Slider>
      </div>
      <Slider {...settings}>
        <div className="usermessages">
          {Listchat.map((x, i) => {
            return (
              <div key={i} className="chatarchive">
                <div className="leftsidearchive">
                  <div
                    style={{ backgroundImage: `url(${chatProduct})` }}
                    className="productimage"
                  />
                  <div className="productinfo">
                    <h3>Lenovo 2018</h3>
                    <p>Hey will you sell that item.</p>
                  </div>
                </div>
                <div className="rightsidearchive">
                  <p>2022-01-28</p>
                  <img
                    onClick={() => setdeletechat(!deletechat)}
                    alt="threedots"
                    src={require("../../../assets/icon/three-dot.svg").default}
                  />
                  {deletechat && <div className="productArchive">Delete</div>}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
