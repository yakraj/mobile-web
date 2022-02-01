import { host } from "./../host.network";

export const GetProductLikes = (adid, user) =>
  fetch(host + "/get/product/likes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adid: adid, username: user }),
  }).then((res) => res.json());
export const GetOnlyProductLikes = (adid) =>
  fetch(host + "/get/only/likes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adid: adid }),
  }).then((res) => res.json());

export const UpdateProductLike = (adid, user) =>
  fetch(host + "/product/likes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adid: adid, username: user }),
  }).then((res) => res.json());
export const productLv = (adid) =>
  fetch(host + "/get/product/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adid: adid }),
  }).then((res) => res.json());
export const productinfo = (adid) =>
  fetch(host + "/get/product/information", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adid: adid }),
  }).then((res) => res.json());
