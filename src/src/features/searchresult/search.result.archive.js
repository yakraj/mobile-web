import React, { useContext } from "react";
import "./search.result.archive.css";
import Background from "../../../assets/iphone.jpg";
import { SearchContext } from "../../services/search.context";
import { host } from "../../services/host.network";
import { useNavigate } from "react-router-dom";
export const SearchResultArchive = (Archive) => {
  const navigate = useNavigate();
  const { gottenAds, loadingAds } = useContext(SearchContext);

  return loadingAds ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img
        width="50%"
        alt="archives"
        src={require("../../../assets/loading.gif")}
      />
      <h3>Loading...</h3>
    </div>
  ) : gottenAds.length ? (
    gottenAds.map((x, i) => {
      return (
        <div
          key={i}
          onClick={() => navigate(`/product/${x.adid}`)}
          className="search-result-archive"
        >
          <div
            className="search-result-image"
            style={{
              backgroundImage: `url(${host}/product-thumbnail/${x.thumbnail})`,
              height: "200px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="search-item-result">
            <h4 className="title">{x.title}</h4>
            {/* <p>There is not enought information</p> */}
            <h4 className="price">₹ {x.price}</h4>
            <div className="location-info-search">
              <img
                alt="navigate"
                width={20}
                height={20}
                src={require("../../../assets/icon/location.png")}
              />
              <p style={{ marginLeft: "5px", textTransform: "capitalize" }}>
                {x.address}
              </p>
            </div>
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
      <h4>There Are No Matching Results.</h4>
    </div>
  );
};
