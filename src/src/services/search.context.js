import React, { useState, createContext, useEffect, useContext } from "react";
import { UserContext } from "./user.contex";
import {
  Getautosuggest,
  CachesearchKeywords,
  subcatogeryRecomendation,
  RequestForAds,
  RequestFilterKeys,
  getFiltered,
  GetCustomAds,
  Autocomplete,
  getTextLoc,
} from "./components/search.service";
export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [autosuggest, setAutoSuggest] = useState([]);
  const [subCatogeryreco, setsubCatogeryreco] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState();
  const [loadingAds, setLoadingAds] = useState(false);
  const [gottenAds, setgottenAds] = useState([]);

  const [FilterKeys, setFilterKeys] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [Filter, setFilter] = useState([]);
  const [activeFilterKey, setActiveFilterKey] = useState();
  const [AdFilter, setAdFilter] = useState([]);
  const [NewAdFilter, setNewAdFilter] = useState();
  const [LocationValue, setLocationValue] = useState("");
  const [RecentautocompleteKey, setRecentautocompleteKey] = useState("");

  // loading states in kilometers
  const [in5km, setin5km] = useState([]);
  const [in10km, setin10km] = useState([]);
  const [in20km, setin20km] = useState([]);
  const [in50km, setin50km] = useState([]);
  const [in100km, setin100km] = useState([]);

  const [Status, setStatus] = useState([]);

  // console.log(in5km, in10km, in20km, in50km);
  // const [, set] = useState([]);
  const [loadingautocomplete, setloadingautocomplete] = useState(false);
  const [autocomplete, setautocomplete] = useState([]);
  const [SearchValue, setSearchValue] = useState("");

  const [data5km, setdata5km] = useState();
  const [data10km, setdata10km] = useState();
  const [data20km, setdata20km] = useState();
  const [data50km, setdata50km] = useState();
  const [data5kmload, setdata5kmload] = useState(true);
  const [data10kmload, setdata10kmload] = useState(true);
  const [data20kmload, setdata20kmload] = useState(true);
  const [data50kmload, setdata50kmload] = useState(true);
  const [responsss, setresponsss] = useState("");

  // this is for getSuggestion
  const getSuggestions = (keyword) => {
    Getautosuggest(keyword).then((json) => setAutoSuggest(json));
    subcatogeryRecomendation(keyword).then((json) => setsubCatogeryreco(json));
  };

  const {
    setloadingmyaddress,
    setsearchaddressName,
    setlattitude,
    setlongitude,
    setuserlocation,
  } = useContext(UserContext);

  var lengthh = 0;
  const ReqAds = (key, lat, long, r) => {
    if (r === 5) {
      setdata5kmload(true);
    } else if (r === 10) {
      setdata10kmload(true);
    } else if (r === 20) {
      setdata20kmload(true);
    } else if (r === 50) {
      setdata50kmload(true);
    }

    const lenth = () => {
      if (r === 5) {
        return 0;
      } else if (r === 10) {
        return lengthh;
      } else if (r === 20) {
        return lengthh;
      } else if (r === 50) {
        return lengthh;
      }
    };

    setgottenAds([]);
    setLoadingAds(true);
    RequestForAds(key, lat, long, r, lenth())
      .then((json) => {
        lengthh = lengthh + json.length;
        if (r === 5) {
          setin5km(json);
          setdata5kmload(false);
        } else if (r === 10) {
          setin10km(json);
          setdata10kmload(false);
        } else if (r === 20) {
          setin20km(json);
          setdata20kmload(false);
        } else if (r === 50) {
          setin50km(json);
          setdata50kmload(false);
        }

        setLoadingAds(false);
        setFilterKeys([]);
        setFilterValues([]);
        setFilter([]);
        setActiveFilterKey([]);
        setAdFilter([]);

        if (json.length < 5) {
          if (r === 5) {
            ReqAds(key, lat, long, 10);
          } else if (r === 10) {
            ReqAds(key, lat, long, 20);
            setresponsss("km10");
          } else if (r === 20) {
            ReqAds(key, lat, long, 50);
            setresponsss("km20");
          }
        }
      })
      .catch((error) => {
        if (r === 5) {
          setdata5kmload(false);
        } else if (r === 10) {
          setdata10kmload(false);
        } else if (r === 20) {
          setdata20kmload(false);
        } else if (r === 50) {
          setdata50kmload(false);
        }
        setLoadingAds(false);
      });
  };

  const AddressAutocomplete = (keyword) => {
    setloadingautocomplete(true);
    setRecentautocompleteKey(keyword);
    setuserlocation(keyword);
    keyword.length > 1 &&
      Autocomplete(keyword)
        .then((response) => {
          if (response === "unable to get any data") {
            window.alert(
              "unable to found location as your keyword, try to change city/locality"
            );
          } else {
            setautocomplete(response.predictions);
          }

          setloadingautocomplete(false);
        })
        .catch((err) => {
          setloadingautocomplete(false);
        });
  };

  const GetCustoAd = () => {
    // setLoadingAds(true);
    // GetCustomAds(searchKeyword, AdFilter).then((json) => setgottenAds(json));
    // setLoadingAds(false);
  };

  // this is for store suggestions
  const CacheKeywords = (key) => CachesearchKeywords(key);

  // thi is for store filterkeys
  const getFilterKeys = () =>
    RequestFilterKeys(searchKeyword).then((json) => setFilterKeys(json));

  //  this is for get filtered ads

  const GetFilteredAds = (filter) => {
    const FindSimilar = filterValues.find((f) => f.id === filter);

    // FindSimilar
    //   ? null
    //   : getFiltered(searchKeyword, filter).then((json) =>
    //       setFilterValues([...filterValues, { id: filter, value: json }])
    //     );
  };
  const GetTextLocation = (geo) => {
    // console.log(geo);
    setautocomplete([]);
    setloadingmyaddress(true);
    setlattitude(geo[0]);
    setlongitude(geo[1]);
    getTextLoc(geo)
      .then((response) => {
        setsearchaddressName(response.results[0].formatted_address);
        setLocationValue(response.results[0].formatted_address);
        setloadingmyaddress(false);
      })
      .catch((err) => {
        setloadingmyaddress(true);
      });
  };
  useEffect(() => {
    setStatus([...Status, responsss]);
  }, [responsss]);

  return (
    <SearchContext.Provider
      value={{
        autosuggest,
        CacheKeywords,
        getSuggestions,
        searchKeyword,
        setSearchKeyword,
        subCatogeryreco,
        ReqAds,
        loadingAds,
        gottenAds,
        setgottenAds,
        getFilterKeys,
        FilterKeys,
        GetFilteredAds,
        filterValues,
        Filter,
        setFilter,
        activeFilterKey,
        setActiveFilterKey,
        AdFilter,
        setAdFilter,
        GetCustoAd,
        NewAdFilter,
        setNewAdFilter,
        LocationValue,
        setLocationValue,
        AddressAutocomplete,
        autocomplete,
        setautocomplete,
        RecentautocompleteKey,
        GetTextLocation,
        SearchValue,
        setSearchValue,
        loadingautocomplete,
        data5km,
        setdata5km,
        data10km,
        setdata10km,
        data20km,
        setdata20km,
        data50km,
        setdata50km,
        in5km,
        in10km,
        in20km,
        in50km,
        in100km,
        Status,
        setStatus,
        data5kmload,
        data10kmload,
        data20kmload,
        data50kmload,
        setin5km,
        setin10km,
        setin20km,
        setin50km,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
