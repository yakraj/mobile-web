import React, { useContext } from "react";
import "../secondcatocomp.css";
import { SecondCato } from "../component/secondCato.details";
import { Topbar } from "../../../components/global/topbar";
import { Link, useLocation } from "react-router-dom";
import { InputSellContext } from "./../../../services/sell.input.context";
export const SellSecondCat = (props) => {
  const { uploadprocess } = useContext(InputSellContext);
  let location = useLocation();
  const { navigation, route } = props;
  return (
    <>
      <Topbar title="Sell Now on Sunaulo" />

      {uploadprocess ? (
        <div>A sell in onprogress</div>
      ) : (
        SecondCato.map((cat, i) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              state={{
                mapCat: SecondCato[i].mapCat,
                Cato: SecondCato[i].payload,
                catogery: SecondCato[i].title,
                price: SecondCato[i].title === "Jobs" ? false : true,
              }}
              to="/sell-sub-catogery"
            >
              <div jus="flex-start" ali="flex-start" key={i} width="100%">
                <div
                  // onpress={() =>
                  //   navigation.navigate("properties", )
                  // }
                  className="second-cato-all-cato"
                >
                  <div className="secnd-leftside">
                    <img
                      alt="hello"
                      width="30px"
                      name={SecondCato[i].icon}
                      type={SecondCato[i].source}
                      color="grey"
                      style={{ filter: "invert(0.5)", marginRight: "10px" }}
                      src={SecondCato[i].img}
                    />
                    <h3 marL="7" size={17} weight="bold">
                      {SecondCato[i].title}
                    </h3>
                  </div>
                  <img
                    alt="arrow"
                    width="35px"
                    style={{
                      filter: "invert(0.5)",
                      transform: "rotate(270deg)",
                    }}
                    src={require("../../../../assets/icon/expand.png")}
                  />
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};
