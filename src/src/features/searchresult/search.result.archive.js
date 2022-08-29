import React, { useContext } from "react";
import "./search.result.archive.css";
import Background from "../../../assets/iphone.jpg";
import { SearchContext } from "../../services/search.context";
import { host } from "../../services/host.network";
import { useNavigate } from "react-router-dom";
export const SearchResultArchive = ({ x }) => {
  // console.log(Archive.Archive);
  const navigate = useNavigate();
  const {
    gottenAds,
    loadingAds,
    setdata5kmload,
    setdata10kmload,
    setdata20kmload,
    setdata50kmload,
  } = useContext(SearchContext);
  return (
    <div
      onClick={() => navigate(`/product/${x.adid}`)}
      className="search-result-archive"
    >
      <div
        className="search-result-image"
        style={{
          backgroundImage: `url(https://storage.googleapis.com/post-thumbnail/${x.thumbnail})`,
          height: "200px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div className="search-item-result">
        <h4
          style={{ fontSize: "0.8rem", width: "85%" }}
          className="title productTitle"
        >
          {x.title}
        </h4>
        {/* <p>There is not enought information</p> */}
        <h4 className="price" style={{ color: "blue" }}>
          ₹ {x.price}
        </h4>
        <div className="location-info-search">
          <img
            alt="navigate"
            width={20}
            height={20}
            src={require("../../../assets/icon/location.png")}
          />
          <p
            className="addresslabel"
            style={{
              marginLeft: "5px",
              textTransform: "capitalize",
              width: "50%",
            }}
          >
            {x.address}
          </p>
        </div>
      </div>
    </div>
  );
};
