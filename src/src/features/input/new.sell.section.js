import React, { useState, useContext, useEffect } from "react";
import { TextInput, ScrollView } from "react-native";
import { Text } from "../../components/topography/text.component";
import { View } from "../../components/division/view.division";
import { HR1 } from "../../components/global/global.component";
import { TopBar } from "../../components/global/topnavbar.global";
import { SectionPart } from "./properties.sell";
import { NewInputSellContext } from "../../services/new.sell.context";
import { TagsContent } from "./tags.subcomponent";
import { set } from "react-native-reanimated";
import { Theme } from "./../../infrastructure/theme/index";

export const NewInputImportantInfo = ({ navigation, route }) => {
  const { bg, text, theme } = Theme.colors;

  const {
    adTitle,
    setadTitle,
    adDescription,
    setadDescription,
    adPrice,
    setadPrice,
    setcatogery,
    setSubcatogery,
  } = useContext(NewInputSellContext);
  const [TextC, setTextC] = useState("");
  //  this is for tags
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setcatogery(route.params.catogery);
    setSubcatogery(route.params.subcatogery);
  });

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
        <Text size={20} weight="bold" marT={5}>
          {title}
        </Text>

        {children}

        <HR1 />
      </>
    );
  };

  const TextHint = ({ title, hint, adTitle }) => {
    return (
      <View width="100%" ali="flex-start">
        <Text ali="left">{hint}</Text>
        {title === "Description" || title === "Add title" ? (
          <View fdr="row" position="absolute" Right="0" Bottom="0">
            <Text
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
            </Text>
            <Text>/{title === "Add title" ? 70 : 2000}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <>
      <TopBar navigation={navigation}>Important Information</TopBar>
      <ScrollView>
        <View jus="flex-start" ali="flex-start" padd={10}>
          {route.params.RenderItems && (
            <View fdr="row">
              <Text weight="bold">Catogery: </Text>
              <Text>{route.params.catogery}</Text>
            </View>
          )}
          {route.params.RenderItems && (
            <>
              <View fdr="row">
                <Text weight="bold">Sub-catogery: </Text>
                <Text>{route.params.subcatogery}</Text>
              </View>
              <HR1 />
            </>
          )}

          <TextField multiline={false} title="Add title" />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: text.grey,
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              color: bg.grey,
            }}
            maxLength={70}
            onChangeText={(e) => setadTitle(e)}
            defaultValue={adTitle}
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
          <TextField title="Description" multiline={true} />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: text.grey,
              borderRadius: 5,
              padding: 8,
              fontSize: 15,
              marginTop: 5,
              width: "100%",
              color: bg.grey,
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

          {route.params.price && (
            <>
              <TextField
                multiline={true}
                dvalue="₹.|  "
                keytype="keytype"
                title="Price"
              />
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: text.grey,
                  borderRadius: 5,
                  padding: 8,
                  fontSize: 15,
                  marginTop: 5,
                  width: "100%",
                  color: bg.grey,
                }}
                keytype="keytype"
                maxLength={10}
                onChangeText={(e) => setadPrice(e)}
                defaultValue={"₹."}
                Value={adPrice}
                // placeholder={placeholder}
              />
              <TextHint
                // adTitle={adDescription}
                title="Price"
                hint="Set suitable price of your Ad."
              />
            </>
          )}

          {/* tags starts from here */}
          <Text size={20} weight="bold" marT={5}>
            Tags
          </Text>
          <HR1 />
          <TagsContent
            setTags={setTags}
            tags={tags}
            TextC={TextC}
            setTextC={setTextC}
          />
          {/* tags ends at here */}
          <View
            onpress={() => navigation.navigate("upload-images")}
            tblC={bg.green}
            touchable
            width="100%"
            padd={10}
            bcC={bg.nextInput}
            border="1px grey"
            borR={5}
            marT={10}
          >
            <Text size={25} color={text.white} weight="bold">
              Next
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
