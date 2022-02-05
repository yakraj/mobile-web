import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../../features/bottomnav/bottom.nav";

import { Explore } from "./../../features/explore/screen.explore";
import { SearchScreen } from "./../../features/search/search.saperate";
import { ProductView } from "./../../features/product/product.view";
import { ChatArchive } from "../../features/chatting/chatarchive";
export const RouterApp = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Explore />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/chatarchive" element={<ChatArchive />} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <BottomNav />
    </div>
  );
};
