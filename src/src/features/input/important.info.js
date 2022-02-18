import React, { useState, useContext } from "react";
import { SectionPart } from "./properties.sell";
import "./importantinformtaion.css";
// import { InputSellContext } from "../../services/sell.input.context";
// import { UserContext } from "../../services/user.contex";
import { TagsContent } from "./tags.subcomponent";
import { Theme } from "../../infrastructure/theme/index";
import { Topbar } from "./../../components/global/topbar";
import { Link, useLocation } from "react-router-dom";
export const InputImportantInfo = (props, { navigation, route }) => {
  const location = useLocation();
  const { RenderItems, catogery, price, subcatogery } = location.state;
  const {
    UsedDuration,
    setUsedDuration, // for Brandname
    Brandname,
    setBrandname, // for Monitor
    MonitorType,
    setMonitorType,
    MonitorSize,
    setMonitorSize,
    ComputerStorage,
    setComputerStorage,
    ComputerStorageType,
    setComputerStorageType,
    Printer,
    setPrinter,
    Bookyear,
    setBookAuthor,
    setBookyear,
    ClothSize,
    setClothSize,
    PetGender,
    setPetGender,
    SalaryPeriod,
    setSalaryPeriod,
    WorkPosition,
    setWorkPosition,
    SalaryAmount,
    setSalaryAmount,
    // adTitle,
    setadTitle,
    // adDescription,
    setadDescription,
    adPrice,
    setadPrice,
    adTags,
    setadTags,
    tags,
    setTags,
  } = props;
  // useContext(InputSellContext);

  // this is mock data for trial
  var adTitle = "";
  var adDescription = "";
  // mock data ends here for trial
  const { bg, text, theme } = Theme.colors;
  const [TextC, setTextC] = useState("");
  //  this is for tags
  const { username } = props;
  // useContext(UserContext);
  const TextField = ({
    multiline,
    title,
    hint,
    dvalue,
    keytype,
    showPrice,
    setadTitle,
    adTitle,
    children,
  }) => {
    const [Desclen, setDesclen] = useState("");

    return (
      <div className="title-text-container">
        <h3 size={20} weight="bold" marT={5}>
          {title}
        </h3>

        {children}
      </div>
    );
  };

  const TextHint = ({ title, hint, adTitle }) => {
    return (
      <div className="title-hint-container">
        <p ali="left">{hint}</p>
        {title === "Description" || title === "Add title" ? (
          <div>
            <p
            // color={
            //   title === "Add title"
            //     ? adTitle.length == 70
            //       ? text.red
            //       : text.grey
            //     : adTitle.length == 2000
            //     ? text.red
            //     : text.grey
            // }
            >
              {adTitle.length}
            </p>
            <p>/{title === "Add title" ? 70 : 2000}</p>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <Topbar title="Important Information" />
      <div>
        <div className="important-information-container">
          {/* {RenderItems && (
            <div fdr="row">
              <h3 weight="bold">Catogery: </h3>
              <h3>{catogery}</h3>
            </div>
          )}
          {RenderItems && (
            <>
              <div fdr="row">
                <h3 weight="bold">Sub-catogery: </h3>
                <h3>{subcatogery}</h3>
              </div>
            </>
          )} */}

          <TextField type="text" multiline={false} title="Add title" />
          <input
            type="text"
            style={{
              borderWidth: 1,
              borderColor: bg.grey,
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              color: bg.grey,
            }}
            // maxLength={70}
            // onChangeText={(e) => setadTitle(e)}
            // defaultValue={adTitle}
            // placeholder={placeholder}
          />
          <TextHint
            adTitle={adTitle}
            title="Add title"
            hint="Add attractive title of your Ad."
          />

          {/* <TextInput
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              color: "grey",
            }}
            onChangeText={(e) => setadTitle(e)}
           set
            defaultValue={adTitle}
            // placeholder={placeholder}
          /> */}
          <TextField type="text" title="Description" multiline={true} />
          <textarea
            type="text"
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              boxSizing: "border-box",
              color: text.grey,
            }}
            // maxLength={2000}
            multiline={true}
            onChangeText={(e) => setadDescription(e)}
            defaultValue={adDescription}
            // placeholder={placeholder}
          />
          <TextHint
            adTitle={adDescription}
            title="Description"
            hint="Add brif description about your product, what makes customer buy your product as like features, condition or your selling reason."
          />
          {RenderItems &&
            RenderItems.map((ren, i) => {
              return (
                <SectionPart
                  key={i}
                  property={RenderItems[i].property}
                  find={eval(RenderItems[i].find)}
                  title={RenderItems[i].title}
                  SetOn={eval(RenderItems[i].SetOn)}
                  items={RenderItems[i].items}
                  keytype={RenderItems[i].keytype}
                  placeholder={RenderItems[i].placeholder}
                  Item={RenderItems[i].Item}
                  // maxLength={
                  // RenderItems[i].maxLength ? RenderItems[i].maxLength : null
                  // }
                  labelDesc={RenderItems[i].labelDesc}
                />
              );
            })}

          {price && (
            <div ali="flex-start" width="100%">
              <TextField
                type="text"
                dvalue="₹.|  "
                keytype="keytype"
                title="Price"
              />
              <div
                style={{
                  position: "absolute",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
                position="absolute"
                Left="7"
                Top="51"
              >
                <img
                  alt="rs thumb"
                  height="20"
                  width="15"
                  src={require("../../../assets/rs.png")}
                />
              </div>
              <input
                type="text"
                keyboardType="number-pad"
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: "25px",
                  fontSize: 15,
                  marginTop: 5,
                  width: "100%",
                  color: text.grey,
                }}
                // maxLength={10}
                onChangeText={(e) => setadPrice(e)}
                defaultValue={adPrice}

                // placeholder={placeholder}
              />
              <TextHint
                adTitle={adDescription}
                title="Price"
                hint="Set suitable price of your Ad."
              />
            </div>
          )}

          {/* tags starts from here */}
          <TextField
            type="text"
            dvalue="₹.|  "
            keytype="keytype"
            title="Tags"
          />
          <TagsContent
            setTags={setTags}
            tags={tags}
            TextC={TextC}
            setTextC={setTextC}
          />
          {/* tags ends at here */}
          {/* {adTitle.length > 4 &&
            adDescription.length > 4 &&
            adPrice.length >= 2 && ( */}
          <Link style={{ textDecoration: "none" }} to="/upload-images">
            <div className="next-button-properties">
              <h3 weight="bold">Next</h3>
            </div>
          </Link>
          {/* )} */}
        </div>
      </div>
    </>
  );
};
