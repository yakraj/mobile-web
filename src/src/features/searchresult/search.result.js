import React, { useContext } from "react";
import { Topbar } from "../../components/global/topbar";
import { SearchResultArchive } from "./search.result.archive";
import "./searchresult.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../services/search.context";
import { UserContext } from "../../services/user.contex";
export const SearchResult = () => {
  const navigate = useNavigate();
  const { signedin } = useContext(UserContext);
  const { searchKeyword, LoadingAds, gottenAds } = useContext(SearchContext);

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
        {
          LoadingAds ? (
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
          )
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
        </div> */
        }
      </div>
    </div>
  );
};
