import React, { useContext, useState, useRef, useEffect } from "react";
import { TopLanding } from "./../toplanding/toplanding";
import { BottomNav } from "./../bottomnav/bottom.nav";
import { ProductArchive } from "./../productarchive/product.archive";
import "./component/explore.css";
import { UserContext } from "./../../services/user.contex";
export const Explore = () => {
  const { useruiAds, loadinguiads, GetuseruiAds, lattitude, longitude } =
    useContext(UserContext);
  const last = useRef();
  const archiveBody = useRef();
  const [top, settop] = useState();
  const [timesChanged, settimesChanged] = useState();

  useEffect(() => {
    archiveBody.current.addEventListener("scroll", () => {
      const topValue = last.current.getBoundingClientRect().top;
      settop(topValue);
      if (topValue < window.innerHeight) {
        const last = document.querySelector(".HDOrGf");
        var division = topValue / window.innerHeight;
        var data = Math.trunc(division + 1);
        settimesChanged(data);
      }
    });
  }, [useruiAds]);
  useEffect(() => {
    GetuseruiAds(useruiAds.length);
  }, [timesChanged, lattitude, longitude]);
  return (
    <div>
      <TopLanding>Home</TopLanding>
      <div ref={archiveBody} id="archiveContainer">
        <ProductArchive Archives={useruiAds} />
        <div ref={last} />
        {loadinguiads && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <img
              width="50px"
              height="50px"
              alt="loading"
              src={require("../../../assets/loading.gif")}
            />
          </div>
        )}
      </div>
    </div>
  );
};
