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
  // const [, set] = useState([]);
  const [loadingautocomplete, setloadingautocomplete] = useState(false);
  const [autocomplete, setautocomplete] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
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

  const ReqAds = (key) => {
    setgottenAds([]);
    setLoadingAds(true);
    RequestForAds(key)
      .then((json) => {
        setgottenAds(json);
        setLoadingAds(false);
        setFilterKeys([]);
        setFilterValues([]);
        setFilter([]);
        setActiveFilterKey([]);
        setAdFilter([]);
      })
      .catch((error) => {
        setLoadingAds(false);
      });
  };

  const AddressAutocomplete = (keyword) => {
    console.log("function executed");
    setloadingautocomplete(true);
    setRecentautocompleteKey(keyword);
    setuserlocation(keyword);
    keyword.length > 1 &&
      Autocomplete(keyword)
        .then((response) => {
          setautocomplete(response.predictions);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
