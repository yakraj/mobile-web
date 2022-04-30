import React, { useContext, useState, useRef, useEffect } from "react";
import { Topbar } from "../../components/global/topbar";
import { SearchResultArchive } from "./search.result.archive";
import "./searchresult.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../services/search.context";
import { UserContext } from "../../services/user.contex";
export const SearchResult = () => {
  const navigate = useNavigate();
  const { lattitude, longitude, signedin } = useContext(UserContext);
  const {
    searchKeyword,
    loadingAds,
    gottenAds,
    ReqAds,
    data5km,
    setdata5km,
    data10km,
    setdata10km,
    data20km,
    setdata20km,
    data50km,
    setdata50km,
    in5km,
    in10km,
    in20km,
    in50km,
    Status,
    setStatus,
  } = useContext(SearchContext);

  const km5 = useRef();
  const km10 = useRef();
  const km20 = useRef();
  const km50 = useRef();

  useEffect(() => {
    setStatus([...Status, "km5"]);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top10km = km10.current.getBoundingClientRect().top;
      const top20km = km20.current.getBoundingClientRect().top;
      const top50km = km50.current.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top10km < height && top10km > 500) {
        setdata10km("near 10 km");
      }
      if (top20km < height && top20km > 500) {
        setdata20km("near 20 km");
      }
      if (top50km < height && top50km > 500) {
        setdata50km("near 50 km");
      }
    });
  });

  console.log(Status);

  useEffect(() => {
    // console.log(lattitude, longitude);
    Status.includes("km5") &&
      !Status.includes("km10") &&
      ReqAds(searchKeyword, lattitude, longitude, 10, in5km.length);
    Status.includes("km5") &&
      !Status.includes("km10") &&
      setStatus([...Status, "km10"]);
  }, [data10km, lattitude, longitude]);
  useEffect(() => {
    Status.includes("km10") &&
      !Status.includes("km20") &&
      ReqAds(
        searchKeyword,
        lattitude,
        longitude,
        20,
        in5km.length + in10km.length
      );
    Status.includes("km10") &&
      !Status.includes("km20") &&
      setStatus([...Status, "km20"]);
  }, [data20km, lattitude, longitude]);
  useEffect(() => {
    Status.includes("km20") &&
      !Status.includes("km50") &&
      ReqAds(
        searchKeyword,
        lattitude,
        longitude,
        50,
        in5km.length + in10km.length + in20km.length
      );
    Status.includes("km20") &&
      !Status.includes("km50") &&
      setStatus([...Status, "km50"]);
  }, [data50km, lattitude, longitude]);

  return (
    <div className="search-result-container">
      <div className="search-topbar">
        <div className="searchbar-left">
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="blackwhite"
            alt="return"
            src={require("../../../assets/icon/back.png")}
          />
          <h4 onClick={() => navigate(-1)}>{searchKeyword}</h4>
        </div>
        <img
          onClick={() => {
            signedin ? navigate("/usermyfavourite") : navigate("/login-user");
          }}
          className="blackred"
          alt="return"
          src={require("../../../assets/icon/heart.png")}
        />
      </div>

      <div className="SearchResult">
        {/* for first 5 km */}
        <div className="Search-devide-basket">
          <div ref={km5} style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>5 KM</p>
            </div>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "200vh",
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              content area
            </div>
            {/* <SearchResultArchive archives={gottenAds} /> */}
          </div>
        </div>
        {/* for first 10 km */}
        <div
          style={{ display: Status.includes("km5") ? "block" : "none" }}
          className="Search-devide-basket"
        >
          <div ref={km10} style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>10 KM</p>
            </div>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "200vh",
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              content area
            </div>
            {/* <SearchResultArchive archives={gottenAds} /> */}
          </div>
        </div>
        {/* for first 20 km */}
        <div
          style={{ display: Status.includes("km10") ? "block" : "none" }}
          className="Search-devide-basket"
        >
          <div ref={km20} style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>20 KM</p>
            </div>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "200vh",
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              content area
            </div>
            {/* <SearchResultArchive archives={gottenAds} /> */}
          </div>
        </div>
        {/* for first 50 km */}
        <div
          style={{ display: Status.includes("km20") ? "block" : "none" }}
          className="Search-devide-basket"
        >
          <div ref={km50} style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>50 KM</p>
            </div>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "200vh",
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              content area
            </div>
            {/* <SearchResultArchive archives={gottenAds} /> */}
          </div>
        </div>

        {/* loadingAds ? (
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
          ) : (
            <div className="Search-devide-basket">
              {gottenAds.length ? (
                <div style={{ position: "sticky", top: "0" }}>
                  <div className="searchresulttitle">
                    <p>5 KM</p>
                  </div>
                  <hr />
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <SearchResultArchive archives={gottenAds} />
              </div>
            </div>
          ) */
        /* <div className="Search-devide-basket">
          <div style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>10 KM</p>
            </div>

            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
          </div>
        </div>
        <div className="Search-devide-basket">
          <div style={{ position: "sticky", top: "0" }}>
            <div className="searchresulttitle">
              <p>15 KM</p>
            </div>

            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
            <SearchResultArchive />
          </div>
        </div> */}
      </div>
    </div>
  );
};
