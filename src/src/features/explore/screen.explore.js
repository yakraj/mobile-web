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
  const [topval, ontapval] = useState(0);
  const [curscroll, oncurscroll] = useState(0);
  const [adcaller, onadcaller] = useState();
  useEffect(() => {
    adcaller && GetuseruiAds(adcaller);
  }, [adcaller]);

  useEffect(() => {
    if (curscroll > topval + 5 || curscroll < topval - 5) {
      onadcaller(useruiAds.length);
    } else {
      ontapval(curscroll);
    }
  }, [topval, curscroll]);

  useEffect(() => {
    archiveBody.current.addEventListener("scroll", () => {
      const topValue = last.current.getBoundingClientRect().top;
      settop(topValue);

      if (
        archiveBody.current.offsetHeight + archiveBody.current.scrollTop >=
        archiveBody.current.scrollHeight
      ) {
        oncurscroll(archiveBody.current.scrollTop);
      }

      // if (topValue < window.innerHeight) {
      //   const last = document.querySelector(".HDOrGf");
      //   var division = topValue / window.innerHeight;
      //   var data = Math.trunc(division + 1);
      //   settimesChanged(data);
      // }
    });
  }, [useruiAds]);
  // useEffect(() => {
  //   GetuseruiAds(useruiAds.length);
  // }, [timesChanged, lattitude, longitude]);
  return (
    <div>
      <TopLanding>Home</TopLanding>
      <div ref={archiveBody} id="archiveContainer">
        <ProductArchive sellmsg Archives={useruiAds} />
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
