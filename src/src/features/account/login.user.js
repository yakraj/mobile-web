import React, { useState, useContext, useEffect } from "react";
import "./loginuser.css";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
import { ChattingContext } from "./../../services/chatting.context";

export const LoginUser = () => {
  const { GetChatlist } = useContext(ChattingContext);
  const { GetuseruiAds, LoginUser, loginerror, lodLogin } =
    useContext(UserContext);
  // useEffect(() => {
  //   GetuseruiAds();
  // }, []);

  const [mobile, setmobile] = useState();
  const [key, setkey] = useState();

  return (
    <>
      <Topbar title="Log In" />
      <div className="login-container">
        <div className="login-content">
          <h2>Sunaulo</h2>
          <input
            onChange={(e) => setmobile(e.target.value)}
            type="text"
            placeholder="mobile"
          />
          <input
            onChange={(e) => setkey(e.target.value)}
            type="password"
            placeholder="password"
          />
          {loginerror && <p style={{ color: "red" }}>{loginerror}</p>}

          {lodLogin ? (
            <img
              width="50"
              src={require("../../../assets/loading.gif")}
              alt="loading"
            />
          ) : (
            <div
              onClick={() => LoginUser(mobile, key, GetChatlist)}
              className="login-button"
            >
              Log In
            </div>
          )}

          <Link style={{ textDecoration: "none" }} to="/create-account">
            <p
              className="create-account"
              style={{ color: "blue", marginTop: "1rem", fontSize: "1rem" }}
            >
              Create an account
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
