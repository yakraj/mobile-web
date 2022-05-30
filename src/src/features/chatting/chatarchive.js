import React, { useState, useEffect, useRef, useContext } from "react";
import "./chatarchive.css";
import "./Account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import chatProduct from "../../../assets/profile.jpg";
import buyProduct from "../../../assets/iphone.jpg";
import sellProduct from "../../../assets/mobile.jpg";
import { Link } from "react-router-dom";
import { ThreeTotab } from "../../components/toptab/toptab";
import { ChattingContext } from "./../../services/chatting.context";
import { UserContext } from "./../../services/user.contex";

export const ChatArchive = (props) => {
  const { usercrd, signedin } = useContext(UserContext);
  const {
    chatArchive,
    setNewchatid,
    getUserchatData,
    getUserschat,
    deleteChatArchive,
    GetChatlist,
    setLastchatId,
  } = useContext(ChattingContext);

  useEffect(() => {
    signedin && GetChatlist(usercrd.username);
    setLastchatId("");
    // console.log("chat archive page");
  }, []);

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
    return Listchat.length ? (
      Listchat.map((x, i) => {
        return (
          <div key={i} className="chatarchive">
            <Link
              state={{
                Details: {
                  seller: x.seller,
                  buyer: x.buyer,
                  chatid: x.chatid,
                },
              }}
              onClick={() => {
                setNewchatid(undefined);
                getUserchatData(
                  x.buyer === usercrd.username ? x.seller : x.buyer
                );
                getUserschat(x.chatid);
              }}
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/chattingui",
                state: {
                  seller: x.seller,
                  buyer: x.buyer,
                  chatid: x.chatid,
                },
              }}
            >
              <div className="leftsidearchive">
                <div
                  style={{
                    backgroundImage: `url(https://storage.googleapis.com/post-thumbnail/${x.thumbnail})`,
                  }}
                  className="productimage"
                />
                <div className="chatproductinfo">
                  <h3>{x.title.substring(0, 20)}</h3>
                  <p>{x.lastchat.substring(0, 35)}</p>
                </div>
              </div>
            </Link>
            <div className="rightsidearchive">
              <p>{x.date.substring(0, 10)}</p>
              <img
                onClick={() => chatdeleter(i)}
                alt="threedots"
                style={{ cursor: "pointer", zIndex: 10 }}
                src={require("../../../assets/icon/three-dot.svg").default}
              />
              {deletechat === i && (
                <div
                  onClick={() => deleteChatArchive(x.chatid, usercrd.username)}
                  className="deleteproductArchive"
                >
                  Delete
                </div>
              )}
            </div>
          </div>
        );
      })
    ) : (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          alt="not signed in"
          width="100%"
          src={require("../../../assets/empty.png")}
        />
        <h2>You don't have any chats yet.</h2>
      </div>
    );
  };
  const AllMessage = () => {
    return <ChatAllcontent chatImage={chatProduct} Listchat={chatArchive} />;
  };
  const BuyMessage = () => {
    return (
      <ChatAllcontent
        chatImage={sellProduct}
        Listchat={chatArchive.filter((x) =>
          x.seller.includes(usercrd && usercrd.username)
        )}
      />
    );
  };
  const SellMessage = () => {
    return (
      <ChatAllcontent
        chatImage={buyProduct}
        Listchat={chatArchive.filter((x) =>
          x.buyer.includes(usercrd && usercrd.username)
        )}
      />
    );
  };
  const AllmessageFirst = <AllMessage />;
  const BuymessageSecond = <BuyMessage />;
  const SellmessageThird = <SellMessage />;

  // const ProductArchive = () => {
  //   return
  // };
  return signedin ? (
    <ThreeTotab
      firstSlideContent={AllmessageFirst}
      secondSlideContent={BuymessageSecond}
      thirdSlideContent={SellmessageThird}
      screenname="chatting"
      firstTabname="All"
      secondTabname="selling"
      thirdTabname="buying"
    />
  ) : (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        alt="not signed in"
        width="100%"
        src={require("../../../assets/chatting.png")}
      />
      <h2>Sign in to Start Chatting.</h2>
      <Link style={{ textDecoration: "none" }} to="/login-user">
        <div className="button"> Sign In</div>
      </Link>
    </div>
  );
};
