import React from "react";
import { TopLanding } from "./../toplanding/toplanding";
import { BottomNav } from "./../bottomnav/bottom.nav";
import { ProductArchive } from "./../productarchive/product.archive";
import "./component/explore.css";
export const Explore = () => {
  return (
    <div>
      <TopLanding>Home</TopLanding>
      <div id="archiveContainer">
        <ProductArchive />
      </div>
    </div>
  );
};
