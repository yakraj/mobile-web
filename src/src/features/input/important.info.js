import React, { useState, useContext } from "react";
import { SectionPart } from "./properties.sell";
// import { InputSellContext } from "../../services/sell.input.context";
// import { UserContext } from "../../services/user.contex";
import { TagsContent } from "./tags.subcomponent";
import { Theme } from "../../infrastructure/theme/index";
import { Topbar } from "./../../components/global/topbar";
export const InputImportantInfo = (props, { navigation, route }) => {
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
    adTitle,
    setadTitle,
    adDescription,
    setadDescription,
    adPrice,
    setadPrice,
    adTags,
    setadTags,
    tags,
    setTags,
  } = props;
  // useContext(InputSellContext);

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
      <>
        <h3 size={20} weight="bold" marT={5}>
          {title}
        </h3>

        {children}
      </>
    );
  };

  const TextHint = ({ title, hint, adTitle }) => {
    return (
      <div width="100%" ali="flex-start">
        <h3 ali="left">{hint}</h3>
        {title === "Description" || title === "Add title" ? (
          <div fdr="row" position="absolute" Right="0" Bottom="0">
            <h3
              color={
                title === "Add title"
                  ? adTitle.length == 70
                    ? text.red
                    : text.grey
                  : adTitle.length == 2000
                  ? text.red
                  : text.grey
              }
            >
              {adTitle.length}
            </h3>
            <h3>/{title === "Add title" ? 70 : 2000}</h3>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <Topbar navigation={navigation}>Important Information</Topbar>
      <div>
        <div jus="flex-start" ali="flex-start" padd={10}>
          {route.params.RenderItems && (
            <div fdr="row">
              <h3 weight="bold">Catogery: </h3>
              <h3>{route.params.catogery}</h3>
            </div>
          )}
          {route.params.RenderItems && (
            <>
              <div fdr="row">
                <h3 weight="bold">Sub-catogery: </h3>
                <h3>{route.params.subcatogery}</h3>
              </div>
            </>
          )}

          <input type="text" multiline={false} title="Add title" />
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
          <input type="text" title="Description" multiline={true} />
          <input
            type="text"
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              color: text.grey,
            }}
            maxLength={2000}
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
          {route.params.RenderItems &&
            route.params.RenderItems.map((ren, i) => {
              return (
                <SectionPart
                  key={i}
                  property={route.params.RenderItems[i].property}
                  find={eval(route.params.RenderItems[i].find)}
                  title={route.params.RenderItems[i].title}
                  SetOn={eval(route.params.RenderItems[i].SetOn)}
                  items={route.params.RenderItems[i].items}
                  keytype={route.params.RenderItems[i].keytype}
                  placeholder={route.params.RenderItems[i].placeholder}
                  Item={route.params.RenderItems[i].Item}
                  maxLength={
                    route.params.RenderItems[i].maxLength
                      ? route.params.RenderItems[i].maxLength
                      : null
                  }
                  labelDesc={route.params.RenderItems[i].labelDesc}
                />
              );
            })}

          {route.params.price && (
            <div ali="flex-start" width="100%">
              <input
                type="text"
                multiline={true}
                dvalue="₹.|  "
                keytype="keytype"
                title="Price"
              />
              <div position="absolute" Left="7" Top="51">
                <img
                  alt="rs thumb"
                  height="20"
                  opacity="0.5"
                  width="15"
                  source={require("../../../assets/rs.png")}
                />
              </div>
              <input
                type="text"
                keyboardType="number-pad"
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  paddingLeft: 25,
                  borderRadius: 5,
                  padding: 8,
                  fontSize: 15,
                  marginTop: 5,
                  width: "100%",
                  color: text.grey,
                }}
                maxLength={10}
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
          <h3 size={20} weight="bold" marT={5}>
            Tags
          </h3>
          <TagsContent
            setTags={setTags}
            tags={tags}
            TextC={TextC}
            setTextC={setTextC}
          />
          {/* tags ends at here */}
          {adTitle.length > 4 &&
            adDescription.length > 4 &&
            adPrice.length >= 2 && (
              <div
                onpress={() => navigation.navigate("upload-images")}
                tblC="green"
                touchable
                width="100%"
                padd={10}
                bcC={bg.nextInput}
                border="1px grey"
                borR={5}
                marT={10}
              >
                <h3 size={25} color={text.white} weight="bold">
                  Next
                </h3>
              </div>
            )}
        </div>
      </div>
    </>
  );
};
