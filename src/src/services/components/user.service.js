import { host } from "../host.network";
export const userAdui = (lat, long, length) =>
  fetch(`${host}/getuiads`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ length: length, lat: lat, long: long }),
  }).then((response) => response.json());
export const UserAuth = (user) =>
  fetch(`${host}/userAuth`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user }),
  }).then((response) => response.json());

export const NumberExistance = (number) =>
  fetch(`${host}/numberexistanceverify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobile: number }),
  }).then((response) => response.json());

export const Updateaddress = (address, location, user) =>
  fetch(`${host}/update/user/location`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      location: location,
      username: user,
    }),
  }).then((response) => response.json());

export const Deleteuserad = (adid, username) =>
  fetch(`${host}/delete/userad`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ adid: adid, username: username }),
  }).then((response) => response.json());

export const SendOTP = (number) =>
  fetch(`${host}/otp/send`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobile: number }),
  }).then((response) => response.json());

export const cnfOTP = (number, otp) =>
  fetch(`${host}/otp/verify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobile: number, otp: otp }),
  }).then((response) => response.json());

export const getLatLong = (placeid) =>
  fetch(`${host}/placelatlong`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ placeid: placeid }),
  }).then((response) => response.json());

export const GetUserLocSuggestion = (place) =>
  fetch(`${host}/placeuser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ place: place }),
  }).then((response) => response.json());

export const UserLogin = (phone, key) =>
  fetch(host + "/signinuser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobile: phone, key: key }),
  }).then((response) => response.json());

export const FavouriteAds = (fav) =>
  fetch(host + "/getads/user/favourites", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ads: fav }),
  }).then((response) => response.json());

export const UpdateUserName = (firstname, lastname, username) =>
  fetch(host + "/update/user/name", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      username: username,
    }),
  }).then((response) => response.json());

export const UpdateUserMobile = (mobile, username) =>
  fetch(host + "/update/user/mobile", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      mobile: mobile,
      username: username,
    }),
  }).then((response) => response.json());

export const fetFavourites = (username) =>
  fetch(host + "/get/user/favourites", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      username: username,
    }),
  }).then((response) => response.json());
export const updateFavourites = (username, favo) =>
  fetch(host + "/update/user/favourites", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      hearts: favo,
      username: username,
    }),
  }).then((response) => response.json());
export const GetUserAds = (user) =>
  fetch(host + "/user/ads", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      username: user,
    }),
  }).then((response) => response.json());

export const UpdateuserIcon = (images, user) => {
  const data = new FormData();
  data.append("username", user);
  images && data.append("fileData", images);
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "multipart/form-data",
    },
    body: data,
  };
  return fetch(host + "/updateavatar", config).then((response) =>
    response.json()
  );
};

export const Registeruser = (
  images,
  regcnfpassword,
  registermobileNumber,
  regfirstName,
  reglastName
) => {
  const data = new FormData();
  data.append("password", regcnfpassword);
  data.append("mobile", registermobileNumber);
  data.append("firstname", regfirstName);
  data.append("lastname", reglastName);

  images && data.append("fileData", images);

  // if (images) {
  //   // let extArray = images.path.split("/");
  //   // let extension = extArray[extArray.length - 1];
  //   data.append("fileData", {
  //     uri: images[0].path,
  //     type: "image/jpeg",
  //     name: images[0].name,
  //   });
  // }
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "multipart/form-data",
    },
    body: data,
  };
  return fetch(host + "/registeruser", config).then((response) =>
    response.json()
  );
};
