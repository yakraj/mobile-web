import React, { useState, useEffect, lodash } from "react";

export const NewInputSellContext = React.createContext();

export const NewInputSellProvider = ({ children }) => {
  const [adTitle, setadTitle] = useState("");
  const [adDescription, setadDescription] = useState("");
  const [adPrice, setadPrice] = useState("");
  const [TextC, setTextC] = useState("");
  const [tags, setTags] = useState([]);
  const [catogery, setcatogery] = useState("");
  const [subcatogery, setSubcatogery] = useState("");

  return (
    <NewInputSellContext.Provider
      value={{
        adTitle,
        setadTitle,
        adDescription,
        setadDescription,
        adPrice,
        setadPrice,
        TextC,
        setTextC,
        tags,
        setTags,
        catogery,
        setcatogery,
        subcatogery,
        setSubcatogery,
      }}
    >
      {children}
    </NewInputSellContext.Provider>
  );
};
