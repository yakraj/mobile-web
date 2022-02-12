import React from "react";
import { ProductArchive } from "./../productarchive/product.archive";
import { Topbar } from "./../../components/global/topbar";

export const UserMyfavorite = () => {
  return (
    <>
      <Topbar title="My Favourites" />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive />
      </div>
    </>
  );
};
