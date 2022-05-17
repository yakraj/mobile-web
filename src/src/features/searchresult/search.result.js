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
    data5kmload,
    data10kmload,
    data20kmload,
    data50kmload,
    setdata5kmload,
    setdata10kmload,
    setdata20kmload,
    setdata50kmload,
  } = useContext(SearchContext);

  const km5 = useRef();
  const km10 = useRef();
  const km20 = useRef();
  const km50 = useRef();
  const container = useRef();
  const Lastload = useRef();
  const [waitingKm, setwaitingKm] = useState();
  useEffect(() => {
    setStatus([...Status, "km5"]);
    setwaitingKm("");
  }, []);

  // useEffect(() => {
  //   if (waitingKm === "10") {
  //     !Status.includes("km10") &&
  //       ReqAds(searchKeyword, lattitude, longitude, waitingKm, in5km.length);
  //   } else if (waitingKm === "20") {
  //     !Status.includes("km20") &&
  //       ReqAds(
  //         searchKeyword,
  //         lattitude,
  //         longitude,
  //         waitingKm,
  //         in5km.length + in10km.length
  //       );
  //   } else if (waitingKm === "50") {
  //     !Status.includes("km50") &&
  //       ReqAds(
  //         searchKeyword,
  //         lattitude,
  //         longitude,
  //         waitingKm,
  //         in5km.length + in10km.length + in20km.length
  //       );
  //   }
  // }, [waitingKm]);

  useEffect(() => {
    const listner = () => {
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
    };
    window.addEventListener("scroll", listner);
    return () => {
      window.removeEventListener("scroll", listner);
    };
  }, []);

  // useEffect(() => {
  //   const listner = () => {
  //     const topp = Lastload.current.getBoundingClientRect().top;
  //     const height = window.innerHeight;
  //     // console.log(Status);
  //     if (topp < height) {
  //       if (Status.includes("km5") && !Status.includes("km10")) {
  //         setwaitingKm("10");
  //         console.log("i am waiting for 10 km data", Status);
  //       } else if (Status.includes("km10") && !Status.includes("km20")) {
  //         setwaitingKm("20");
  //       } else if (Status.includes("km20") && !Status.includes("km50")) {
  //         setwaitingKm("50");
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", listner);
  //   return () => {
  //     window.removeEventListener("scroll", listner);
  //   };
  // }, [Status]);

  // useEffect(() => {
  //   Status.includes("km5") &&
  //     !Status.includes("km10") &&
  //     ReqAds(searchKeyword, lattitude, longitude, 10, in5km.length);
  //   Status.includes("km5") &&
  //     !Status.includes("km10") &&
  //     setStatus([...Status, "km10"]);
  // }, [data10km]);
  // useEffect(() => {
  //   Status.includes("km10") &&
  //     !Status.includes("km20") &&
  //     ReqAds(
  //       searchKeyword,
  //       lattitude,
  //       longitude,
  //       20,
  //       in5km.length + in10km.length
  //     );
  //   Status.includes("km10") &&
  //     !Status.includes("km20") &&
  //     setStatus([...Status, "km20"]);
  // }, [data20km]);
  // useEffect(() => {
  //   Status.includes("km20") &&
  //     !Status.includes("km50") &&
  //     ReqAds(
  //       searchKeyword,
  //       lattitude,
  //       longitude,
  //       50,
  //       in5km.length + in10km.length + in20km.length
  //     );
  //   Status.includes("km20") &&
  //     !Status.includes("km50") &&
  //     setStatus([...Status, "km50"]);
  // }, [data50km]);
  return (
    <div
      style={{ marginBottom: "70px" }}
      ref={container}
      className="search-result-container"
    >
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

      {in5km.length + in10km.length + in20km.length + in50km.length < 1 ||
      data5kmload ||
      data10kmload ||
      data20kmload ||
      data50kmload ? (
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
      ) : (
        <div className="SearchResult">
          {/* for first 5 km */}
          <div
            style={{
              height: Status.includes("km5") && in5km.length ? "auto" : "0px",

              overflow: !Status.includes("km5") && !in5km.length && "hidden",
            }}
            className="Search-devide-basket"
          >
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
                  height: "auto",

                  flexWrap: "wrap",
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  // background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchResultArchive Archive={in5km} loading={data5kmload} />
              </div>
            </div>
          </div>
          {/* for first 10 km */}
          <div
            style={{
              height:
                !Status.includes("km5") || !in10km.length ? "0px" : "auto",

              overflow: !Status.includes("km5") || (!in10km.length && "hidden"),
            }}
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
                  height: "auto",

                  flexWrap: "wrap",
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  // background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchResultArchive Archive={in10km} loading={data10kmload} />
              </div>
            </div>
          </div>
          {/* for first 20 km */}
          <div
            style={{
              height: Status.includes("km10") && in20km.length ? "auto" : "0px",
              overflow: !Status.includes("km10") && !in20km.length && "hidden",
            }}
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
                  height: "auto",

                  flexWrap: "wrap",
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  // background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchResultArchive Archive={in20km} loading={data20kmload} />
              </div>
            </div>
          </div>
          {/* for first 50 km */}
          <div
            style={{
              height: Status.includes("km20") && in50km.length ? "auto" : "0px",
              overflow: !Status.includes("km20") && !in50km.length && "hidden",
            }}
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
                  height: "auto",

                  flexWrap: "wrap",
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  // background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchResultArchive Archive={in50km} loading={data50kmload} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        ref={Lastload}
        style={{
          height: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data5kmload || data10kmload || data20kmload || data50kmload ? (
          <img
            alt="last loading"
            src={require("../../../assets/loading.gif")}
            height="50px"
            width="50px"
          />
        ) : null}
      </div>
    </div>
  );
};
