import React, { useState, useEffect } from "react";
import "./properties.css";
// import { InputSellConh3 } from "../../services/sell.input.conh3";
import { Theme } from "./../../infrastructure/theme/index";
import { Properties } from "../../features/catogery/component/component.details";
import { Topbar } from "../../components/global/topbar";
import { Link, useLocation } from "react-router-dom";
function rswitch(param, cases) {
  if (cases[param]) {
    return cases[param];
  } else {
    return cases.default;
  }
}

const { bg, text, theme } = Theme.colors;

export const SectionPart = ({
  property,
  title,
  SetOn,
  keytype,
  placeholder,
  items,
  find,
  Item,
  labelDesc,
  maxLength,
}) => {
  // const {
  //   ComputerGraphics,
  //   setComputerGraphics,
  //   ComputerGraphicsMemory,
  //   setComputerGraphicsMemory,
  //   facingDropdown,
  //   setComputerStorage,
  //   ComputerStorageType,
  //   setComputerStorageType,
  //   setFacingDropdown,
  //   setComputerProcessor,
  //   //  for used
  //   // used duration
  //   UsedMonths,
  //   setUsedMonths,
  //   UsedYears,
  //   setUsedYears,

  //   // for Monitor
  //   MonitorType,
  //   setMonitorType,
  //   MonitorSize,
  //   setMonitorSize,
  // } = props;

  // useConh3(InputSellConh3);

  const p = ({ children }) => {
    return (
      <h3 color="blue" size={13} opacity={0.5}>
        {children}
      </h3>
    );
  };
  return (
    <>
      <div>
        <h3 className="bold-tag underline">{title}</h3>
        {rswitch(property, {
          Text: (
            <>
              <input
                type="text"
                style={{
                  borderWidth: 1,
                  borderColor: bg.grey,
                  borderRadius: 5,
                  padding: 8,
                  fontSize: 15,
                  boxSizing: "border-box",
                  marginTop: 5,
                  width: "100%",
                }}
                placeholder={placeholder}
              />
              <p size={10} ali="left" opacity={0.5}>
                {labelDesc}
              </p>
            </>
          ),
          Two: Item && (
            <div className="twoinput">
              {Item[0].property === "Text" ? (
                <div style={{ width: "48%", boxSizing: "border-box" }}>
                  <input type="text" placeholder={Item[0].placeholder} />
                  <p>{Item[0].labelDesc}</p>
                </div>
              ) : (
                <div style={{ width: "48%" }}>
                  <div width="100%" marT={5} borR={5} border="1px grey">
                    <select
                      style={{
                        color: bg.black,
                        height: 50,
                        width: "100%",
                        color: "grey",
                        justifyContent: "center",
                        fontSize: 17,
                        h3Decoration: "underline",
                        borderWidth: 1,
                        borderColor: bg.grey,
                        borderRadius: "5px",
                      }}
                    >
                      {Item[0].items.map((we, i) => {
                        return (
                          <option
                            style={{
                              h3Transform: "uppercase",
                            }}
                            key={i}
                            label={Item[0].items[i]}
                            value={Item[0].items[i]}
                          >
                            {Item[0].items[i]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p>{Item[0].labelDesc}</p>
                </div>
              )}
              {Item[1].property === "Text" ? (
                <div style={{ width: "48%" }}>
                  <input type="text" placeholder={Item[1].placeholder} />
                  <p>{Item[1].labelDesc}</p>
                </div>
              ) : (
                <div style={{ width: "48%" }}>
                  <div width="100%" marT={5} borR={5} border="1px grey">
                    <select
                      style={{
                        color: bg.black,
                        height: 50,
                        width: "100%",
                        color: "grey",
                        justifyContent: "center",
                        fontSize: 17,
                        h3Decoration: "underline",
                        borderWidth: 1,
                        borderColor: bg.grey,
                        borderRadius: "5px",
                      }}
                    >
                      {Item[1].items.map((we, i) => {
                        return (
                          <option
                            style={{
                              h3Transform: "uppercase",
                            }}
                            key={i}
                            label={Item[1].items[i]}
                            value={Item[1].items[i]}
                          >
                            {Item[1].items[i]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p>{Item[1].labelDesc}</p>
                </div>
              )}
            </div>
          ),
          Radio: items && (
            <div className="radio-item">
              {items.map((it, i) => {
                return (
                  <div
                    className="radio-item-option"
                    bcC={find === items[i] ? bg.green : bg.white}
                  >
                    {items[i]}
                  </div>
                );
              })}
            </div>
          ),
          Picker: (
            <>
              <div style={{ margin: "5px" }}>
                <select
                  style={{
                    color: bg.black,
                    height: 50,
                    width: "100%",
                    color: "grey",
                    justifyContent: "center",
                    fontSize: 17,
                    h3Decoration: "underline",
                    borderWidth: 1,
                    borderColor: bg.grey,
                    borderRadius: "5px",
                  }}
                >
                  {items &&
                    items.map((we, i) => {
                      return (
                        <option
                          style={{
                            h3Transform: "uppercase",
                          }}
                          key={i}
                          label={items[i]}
                          value={items[i]}
                        >
                          {items[i]}
                        </option>
                      );
                    })}
                </select>
              </div>
              <p>{labelDesc}</p>
            </>
          ),
        })}
      </div>
    </>
  );
};

export const InputSell = (props) => {
  let location = useLocation();
  const { catogery, subcatogery, RenderItems, price } = location.state;

  const {
    facingDropdown,
    setFacingDropdown,
    SelectedItem,
    setSelectedItem,
    Bedrooms,
    setBedrooms,
    Furnishing,
    setFurnishing,
    ConstructionStatus,
    setConstructionStatus,
    ListedBy,
    setListedBy,
    Bachlors,
    setBachlors,
    CarParking,
    setCarParking,
    Bathrooms,
    setBathrooms,
    buildArea,
    setBuildArea,
    ApartFaceing,
    setApartFaceing,
    CarpetArea,
    setCarpetArea,
    // for Rent office and shop
    Washrooms,
    setWashrooms,
    // for Rend and sell Land and Plot
    PlotArea,
    setPlotArea,
    PlotLength,
    setPlotLength,
    PlotBreadth,
    setPlotBreadth,
    // for Paying guests an
    MealsInc,
    setMealsInc,
    // for RoomMate
    SearchGender,
    setSearchGender,
    ageRange,
    setageRange,
    RoommateFor,
    setRoommateFor,
    AgeRange,
    setAgeRange,
    // for Vehicle
    VehicleBrand,
    setVehicleBrand,
    VehicleModel,
    setVehicleModel,
    VehicleYear,
    setVehicleYear,
    VehicleFuel,
    setVehicleFuel,
    VehicleTransmission,
    setVehicleTransmission,
    KmDriver,
    setKmDriver,
    VehiclePartType,
    setVehiclePartType,
    // used duration
    UsedDuration,
    setUsedDuration,
    // for Jobs
    SalaryPeriod,
    setSalaryPeriod,
    WorkPosition,
    setWorkPosition,
    SalaryAmount,
    setSalaryAmount,
    // for computer
    ComputerProcessor,
    setComputerProcessor,
    ComputerRam,
    setComputerRam,
    ComputerStorage,
    setComputerStorage,
    ComputerStorageType,
    setComputerStorageType,
    ComputerGraphics,
    setComputerGraphics,
    ComputerGraphicsMemory,
    setComputerGraphicsMemory,
    ComputerMonitorAvail,
    setComputerMonitorAvail,
    ComputerAcc,
    setComputerAcc,
    // for Laptop
    LaptopScreen,
    setLaptopScreen,
    // for mobile
    MobileCamera,
    setMobileCamera,
    Mobilebattery,
    setMobilebattery,
    MobileOs,
    setMobileOs,
    Brandname,
    setBrandname,
    MonitorSize,
    setMonitorSize,
  } = props;
  // useConh3(InputSellConh3);

  // return <h1>hello this is properties</h1>;
  return (
    <>
      <Topbar title="Sell Your Product " />

      <div className="properties-body-container">
        <div>
          <h3 className="screen-title-tag bold-tag">
            Include Some Information
          </h3>
          {catogery && (
            <div className="cato-sub-hub">
              <h3>Catogery: </h3>
              <h4>{catogery}</h4>
            </div>
          )}
          {subcatogery && (
            <div className="cato-sub-hub">
              <h3>Sub-catogery: </h3>
              <h4>{subcatogery}</h4>
            </div>
          )}

          {RenderItems.map((ren, i) => {
            return (
              <SectionPart
                key={i}
                property={RenderItems[i].property}
                keytype={RenderItems[i].keytype}
                placeholder={RenderItems[i].placeholder}
                find={eval(RenderItems[i].find)}
                title={RenderItems[i].title}
                maxLength={
                  RenderItems[i].maxLength ? RenderItems[i].maxLength : null
                }
                SetOn={eval(RenderItems[i].SetOn)}
                items={RenderItems[i].items}
                Item={RenderItems[i].Item}
                labelDesc={RenderItems[i].labelDesc}
              />
            );
          })}
          <Link
            state={{
              price: price,

              RenderItems: null,
            }}
            style={{ textDecoration: "none" }}
            to="/important-info"
          >
            <div
              className="update-button next-button-properties"
              // tblC={bg.green}
              touchable
              width="100%"
              padd={10}
              // bcC={bg.skyblue}
              border="1px grey"
              borR={5}
              marT={10}
            >
              <h3 size={25} weight="bold">
                Next
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
