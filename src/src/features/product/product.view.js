import React, { useEffect, useState, useRef, useContext } from "react";
import "./style/product.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { Link, useNavigate } from "react-router-dom";
import { Topbar } from "./../../components/global/topbar";
import user from "../../../assets/profile.jpg";
import PinchZoomPan from "react-image-zoom-pan";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./../../services/product.context";
import { host } from "../../services/host.network";
import { Imagehost } from "../../services/host.network";
import { UserContext } from "./../../services/user.contex";
import { ChattingContext } from "./../../services/chatting.context";
import { Gmap } from "./../GoogleMap/mapapi";
export const ProductView = () => {
  const contentDiv = useRef();
  useEffect(() => {
    // contentDiv.current.visibilityChanged(function (element, visible) {
    //   alert("do something");
    // });
  });

  const Map = () => {
    return (
      <GoogleMap
        mapTypeId="satellite"
        defaultZoom={18}
        defaultCenter={{
          lat: productInfo
            ? parseFloat(productInfo[3].lat)
            : 28.394345401646063,
          lng: productInfo
            ? parseFloat(productInfo[3].long)
            : 81.86099197715521,
        }}
      >
        <Marker
          position={{
            lat: productInfo && parseFloat(productInfo[3].lat),
            lng: productInfo && parseFloat(productInfo[3].long),
          }}
        />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  const MapNow = () => {
    return (
      <div style={{ height: "500px", width: "100%" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD-Fh1LhCtCgcsv_HWERqm4abtYpScMigs`}
          loadingElement={<div style={{ height: "100%", width: "100%" }} />}
          containerElement={<div style={{ height: "100%", width: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  };

  const navigate = useNavigate();
  const {
    ProductLV,
    ProductInfo,
    ProductLikes,
    userViews,
    GetonlyProductLikes,
    productInfo,
    webProductInfo,
    updateProductLike,
    webInfo,
    GetproductLikes,
    isloadingproductinfo,
  } = useContext(ProductContext);
  const { getUserchatData, setNewchatid, chatArchive, getUserschat } =
    useContext(ChattingContext);

  const {
    usercrd,
    signedin,
    favourites,
    UpdateFavourites,
    lattitude,
    longitude,
  } = useContext(UserContext);

  const data = useLocation();
  const [zoomImage, setZoomImage] = useState(false);
  useEffect(() => {
    data.hash ? setZoomImage(true) : setZoomImage(false);
  });
  useEffect(() => {
    ProductInfo(data.pathname.substring(9));
    ProductLV(data.pathname.substring(9));
    signedin
      ? GetproductLikes(data.pathname.substring(9), usercrd.username)
      : GetonlyProductLikes(data.pathname.substring(9));
    webProductInfo(data.pathname.substring(9));
  }, []);

  const Cfinder = () => {
    var contains = chatArchive.find(
      (x) => x.productid === data.pathname.substring(9)
    );
    if (contains) {
      return contains.chatid;
    } else {
      return undefined;
    }
  };
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  const LinkImage = () => {
    navigate("#images");
  };
  const LinkBack = () => {
    navigate("");
  };

  const LikeButton = () => {
    signedin
      ? updateProductLike(data.pathname.substring(9), usercrd.username)
      : navigate("/login-user");
  };
  const WishButton = () => {};
  const ChatButton = () => {
    signedin
      ? navigate("/chattingui", {
          state: {
            Details: {
              buyer: usercrd.username,
              seller: userViews[2],
              adid: data.pathname.substring(9),
              chatid: Cfinder(),
            },
          },
        })
      : navigate("/login-user");
    getUserchatData(userViews[2]);
    setNewchatid(undefined);
    Cfinder() && getUserschat(Cfinder());
  };

  const ImgePopup = () => {
    return (
      <div
        id="images"
        style={{
          display: zoomImage ? "block" : "none",
          height: "100vh",
          position: "fixed",
          width: "100%",
          background: "black",
          zIndex: 1001,
          top: 0,
          left: 0,
        }}
      >
        <div
          onClick={() => LinkBack()}
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            opacity: "0.7",
            borderRadius: "50%",
            background: "pink",
            zIndex: 101,
          }}
        >
          <img
            width="30px"
            src={require("../../../assets/icon/back.png")}
            alt="back imgae"
          />
        </div>
        <Slider {...settings}>
          {productInfo &&
            productInfo[2].images.map((x, i) => {
              return (
                <div key={i}>
                  {/* <div
                    style={{
                      height: "100vh",
                      // position: "fixed",
                      zIndex: 100,
                      top: 0,
                      left: 0,
                      backgroundImage: `url(http://localhost:5001/uploads/${x})`,
                      // backgroundImage: `url(https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg)`,
                    }}
                    className="productImages"
                  ></div> */}
                  <div style={{ background: "black", height: "100vh" }}>
                    <PinchZoomPan zoomButtons={false} position="center">
                      <img
                        width="100%"
                        alt="Test"
                        src={`${Imagehost}/uploads/${x}`}
                      />
                    </PinchZoomPan>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  };

  return isloadingproductinfo ? (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        width="70px"
        alt="loading"
        src={require("../../../assets/loading.gif")}
      />
      <h3>Loading...</h3>
    </div>
  ) : (
    <div
      style={{
        marginBottom: "10%",
        position: zoomImage ? "fixed" : "relative",
      }}
    >
      <Topbar title={webInfo && webInfo.title} />
      <ImgePopup />
      {/* this is for image section */}
      <Slider {...settings}>
        {productInfo &&
          productInfo[2].images.map((x, i) => {
            return (
              <div key={i}>
                <div
                  onClick={() => LinkImage()}
                  style={{
                    backgroundImage: `url(${host}/uploads/${x})`,
                    // backgroundImage: `url(https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg)`,
                  }}
                  className="productImages"
                ></div>
              </div>
            );
          })}
      </Slider>

      {/* this is for product and user info */}
      <div className="user-product-info">
        <div className="user-product-info-left">
          {/* icons */}
          <div onClick={() => LikeButton()} className="product-icons">
            {ProductLikes[0] ? (
              <img
                width="30px"
                alt="like"
                src={require("../../../assets/icon/like.png")}
              />
            ) : (
              <img
                width="30px"
                alt="like"
                src={require("../../../assets/icon/like.svg").default}
              />
            )}
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
              {ProductLikes}
            </p>
          </div>
          <div className="product-icons">
            {favourites.length &&
            favourites.includes(data.pathname.substring(9)) ? (
              <img
                onClick={() =>
                  signedin
                    ? UpdateFavourites(
                        usercrd.username,
                        data.pathname.substring(9)
                      )
                    : navigate("/login-user")
                }
                width="30px"
                alt="heart"
                className="blackred"
                src={require("../../../assets/icon/heart.png")}
              />
            ) : (
              <img
                onClick={() =>
                  signedin
                    ? UpdateFavourites(
                        usercrd.username,
                        data.pathname.substring(9)
                      )
                    : navigate("/login-user")
                }
                width="30px"
                alt="heart"
                src={require("../../../assets/icon/heart.svg").default}
              />
            )}
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
              wishlist
            </p>
          </div>
          <div className="product-icons">
            <img
              width="30px"
              alt="view"
              src={require("../../../assets/icon/view.svg").default}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
              {userViews && userViews[0].views}
            </p>
          </div>
        </div>
        <div className="userinfo">
          <div className="productinformation">
            <h3>
              {userViews &&
                userViews[1].firstname + " " + userViews[1].lastname}
            </h3>
            <p>View Profile</p>
          </div>
          {userViews && (
            <div
              className="userimage"
              style={{
                backgroundImage: `url(${Imagehost}/${userViews[1].image})`,
              }}
            />
          )}
        </div>
      </div>
      {/* product main info */}
      <div className="product-imp-info">
        <h3 className="product-title">{webInfo && webInfo.title}</h3>
        <div className="product-price-date">
          <h3>₹ {webInfo && webInfo.price}</h3>
          <p>27 June 2021</p>
        </div>
        <div className="product-location">
          <img
            className="blackblue"
            width="20px"
            src={require("../../../assets/icon/location.png")}
            alt="location"
          />
          <p>{webInfo && webInfo.address}</p>
        </div>
      </div>
      {/* product details container */}
      {productInfo && Object.keys(productInfo[0]).length ? (
        <div className="product-details">
          <div id="product" className="product-details-title">
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
            <h3>Product Details</h3>
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
          </div>
          {productInfo &&
            Object.keys(productInfo[0]).map((x, i) => {
              return (
                <h3
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "center",
                    margin: "4px",
                    color: "#000000c4",
                    fontSize: "15px",
                  }}
                  key={i}
                >
                  {x.replace("_", " ")}: {"  "}
                  <p
                    style={{ fontWeight: 600, marginLeft: "10px" }}
                    trans="uppercase"
                    weight="normal"
                  >
                    {Object.values(productInfo[0])[i]}
                  </p>
                </h3>
              );
            })}
        </div>
      ) : null}
      {/* product description */}
      {productInfo && productInfo[1].description && (
        <div className="product-details">
          <div className="product-details-title">
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
            <h3>Product Description</h3>
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
          </div>
          <p style={{ margin: "5px", textAlign: "center" }}>
            {productInfo && productInfo[1].description}
          </p>
        </div>
      )}

      {productInfo && (
        <div className="product-details">
          <div className="product-details-title">
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
            <h3>Location Information</h3>
            <img
              width="12%"
              height="12%"
              src={require("../../../assets/decorate.png")}
              alt="decorate"
            />
          </div>

          <MapNow />
        </div>
      )}

      {/* chat call action */}
      <div className="chatcall-section">
        <div
          ref={contentDiv}
          onClick={() => ChatButton()}
          className="chat-call-action"
        >
          <img
            alt="chat"
            src={require("../../../assets/navigation/chat.svg").default}
          />
          <h4>Chat</h4>
        </div>
        {userViews && userViews[3] && (
          <a
            style={{ textDecoration: "none" }}
            href={"tel:" + userViews[3]}
            className="chat-call-action"
          >
            <img
              width="15%"
              alt="chat"
              src={require("../../../assets/icon/call.png")}
            />
            <h4>Call</h4>
          </a>
        )}
      </div>
    </div>
  );
};
