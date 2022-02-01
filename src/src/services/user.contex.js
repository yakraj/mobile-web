import React, { useState, useEffect, lodash, useContext } from "react";
import { getTextLoc } from "./components/search.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  userAdui,
  Registeruser,
  UserLogin,
  UpdateuserIcon,
  UpdateUserName,
  UpdateUserMobile,
  GetUserAds,
  fetFavourites,
  updateFavourites,
  FavouriteAds,
  NumberExistance,
  getLatLong,
  GetUserLocSuggestion,
  Deleteuserad,
  Updateaddress,
} from "./components/user.service";

import { SearchContext } from "./search.context";
import { Alert } from "react-native";

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  const [username, sertusername] = useState("yakraj289");
  const [loadinguiads, setloadinguiads] = useState(false);
  const [useruiAds, setuseuiAds] = useState([]);
  const [signedin, setSignedin] = useState(false);
  const [registermobileNumber, setregistermobileNumber] = useState("");
  const [regfirstName, setregfirstName] = useState("");
  const [reglastName, setreglastName] = useState("");
  const [regnewpassword, setregnewpassword] = useState("");
  const [regcnfpassword, setregcnfpassword] = useState("");
  const [images, setImages] = useState();
  const [usercrd, setusercrd] = useState();
  const [loadreg, setlodreg] = useState(false);
  const [lodLogin, setlodlogin] = useState(false);
  const [userAds, setuserAds] = useState([]);
  const [favourites, setfavourites] = useState([]);
  const [FavAds, setFavAds] = useState([]);
  const [loginerror, setloginerror] = useState("");
  const [gettnbinfo, setgettnbinfo] = useState(false);
  const [messageExi, setmessageExi] = useState(false);
  const [uiadnterr, setuiadnterr] = useState(false);
  const [numberExiLoadi, setnumberExiLoadi] = useState(false);
  // const [matchPassword, setmatchpassword] = useState(true);

  // use address
  const [lattitude, setlattitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [searchaddressName, setsearchaddressName] = useState("");
  const [loadingmyaddress, setloadingmyaddress] = useState(false);
  const [userAddresssugg, setuserAddresssugg] = useState([]);
  // for use address
  const [address, setaddress] = useState("");
  const [userlocation, setuserlocation] = useState("");
  const [recentUserAddressauto, setrecentuseraddress] = useState("");
  const [LoadinguserAdd, setLoadinguserAdd] = useState(false);
  var matchPassword = true;
  if (regnewpassword === regcnfpassword) {
    matchPassword = true;
  } else {
    matchPassword = false;
  }

  if (registermobileNumber.length == 10) {
    NumberExistance(registermobileNumber).then((response) => {
      setmessageExi(response);
      setnumberExiLoadi(false);
      setnumberExiLoadi(false);
    });
  }

  const GetuseruiAds = () => {
    setuiadnterr(false);
    setloadinguiads(true);
    userAdui()
      .then((ads) => {
        setuseuiAds(ads);
        setloadinguiads(false);
      })
      .catch((err) => {
        setuiadnterr(true);
        setloadinguiads(false);
      });
  };

  // console.log(regfirstName, reglastName, regnewpassword, regcnfpassword);

  const UserRegister = () => {
    setlodreg(true);
    // console.log("func excuted");
    Registeruser(
      images,
      regcnfpassword,
      registermobileNumber,
      regfirstName,
      reglastName
    )
      .then((res) => {
        setlodreg(false);
        setusercrd(res[0]);
        setSignedin(true);
      })
      .catch((err) => {
        setlodreg(false);
      });
  };

  const LoginUser = (phone, key, GetChatlist) => {
    setlodlogin(true);
    UserLogin(phone, key).then((response) => {
      if (response) {
        if (response === "Wrong Mobile or Password") {
          setloginerror(response);
        } else {
          setlodlogin(false);
          setusercrd(response[0]);
          GetChatlist(response[0].username);
          if (response[0].location) {
            setlattitude(response[0].location[0]);
            setlongitude(response[0].location[1]);
          }

          response[0].address && setsearchaddressName(response[0].address);
          setSignedin(true);
          setloginerror("");
          fetFavourites(response[0].username).then((response) => {
            FavouriteAds(response[0].hearts).then((response) => {
              response === "unable to get any related data"
                ? setFavAds([])
                : setFavAds(response);
            });
          });
        }
      }
    });
  };
  const Updateavatar = (image, user) => {
    UpdateuserIcon(image, user).then((response) => setusercrd(response[0]));
  };

  const UpdateName = (firstname, lastname, username) => {
    UpdateUserName(firstname, lastname, username).then((response) =>
      setusercrd(response[0])
    );
  };
  const UpdateMobile = (mobile, username) => {
    UpdateUserMobile(mobile, username).then((response) =>
      setusercrd(response[0])
    );
  };

  const UpdateAddress = (address, location, user) => {
    Updateaddress(address, location, user).then((response) => {
      if (response == "sorry") {
        console.log("sorry");
      } else {
        Alert.alert("Success", "You have successfully updated your address.", [
          {
            text: "Ok",

            style: "cancel",
          },
        ]);

        setsearchaddressName(response[0].address);
        setlattitude(response[0].location[0]);
        setlongitude(response[0].location[1]);
      }
    });
  };

  const getUserAds = (user) => {
    GetUserAds(user).then((response) => setuserAds(response));
  };

  const removeAllStoreData = () => {
    const RemoveuserInfo = async () => {
      try {
        await AsyncStorage.removeItem("@userinfo");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };
    const Removeuserfavourites = async () => {
      try {
        await AsyncStorage.removeItem("@favourites");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };
    const RemoveuserAds = async () => {
      try {
        await AsyncStorage.removeItem("@myads");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };
    const RemoveuserLocation = async () => {
      try {
        await AsyncStorage.removeItem("@userlocation");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };
    const RemoveuserChatarchive = async () => {
      try {
        await AsyncStorage.removeItem("@chatarchive");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };
    const RemoveuserChats = async () => {
      try {
        await AsyncStorage.removeItem("@chatcontent");
      } catch (e) {
        // remove error
      }
      // console.log("Done.");
    };

    RemoveuserInfo();
    Removeuserfavourites();
    RemoveuserAds();
    RemoveuserLocation();
    RemoveuserChatarchive();
    RemoveuserChats();
  };

  const Logout = () => {
    setusercrd([]);
    setFavAds([]);
    setsearchaddressName();
    setlattitude();
    setlongitude();
    setSignedin(false);
    setfavourites([]);
    removeAllStoreData();
  };

  const DeleteUserAd = (adid, user) => {
    Deleteuserad(adid, user).then((response) => setuserAds(response));
  };

  const GetFavourites = (user) => {
    fetFavourites(user).then((response) => {
      response[0].hearts == null
        ? setfavourites([])
        : setfavourites(response[0].hearts);
    });
  };

  const GetFavouriteAds = (favo) => {
    FavouriteAds(favo).then((response) => {
      response === "unable to get any related data"
        ? setFavAds([])
        : setFavAds(response);
    });
  };
  const UpdateFavourites = (username, fav) => {
    const findInc = favourites ? favourites.includes(fav) : [];
    var newFev = favourites;
    findInc || !findInc.length == 0
      ? setfavourites(
          favourites.filter((x) => x !== fav),
          (newFev = newFev.filter((x) => x !== fav))
        )
      : (setfavourites([...favourites, fav]), (newFev = [...newFev, fav]));
    // console.log(newFev);
    updateFavourites(username, newFev).then((res) => {
      setfavourites(res[0].hearts);
      GetFavouriteAds(newFev);
    });
  };

  const GetAddress = (placeid) => {
    getLatLong(placeid).then((response) => {
      setlattitude(response.result.geometry.location.lat);
      setlongitude(response.result.geometry.location.lng);
    });
  };

  const GetLocation = (geo) => {
    setlattitude(geo[0]);
    setlongitude(geo[1]);
    getTextLoc(geo)
      .then((response) => {
        const TextAddress =
          response.results[0].address_components[0].long_name +
          " " +
          response.results[0].address_components[1].long_name +
          " " +
          response.results[0].address_components[2].long_name +
          " " +
          response.results[0].address_components[3].long_name;

        setuserlocation(TextAddress);
        setsearchaddressName(TextAddress);
        // setsearchaddressName(response.results[0].formatted_address);
        // setLocationValue(response.results[0].formatted_address);
        // setloadingmyaddress(false);
      })
      .catch((err) => {
        // setloadingmyaddress(true);
      });
  };

  const userAddress = (place) => {
    setrecentuseraddress(place);
    // console.log("function triggered", place);
    setuserAddresssugg([]);
    setLoadinguserAdd(true);
    GetUserLocSuggestion(place)
      .then((suggestion) => {
        setLoadinguserAdd(false);
        setuserAddresssugg(suggestion.results);
      })
      .catch((err) => {
        setLoadinguserAdd(false);
        setuserAddresssugg([]);
      });
    // userAddresssugg, setuserAddresssugg
  };
  // storing data as offline function
  const StoreUserCrd = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@userinfo", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };
  const Storefavourite = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };
  const StoreMyads = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@myads", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };
  const StoreLocalLocation = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@userlocation", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };

  // retrieve data as offline function

  const RetrieveUser = async () => {
    const RestoreUserData = (user) => {
      setusercrd(user);
      user.username ? setSignedin(true) : null;
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@userinfo");
      return jsonValue != null ? RestoreUserData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  // retrieve favourites
  const RetrieveFavourites = async () => {
    const RestoreFavourites = (favourites) => {
      setfavourites(favourites);
      GetFavouriteAds(favourites);
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      return jsonValue != null
        ? RestoreFavourites(JSON.parse(jsonValue))
        : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  // retrieve myads
  const RetrieveMyads = async () => {
    const RestoreFavourites = (ads) => {
      setuserAds(ads);
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@myads");
      return jsonValue != null
        ? RestoreFavourites(JSON.parse(jsonValue))
        : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  const RetrieveLocalLocation = async () => {
    const RestoreLocation = (location) => {
      // setuserAds(responseads);
      setlattitude(location.lattitude);
      setlongitude(location.longitude);
      setsearchaddressName(location.searchaddressName);
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@userlocation");
      return jsonValue != null ? RestoreLocation(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  // retriving datas
  useEffect(() => {
    RetrieveUser();
  }, []);
  // this is for dashboard ads
  useEffect(() => {
    GetuseruiAds();
    GetFavouriteAds(favourites);
  }, []);

  useEffect(() => {
    RetrieveFavourites();
    RetrieveMyads();
    RetrieveLocalLocation();
  }, []);
  // storing datas
  useEffect(() => {
    StoreUserCrd(usercrd);
  }, [usercrd]);
  useEffect(() => {
    Storefavourite(favourites);
  }, [favourites]);
  useEffect(() => {
    StoreMyads(userAds);
  }, [userAds]);
  useEffect(() => {
    StoreLocalLocation({
      lattitude: lattitude,
      longitude: longitude,
      searchaddressName: searchaddressName,
    });
  }, [lattitude, longitude, searchaddressName]);

  // /////////////////////////////////////////////////

  const UserSetAdd = (address, lat, lng) => {
    setuserlocation(address);
    setsearchaddressName(address);
    setlattitude(lat);
    setlongitude(lng);
  };

  // this is for otp timer
  const [Time, setTime] = useState("");
  function startTimer() {
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }

      setTime(60 - (60 - timeleft));
      timeleft -= 1;
    }, 1000);
  }
  const StartOtpTimer = () => {
    startTimer();
  };

  return (
    <UserContext.Provider
      value={{
        userAds,
        FavAds,
        getUserAds,
        username,
        GetuseruiAds,
        loadinguiads,
        useruiAds,
        signedin,
        setSignedin,
        registermobileNumber,
        setregistermobileNumber,
        regfirstName,
        setregfirstName,
        uiadnterr,
        reglastName,
        setreglastName,
        regnewpassword,
        setmessageExi,
        setregnewpassword,
        regcnfpassword,
        setregcnfpassword,
        matchPassword,
        images,
        setImages,
        UserRegister,
        usercrd,
        LoginUser,
        Logout,
        Updateavatar,
        UpdateName,
        UpdateMobile,
        GetFavourites,
        favourites,
        setfavourites,
        UpdateFavourites,
        GetFavouriteAds,
        loginerror,
        gettnbinfo,
        messageExi,
        setnumberExiLoadi,
        numberExiLoadi,
        setsearchaddressName,
        GetAddress,
        searchaddressName,
        loadingmyaddress,
        setloadingmyaddress,
        setlattitude,
        setlongitude,
        GetLocation,
        address,
        setaddress,
        userlocation,
        setuserlocation,
        recentUserAddressauto,
        userAddress,
        userAddresssugg,
        LoadinguserAdd,
        UserSetAdd,
        lattitude,
        longitude,
        Time,
        StartOtpTimer,
        DeleteUserAd,
        UpdateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
