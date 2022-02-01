import { host } from "../host.network";

export const Getautosuggest = (keyword) =>
  fetch(`${host}/search/keywords/autoSuggest`, {
    method: "POST",
    body: JSON.stringify({ keyword: keyword }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());
export const getTextLoc = (geo) =>
  fetch(`${host}/locationplacename`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ latlng: geo }),
  }).then((response) => response.json());

export const CachesearchKeywords = (keyword) =>
  fetch(`${host}/cache/add_search_history`, {
    method: "post",
    body: JSON.stringify({ keyword: keyword }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());

export const subcatogeryRecomendation = (keyword) =>
  fetch(`${host}/search/subcatoger/autoSuggest`, {
    method: "post",
    body: JSON.stringify({ key: keyword }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());

export const RequestForAds = (keyword) =>
  fetch(`${host}/searh/get_ads`, {
    method: "post",
    body: JSON.stringify({ keyword: keyword }),
    headers: { ACCEPT: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());

export const RequestFilterKeys = (keyword) =>
  fetch(`${host}/get_filter/filterads_keys/find/filter`, {
    method: "post",
    body: JSON.stringify({ keyword: keyword }),
    headers: { ACCEPT: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());

export const getFiltered = (keyword, filter) =>
  fetch(`${host}/get/filterable/values`, {
    method: "post",
    body: JSON.stringify({
      filterable: filter,
      keyword: keyword,
    }),
    headers: { ACCEPT: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
export const GetCustomAds = (keyword, filter) =>
  fetch(`${host}/custom_ads/filter/get_filtered/ads`, {
    method: "post",
    body: JSON.stringify({
      keyword: keyword,
      filter: filter,
    }),
    headers: { ACCEPT: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());

export const Autocomplete = (keyword) =>
  fetch(`${host}/autocomplete`, {
    method: "post",
    body: JSON.stringify({
      add: keyword,
    }),
    headers: { ACCEPT: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
