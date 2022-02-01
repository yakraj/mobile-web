import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../../features/bottomnav/bottom.nav";

import { Explore } from "./../../features/explore/screen.explore";
export const RouterApp = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Explore />} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <BottomNav />
    </div>
  );
};
