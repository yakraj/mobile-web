import React, { useState, useEffect } from "react";
import { getTextLoc } from "./components/search.service";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  UserAuth,
} from "./components/user.service";

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [loadinguiads, setloadinguiads] = useState(false);
  const [useruiAds, setuseuiAds] = useState([]);
  const [signedin, setSignedin] = useState(false);
  const [registermobileNumber, setregistermobileNumber] = useState("");
  const [regfirstName, setregfirstName] = useState("");
  const [reglastName, setreglastName] = useState("");
  const [regnewpassword, setregnewpassword] = useState("");
  const [regcnfpassword, setregcnfpassword] = useState("");
  const [images, setImages] = useState();
  const [usercrd, setusercrd] = useState({});
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
  var hellooo = "what are you doing is this ok";
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
  const [settinguploc, setsettinguploc] = useState(false);
  var matchPassword = true;
  if (regnewpassword === regcnfpassword) {
    matchPassword = true;
  } else {
    matchPassword = false;
  }

  useEffect(() => {}, [lattitude, longitude]);

  const GetuseruiAds = (length) => {
    setuiadnterr(false);
    setloadinguiads(true);
    userAdui(lattitude, longitude, length ? length : useruiAds.length)
      .then((ads) => {
        if (ads === "unable") {
        } else {
          setuseuiAds([...useruiAds, ...ads]);
        }

        setloadinguiads(false);
      })
      .catch((err) => {
        setuiadnterr(true);
        setloadinguiads(false);
      });
  };
  const ChangeGetuseruiAds = (length) => {
    setuiadnterr(false);
    setloadinguiads(true);
    userAdui(lattitude, longitude, length ? length : useruiAds.length)
      .then((ads) => {
        if (ads === "unable") {
        } else {
          setuseuiAds(ads);
        }

        setloadinguiads(false);
      })
      .catch((err) => {
        setuiadnterr(true);
        setloadinguiads(false);
      });
  };

  const UserRegister = () => {
    setlodreg(true);
    regcnfpassword &&
      registermobileNumber &&
      regfirstName &&
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
          navigate("/account");
        })
        .catch((err) => {
          setlodreg(false);
        });
  };

  const LoginUser = (phone, key, GetChatlist) => {
    setlodlogin(true);
    UserLogin(phone, key)
      .then((response) => {
        if (response) {
          if (response === "Wrong Mobile or Password") {
            setlodlogin(false);
            setloginerror(response);
          } else {
            setlodlogin(false);
            setusercrd(response[0]);
            getUserAds(response[0].username);
            GetChatlist(response[0].username);
            GetFavourites(response[0].username);
            if (response[0].location.length === 2) {
              setlattitude(response[0].location[0]);
              setlongitude(response[0].location[1]);
            }

            response[0].address && setsearchaddressName(response[0].address);
            setSignedin(true);
            navigate(-1);
            setloginerror("");
            // fetFavourites(response[0].username).then((response) => {
            //   FavouriteAds(response[0].hearts).then((response) => {
            //     response === "unable to get any related data"
            //       ? setFavAds([])
            //       : setFavAds(response);
            //   });
            // });
          }
        }
      })
      .catch((err) => {
        setlodlogin(false);
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
      if (response === "sorry") {
        window.alert("unable to update your address. Please try again");
      } else {
        // Alert.alert("Success", "You have successfully updated your address.", [
        //   {
        //     text: "Ok",

        //     style: "cancel",
        //   },
        // ]);

        window.alert("Successfully updated your location.");
        setsearchaddressName(response[0].address);
        setlattitude(response[0].location[0]);
        setlongitude(response[0].location[1]);
      }
    });
  };

  const getUserAds = (user) => {
    GetUserAds(user).then((response) => setuserAds(response));
  };

  const Logout = () => {
    setusercrd([]);
    setFavAds([]);
    setuserAds([]);
    // setsearchaddressName("");
    // setlattitude("");
    // setlongitude("");
    setSignedin(false);
    setfavourites([]);
    // removeAllStoreData();
    console.log("function executed");
  };

  const DeleteUserAd = (adid, user) => {
    Deleteuserad(adid, user).then((response) => setuserAds(response));
  };

  const GetFavourites = (user) => {
    fetFavourites(user).then((response) => {
      response[0].hearts === null
        ? setfavourites([])
        : setfavourites(response[0].hearts);
      GetFavouriteAds(response[0].hearts);
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

    if (findInc || !findInc.length == 0) {
      setfavourites(
        favourites.filter((x) => x !== fav),
        (newFev = newFev.filter((x) => x !== fav))
      );
    } else {
      setfavourites([...favourites, fav]);
      newFev = [...newFev, fav];
    }

    // findInc || !findInc.length == 0
    //   ? setfavourites(
    //       favourites.filter((x) => x !== fav),
    //       (newFev = newFev.filter((x) => x !== fav))
    //     )
    //   : (setfavourites([...favourites, fav]), (newFev = [...newFev, fav]));
    // console.log(newFev);
    updateFavourites(username, newFev).then((res) => {
      setfavourites(res[0].hearts);
      GetFavouriteAds(newFev);
    });
  };

  const GetAddress = (placeid) => {
    setsettinguploc(true);
    getLatLong(placeid)
      .then((response) => {
        setlattitude(response.result.geometry.location.lat);
        setlongitude(response.result.geometry.location.lng);
        setsettinguploc(false);
      })
      .err((err) => setsettinguploc(false));
  };

  const GetLocation = (geo) => {
    setsettinguploc(true);
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
        setsettinguploc(false);
      })
      .catch((err) => {
        // setloadingmyaddress(false);
        setsettinguploc(false);
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

  // retrieve data as offline function

  // const RetrieveUser = async () => {
  //   const RestoreUserData = (user) => {
  //     setusercrd(user);
  //     user.username ? setSignedin(true) : null;
  //   };
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("@userinfo");
  //     return jsonValue != null ? RestoreUserData(JSON.parse(jsonValue)) : null;
  //   } catch (e) {
  //     console.log("unable to retrieve data", e);
  //   }
  // };
  // retrieve favourites

  // retriving datas
  // useEffect(() => {
  //   RetrieveUser();
  // }, []);
  // this is for dashboard ads
  useEffect(() => {
    ChangeGetuseruiAds(useruiAds.length);
    GetFavouriteAds(favourites);
  }, [lattitude, longitude]);

  // useEffect(() => {
  //   userAdui(lattitude, longitude)
  //     .then((ads) => {
  //       if (ads === "unable") {
  //       } else {
  //         setuseuiAds(ads);
  //       }

  //       setloadinguiads(false);
  //     })
  //     .catch((err) => {
  //       setuiadnterr(true);
  //       setloadinguiads(false);
  //     });
  // }, [lattitude, longitude]);

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

  // Restoring data to browser
  //
  //
  //
  useEffect(() => {
    const latt = localStorage.getItem("lattitude");
    const long = localStorage.getItem("longitude");
    setlattitude(latt ? JSON.parse(latt) : "");
    setlongitude(latt ? JSON.parse(long) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("SignedIn");
    setSignedin(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("registermobileNumber");
    setregistermobileNumber(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("regfirstName");
    setregfirstName(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("reglastName");
    setreglastName(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("usercrd");
    setusercrd(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("favourites");
    setfavourites(data ? JSON.parse(data) : []);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("FavAds");
    setFavAds(data ? JSON.parse(data) : []);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("gettnbinfo");
    setgettnbinfo(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("messageExi");
    setmessageExi(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("numberExiLoadi");
    setnumberExiLoadi(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("searchaddressName");
    setsearchaddressName(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("favheart");
    setfavourites(data ? JSON.parse(data) : "");
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("userads");
    setuserAds(data ? JSON.parse(data) : "");
  }, []);

  // storing data to browser
  //
  //
  //

  useEffect(() => {
    localStorage.setItem("lattitude", JSON.stringify(lattitude));
    localStorage.setItem("longitude", JSON.stringify(longitude));
  }, [lattitude, longitude]);

  useEffect(() => {
    localStorage.setItem("favheart", JSON.stringify(favourites));
  }, [favourites]);
  useEffect(() => {
    localStorage.setItem("userads", JSON.stringify(userAds));
  }, [userAds]);

  useEffect(() => {
    localStorage.setItem("SignedIn", JSON.stringify(signedin));
  }, [signedin]);
  useEffect(() => {
    localStorage.setItem(
      "registermobileNumber",
      JSON.stringify(registermobileNumber)
    );
  }, [registermobileNumber]);
  useEffect(() => {
    localStorage.setItem("regfirstName", JSON.stringify(regfirstName));
  }, [regfirstName]);
  useEffect(() => {
    localStorage.setItem("reglastName", JSON.stringify(reglastName));
  }, [reglastName]);
  useEffect(() => {
    localStorage.setItem("usercrd", JSON.stringify(usercrd));
  }, [usercrd]);
  useEffect(() => {
    !favourites === undefined &&
      favourites.localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  useEffect(() => {
    !FavAds === undefined &&
      FavAds.localStorage.setItem("FavAds", JSON.stringify(FavAds));
  }, [FavAds]);
  useEffect(() => {
    localStorage.setItem("gettnbinfo", JSON.stringify(gettnbinfo));
  }, [gettnbinfo]);
  useEffect(() => {
    localStorage.setItem("messageExi", JSON.stringify(messageExi));
  }, [messageExi]);
  useEffect(() => {
    localStorage.setItem("numberExiLoadi", JSON.stringify(numberExiLoadi));
  }, [numberExiLoadi]);
  useEffect(() => {
    localStorage.setItem(
      "searchaddressName",
      JSON.stringify(searchaddressName)
    );
  }, [searchaddressName]);

  //   useEffect(() => {
  //   signedin &&
  // },[])

  useEffect(() => {
    setTimeout(() => {
      const data = localStorage.getItem("usercrd");

      JSON.parse(localStorage.getItem("SignedIn")) === true
        ? UserAuth(JSON.parse(localStorage.getItem("usercrd")).username).then(
            (response) => {
              if (response === "Invalid user") {
                setSignedin(false);
                setusercrd([]);
                navigate("/");
              } else {
                setusercrd(response[0]);
              }
            }
          )
        : console.log("");
    }, 2000);
  }, []);

  return (
    <UserContext.Provider
      value={{
        hellooo,
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
        setusercrd,
        loadreg,
        lodLogin,
        settinguploc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
