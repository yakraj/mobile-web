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
    ReqAgain,
  } = useContext(SearchContext);

  const ScrollEnd = useRef();

  const Kmwise = ({ data, dist }) => {
    return (
      <div className="Search-devide-basket">
        <div style={{ position: "sticky", top: "0" }}>
          <div className="searchresulttitle">
            <p>{dist} KM</p>
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
            {data.map((x, i) => {
              return <SearchResultArchive x={x} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  const NullReport = () => {
    return (
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
  var FiveK = gottenAds.filter((x) => x.distanceAway / 1000 < 5);

  var TenK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 5 && x.distanceAway / 1000 < 10
  );

  var TwentyK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 10 && x.distanceAway / 1000 < 20
  );

  var FiftyK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 20 && x.distanceAway / 1000 < 50
  );

  var HundredK = gottenAds.filter(
    (x) => x.distanceAway / 1000 > 50 && x.distanceAway / 1000 < 100
  );
  const [topval, ontapval] = useState(0);
  const [endscroll, onEndscroll] = useState();
  useEffect(() => {
    if (endscroll > topval + 5 || endscroll < topval - 5) {
      ReqAgain(searchKeyword, gottenAds.length);
    }
    // console.log(endscroll, " trigerred");
    // endscroll && console.log("i am useEffect");
    // endscroll && ReqAgain(searchKeyword, endscroll);
  }, [topval, endscroll]);

  useEffect(() => {
    ScrollEnd.current.addEventListener("scroll", function (e) {
      if (
        ScrollEnd.current.offsetHeight + ScrollEnd.current.scrollTop >=
        ScrollEnd.current.scrollHeight
      ) {
        onEndscroll(ScrollEnd.current.scrollTop);
      }
    });
  }, [gottenAds]);

  return (
    <div style={{ marginBottom: "70px" }} className="search-result-container">
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
      </div>
      <div style={{ height: "90vh", overflow: "auto" }} ref={ScrollEnd}>
        {FiveK.length ||
        TenK.length ||
        TwentyK.length ||
        FiftyK.length ||
        HundredK.length ? (
          // all scrollable data will be appear here
          <>
            {FiveK.length ? <Kmwise data={FiveK} dist={5} /> : null}
            {TenK.length ? <Kmwise data={TenK} dist={10} /> : null}
            {TwentyK.length ? <Kmwise data={TwentyK} dist={20} /> : null}
            {FiftyK.length ? <Kmwise data={FiftyK} dist={50} /> : null}
            {HundredK.length ? <Kmwise data={HundredK} dist={100} /> : null}
          </>
        ) : (
          !loadingAds && (
            // nothing found will appear here
            <NullReport />
          )
        )}
      </div>
      {loadingAds && (
        // if loading will appear here
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            width="80px"
            alt="last loading"
            src={require("../../../assets/loading.gif")}
          />
        </div>
      )}
    </div>
  );
};
