import React, { useState, useContext } from "react";
// import { InputSellContext } from "../../services/sell.input.context";
import { Theme } from "./../../infrastructure/theme/index";
import { InputSellContext } from "./../../services/sell.input.context";
export const TagsContent = (props) => {
  const { bg, text, theme } = Theme.colors;

  const { tags, setTags, TextC, setTextC } = useContext(InputSellContext);
  // this is mock data for frontend development

  // mock data ends here for frontend development
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
        className="tags-container"
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
                  marr={2.5}
                  borR={10}
                  jus="center"
                  className="created-tags-list"
                >
                  <div
                    className="tag-remove-button"
                    tblC={bg.red}
                    tofl
                    height="15px"
                    width="15px"
                    touchable
                    position="absolute"
                    Right="3"
                    Top="3"
                    onClick={() => {
                      RemovingTags(tags[i]);
                    }}
                  >
                    <div />
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

        {length === 200 ? null : (
          <input
            type="text"
            // maxLength={200 - length}
            value={TextC}
            onChange={(e) => {
              setTextC(e.target.value);
            }}
            // onChangeText={(e) => setTextC(e)}
            onSubmitEditing={() => {
              setTextC("");
              TextC.length > 3 && setTags([...tags, TextC]);
            }}
            placeholder="Create your Tag / use , to saperate"
            style={{
              // border: "1px solid grey",
              borderRadius: "5px",
              // width: tags.length ? "20%" : "90%",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p ali="left">Set effective tags as your ad.</p>
        <div style={{ display: "flex" }}>
          <p color={length + TextC.length === 200 && bg.red}>
            {length + TextC.length}
          </p>
          <p>/200</p>
        </div>
      </div>
    </>
  );
};
