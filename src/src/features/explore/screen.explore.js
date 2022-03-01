import React, { useContext } from "react";
import { TopLanding } from "./../toplanding/toplanding";
import { BottomNav } from "./../bottomnav/bottom.nav";
import { ProductArchive } from "./../productarchive/product.archive";
import "./component/explore.css";
import { UserContext } from "./../../services/user.contex";
export const Explore = () => {
  const { useruiAds } = useContext(UserContext);
  return (
    <div>
      <TopLanding>Home</TopLanding>
      <div id="archiveContainer">
        <ProductArchive Archives={useruiAds} />
      </div>
    </div>
  );
};
