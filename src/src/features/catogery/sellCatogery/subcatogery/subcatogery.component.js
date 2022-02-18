import React from "react";
import "../../subcatogery/subcatogery.cat.css";
import { SecondCato } from "../../component/secondCato.details";
import { Properties } from "../../component/component.details";
import { Theme } from "../../../../infrastructure/theme/index";
import { Topbar } from "../../../../components/global/topbar";
import { Link, useLocation } from "react-router-dom";
export const SellSubCatogery = (props) => {
  let location = useLocation();
  // console.log(location.state);
  // const { navigation } = props;
  const { mapCat, Cato, catogery, price } = location.state;

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
              <Link
                style={{ textDecoration: "none" }}
                to={Cato[i].to === "skip" ? "/important-info" : "/input-sell"}
                state={{
                  catogery: catogery,
                  subcatogery: Cato[i].title,
                  RenderItems: Cato[i].RenderItems,
                  price: price,
                }}
              >
                <div className="subcatogery-icon-container" key={i}>
                  {Cato[i].icon ? (
                    <img alt="icons" width="60px" src={Cato[i].icon} />
                  ) : null}

                  <h4>{Cato[i].title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div>
      <h4>hello</h4>
    </div>
  );
};
