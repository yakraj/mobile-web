import React, { useContext, useEffect } from "react";
import "./component/productarchive.css";
import Background from "../../../assets/mobile.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
export const ProductArchive = ({ deleter, sold, sellmsg, Archives = [] }) => {
  const { usercrd, signedin, UpdateFavourites, favourites } =
    useContext(UserContext);
  const navigate = useNavigate();

  const navigateNow = (id) => {
    navigate(id);
  };

  return Archives.length ? (
    Archives.map((x, i) => {
      return signedin && usercrd.username === x.seller ? null : (
        <div key={i} style={{ width: "48%", textDecoration: "none" }}>
          <div id="productArchive">
            <div
              onClick={() => navigateNow(`/product/${x.adid}`)}
              className="productImage"
              style={{
                backgroundImage: `url(https://storage.googleapis.com/post-thumbnail/${x.thumbnail})`,
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
                <div
                  onClick={() => navigateNow(`/product/${x.adid}`)}
                  className="productdetail"
                >
                  <h2 className="productPrice">Rs. {x.price}</h2>
                  <h1 className="productTitle">{x.title}</h1>
                </div>
                {/* right side */}
                {deleter ? (
                  <div
                    style={{ background: "red" }}
                    onClick={() => console.log("hearted")}
                    className="heart"
                  >
                    <img
                      style={{ height: "22px", width: "22px" }}
                      src={require("../../../assets/icon/bin.png")}
                      alt="heart "
                    />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      signedin
                        ? UpdateFavourites(usercrd.username, x.adid)
                        : navigate("/login-user")
                    }
                    className="heart"
                  >
                    <img
                      className={
                        favourites.length && favourites.includes(x.adid)
                          ? "blackred"
                          : ""
                      }
                      style={{
                        height: "22px",
                        width: "22px",
                        cursor: "pointer",
                      }}
                      src={require("../../../assets/icon/heart.png")}
                      alt="heart "
                    />
                  </div>
                )}
              </div>
              <div
                onClick={() => navigateNow(`/product/${x.adid}`)}
                className="locationContainer"
              >
                <img
                  className="blackblue"
                  style={{ height: "20px", width: "20px" }}
                  src={require("../../../assets/icon/location.png")}
                  alt="heart "
                />
                <p className="addresslabel">{x.address}</p>
              </div>
            </div>
            {sold && <div className="productmarksold">sold</div>}
          </div>
        </div>
      );
    })
  ) : (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        width="50%"
        src={require("../../../assets/empty.png")}
        alt="empty "
      />
      <h4>Did not found Anything</h4>
      {sellmsg ? (
        <div>
          <h3 style={{ margin: 0 }}>Start Selling</h3>
          <h4 onClick={() => navigate("sell-seco-catogery")} className="button">
            Sell Now
          </h4>
        </div>
      ) : null}
    </div>
  );
};
