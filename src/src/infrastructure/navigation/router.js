import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../../features/bottomnav/bottom.nav";

import { Explore } from "./../../features/explore/screen.explore";
import { SearchScreen } from "./../../features/search/search.saperate";
import { ProductView } from "./../../features/product/product.view";
import { ChatArchive } from "../../features/chatting/chatarchive";
import { ChattingUI } from "../../features/chat/chattingui";
import { Account } from "../../features/account/account";
import { EditProfile } from "./../../features/account/components/update.profile";
import { UpdateLocation } from "./../../features/account/components/update.location";
import { UserMyads } from "./../../features/account/myads";
import { UserMyfavorite } from "./../../features/account/favourites";
import { FirstCat } from "./../../features/catogery/firstCat.component";
import { SecondCat } from "./../../features/catogery/second.component";
import { SubCatogery } from "./../../features/catogery/subcatogery/subcatogery.component";
import { SellSecondCat } from "./../../features/catogery/sellCatogery/second.component";
import { SellSubCatogery } from "./../../features/catogery/sellCatogery/subcatogery/subcatogery.component";
import { InputSell } from "../../features/input/properties.sell";
import { InputImportantInfo } from "./../../features/input/important.info";
export const RouterApp = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Explore />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/chatarchive" element={<ChatArchive />} />
        <Route path="/chattingui" element={<ChattingUI />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/updatelocation" element={<UpdateLocation />} />
        <Route path="/usermyads" element={<UserMyads />} />
        <Route path="/usermyfavourite" element={<UserMyfavorite />} />
        <Route path="/catogeryfirst" element={<FirstCat />} />
        <Route path="/second-cato" element={<SecondCat />} />
        <Route path="/sub-catogery" element={<SubCatogery />} />
        <Route path="/sell-seco-catogery" element={<SellSecondCat />} />
        <Route path="/sell-sub-catogery" element={<SellSubCatogery />} />
        <Route path="/input-sell" element={<InputSell />} />
        <Route path="/important-info" element={<InputImportantInfo />} />
        {/* <Route pat
h="contact" element={ <Contact/> } /> */}
      </Routes>
      <BottomNav />
    </div>
  );
};
