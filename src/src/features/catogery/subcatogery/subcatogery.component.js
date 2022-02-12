import React from "react";
import "./subcatogery.cat.css";
import { SecondCato } from "../component/secondCato.details";
import { Properties } from "../component/component.details";
import { Theme } from "../../../infrastructure/theme/index";
import { Topbar } from "./../../../components/global/topbar";
import { Link, useLocation } from "react-router-dom";
export const SubCatogery = (props) => {
  let location = useLocation();
  // console.log(location.state);
  // const { navigation } = props;
  const { mapCat, Cato } = location.state;
  const { bg } = Theme.colors;
  // return <h1>hello there</h1>;
  return mapCat ? (
    <>
      <Topbar title={mapCat}></Topbar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="subcatogery-container">
          {Cato.map((pro, i) => {
            return (
              <div className="subcatogery-icon-container" key={i}>
                {Cato[i].icon ? (
                  <img alt="icons" width="60px" src={Cato[i].icon} />
                ) : null}

                <h4>{Cato[i].title}</h4>
              </div>
            );
          })}
        </div>
        {Cato && (
          <div
            className="subcatogery-view-all-button"
            touchable
            fdr="row"
            width="85%"
            bcC={bg.fadeskyblue}
            jus="center"
            padd="10"
            marL="27"
            borR="15"
          >
            <img
              alt="view all"
              style={{ width: "30px", filter: "invert(0.5)" }}
              src={require("../../../../assets/catogery/more.svg").default}
            />
            <h3 marL="10" size="20" weight="bold">
              View All
            </h3>
          </div>
        )}
      </div>
    </>
  ) : (
    <div>
      <h4>hello</h4>
    </div>
  );
};
