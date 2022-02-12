import React from "react";
import "./firstcat.css";
import { firstCat } from "./component/firstCato.details";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";

export const FirstCat = ({ navigation }) => {
  return (
    <>
      <Topbar title="Catogeries ">Catogeries </Topbar>
      <div className="first-catogery-container">
        {firstCat.map((cat, i) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={"/" + firstCat[i].navigate}
              state={{ mapCat: firstCat[i].mapCat, Cato: firstCat[i].payload }}
            >
              <div className="first-catogery-touchable">
                <div className="first-catogery-icon">
                  <img
                    alt="hello"
                    raised
                    size={35}
                    color="grey"
                    style={{ filter: "invert(0.5)" }}
                    src={firstCat[i].image.default}
                  />
                </div>
                <h3 ali="center" size={firstCat[i].font} weight="bold">
                  {firstCat[i].title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
