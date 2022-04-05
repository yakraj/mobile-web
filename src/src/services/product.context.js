import React, { useState, useEffect } from "react";
import {
  GetProductLikes,
  UpdateProductLike,
  GetOnlyProductLikes,
  productLv,
  updateProductLike,
  WebInfo,
  productinfo,
} from "./components/product.service";
export const ProductContext = React.createContext();
export const ProductContextProvider = ({ children }) => {
  const [ProductLikes, setProductLikes] = useState(0);
  const [userViews, setuserViews] = useState();
  const [productInfo, setproductInfo] = useState();
  const [isloadingplv, setisloadingplv] = useState(false);
  const [isloadingproductinfo, setisloadingproductinfo] = useState(false);
  const [webInfo, setWebInfo] = useState();
  const GetproductLikes = (adid, user) => {
    GetProductLikes(adid, user).then((response) => setProductLikes(response));
  };
  const GetonlyProductLikes = (adid) => {
    GetOnlyProductLikes(adid).then((response) => setProductLikes(response));
  };

  const updateProductLike = (adid, user) => {
    UpdateProductLike(adid, user).then((response) => setProductLikes(response));
  };

  const ProductLV = (adid) => {
    setisloadingplv(true);
    productLv(adid).then((response) => {
      setuserViews(response);
      setisloadingplv(false);
    });
  };
  const ProductInfo = (adid) => {
    setproductInfo();
    setisloadingproductinfo(true);
    productinfo(adid).then((response) => {
      setproductInfo(response);
      setisloadingproductinfo(false);
    });
  };

  const webProductInfo = (adid) => {
    WebInfo(adid).then((response) => {
      setWebInfo(response);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        ProductLikes,
        GetproductLikes,
        updateProductLike,
        GetonlyProductLikes,
        ProductLV,
        userViews,
        ProductInfo,
        productInfo,
        isloadingplv,
        isloadingproductinfo,
        setisloadingplv,
        setisloadingproductinfo,
        webProductInfo,
        webInfo,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
