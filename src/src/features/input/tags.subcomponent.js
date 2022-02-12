import React, { useState, useContext } from "react";
// import { InputSellContext } from "../../services/sell.input.context";
import { Theme } from "./../../infrastructure/theme/index";
export const TagsContent = (props) => {
  const { bg, text, theme } = Theme.colors;

  const { tags, setTags, TextC, setTextC } = props;
  // useContext(InputSellContext);
  if (TextC.length > 3) {
    if (TextC.slice(-1) === ",") {
      setTextC("");
      setTags([...tags, TextC.slice(0, -1)]);
    }
  }
  const RemovingTags = (tag) => {
    setTags(tags.filter((x) => x !== tag));
  };
  var length = 0;

  tags.map((am, i) => (length = length + tags[i].length));

  return (
    <>
      <div
        border="1px blue"
        borR={5}
        fwr="wrap"
        width="100%"
        padd={5}
        marT={10}
        ali="center"
        jus="center"
        fdr="row"
      >
        {tags.length
          ? tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  padd={8}
                  bcC={bg.GraniteGray}
                  marr={2.5}
                  borR={10}
                  jus="center"
                >
                  <div
                    tblC={bg.red}
                    tofl
                    height="15px"
                    width="15px"
                    touchable
                    position="absolute"
                    Right="3"
                    Top="3"
                    onpress={() => {
                      console.log("presed");
                    }}
                  >
                    <div
                      height="15px"
                      width="2px"
                      bcC={bg.red}
                      transform="rotate(-45deg)"
                    />
                    <div
                      height="15px"
                      width="2px"
                      bcC={bg.red}
                      marT={-15}
                      transform="rotate(45deg)"
                    />
                  </div>

                  <h3
                    marR={10}
                    trans="capitalize"
                    size={15}
                    color={text.white}
                    weight="bold"
                  >
                    {tags[i]}
                  </h3>
                </div>
              );
            })
          : null}

        {length == 200 ? null : (
          <input
            type="text"
            maxLength={200 - length}
            value={TextC}
            onChangeText={(e) => setTextC(e)}
            onSubmitEditing={() => {
              setTextC("");
              TextC.length > 3 && setTags([...tags, TextC]);
            }}
            style={{
              borderBottomColor: bg.grey,
              borderBottomWidth: 2,
              minWidth: tags.length ? "20%" : "90%",
            }}
          />
        )}
      </div>
      <div fdr="row" width="100%" jus="space-between">
        <h3 ali="left">Set effective tags as your ad.</h3>
        <div fdr="row">
          <h3 color={length + TextC.length === 200 && bg.red}>
            {length + TextC.length}
          </h3>
          <p>/200</p>
        </div>
      </div>
    </>
  );
};
