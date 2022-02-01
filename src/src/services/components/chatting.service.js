import { host } from "../host.network";
import axios from "axios";
export const getChatArchive = (user) =>
  fetch(`${host}/user/neplx/chatt/getchats`, {
    method: "POST",
    body: JSON.stringify({ userid: user }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());

export const DeleteChatArchive = (chatid, user) =>
  fetch(`${host}/chatdelete`, {
    method: "POST",
    body: JSON.stringify({ userid: user, chatid: chatid }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());

export const getUserDetail = (user) =>
  fetch(`${host}/chatuser`, {
    method: "POST",
    body: JSON.stringify({ userid: user }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());
export const getProductChats = (chatid) =>
  fetch(`${host}/getproductchat`, {
    method: "POST",
    body: JSON.stringify({ chatid: chatid }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());

export const CreateChatPool = (chatid) => {
  const options = {
    url: `${host}/chatpool`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      chatid: chatid,
    },
  };

  return axios(options);
};
// fetch(`${host}/chatpool`, {
//   method: "POST",
//   body: JSON.stringify({ chatid: chatid }),
//   headers: { ACCEPT: "application/json", "content-Type": "application/json" },
// }).then((response) => response.json());

export const CreateChatMessage = (chatid, text, user) => {
  const options = {
    url: `${host}/createchat`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      chatid: chatid,
      text: text,
      user: user,
    },
  };

  axios(options).then((response) => {});
};
// fetch(`${host}/createchat`, {
//   method: "POST",
//   body: JSON.stringify({ chatid: chatid, text: text, user: user }),
//   headers: { ACCEPT: "application/json", "content-Type": "application/json" },
// }).then((response) => response.json());

export const CreatefirstChat = (buyer, seller, adid, chatText) =>
  fetch(`${host}/create/chat`, {
    method: "POST",
    body: JSON.stringify({
      adid: adid,
      buyer: buyer,
      seller: seller,
      lastchat: chatText,
    }),
    headers: { ACCEPT: "application/json", "content-Type": "application/json" },
  }).then((response) => response.json());
