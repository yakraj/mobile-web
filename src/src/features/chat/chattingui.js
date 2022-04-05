import React, { useState, useContext } from "react";
import "./chattingui.css";
import person from "../../../assets/profile.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import FlatList from "flatlist-react";
import { ChattingContext } from "./../../services/chatting.context";
import { UserContext } from "./../../services/user.contex";
// var people = [{ firstName: "Elson", lastName: "Correia", info: { age: 24 } }];

export const ChattingUI = (props) => {
  const {
    ReturnChats,
    CreateProductChat,
    createFirstchat,
    userData,
    LastchatId,
  } = useContext(ChattingContext);
  const { usercrd, signedin } = useContext(UserContext);
  let location = useLocation();

  const [people, setpeople] = useState([]);
  const [chatText, onChangeChatText] = useState();
  const { seller, buyer, adid, chatid } = location.state.Details;

  var findInclude = chatid
    ? ReturnChats.find((x) => x.id === chatid)
    : ReturnChats.find((x) => x.id === LastchatId);
  const addExt = () => {
    setpeople([
      ...people,
      { firstName: "John", lastName: "Doe", info: { age: people.length + 1 } },
    ]);
  };

  const navigate = useNavigate();
  const renderPerson = (person) => {
    return (
      <>
        {person.userfrom === usercrd.username ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div className="leftChat">
              <div
                style={{ background: "green", color: "#fff" }}
                className="bubble-chat"
              >
                {person.text}
              </div>
            </div>
            <div className="chat-time">
              {new Date(person.date).getHours() > 12
                ? new Date(person.date).getHours() -
                  12 +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " PM"
                : new Date(person.date).getHours() +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " AM"}
            </div>
          </div>
        ) : (
          <div>
            <div className="leftChat">
              <div className="bubble-chat">{person.text}</div>
            </div>
            <div className="chat-time">
              {new Date(person.date).getHours() > 12
                ? new Date(person.date).getHours() -
                  12 +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " PM"
                : new Date(person.date).getHours() +
                  ":" +
                  new Date(person.date).getMinutes() +
                  " AM"}
            </div>
          </div>
        )}
      </>
    );
  };

  // returning my own chats according this window chats
  var FindMy = chatid
    ? ReturnChats
      ? ReturnChats.find((x) => x.id === chatid)
      : []
    : ReturnChats
    ? ReturnChats.find((x) => x.id === LastchatId)
    : [];

  return (
    <>
      <div className="topNavchatui">
        {/* leftside */}
        {userData && (
          <div className="chatuileft">
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="returnchatui"
            >
              <img
                style={{ height: "35px", width: "35px" }}
                alt="goback"
                src={require("../../../assets/icon/back.png")}
              />
              <div
                className="chatperson"
                style={{
                  backgroundImage: `url(http://localhost:5001/useravatar/${userData[0].image}`,
                }}
              />
            </div>
            <h3>
              {userData && userData[0].firstname + " " + userData[0].lastname}
            </h3>
            {/* rightside */}
          </div>
        )}
        <img
          width="30px"
          alt="goback"
          src={require("../../../assets/icon/three-dot.svg").default}
        />
      </div>
      <div
        style={{
          height: "84vh",
          overflow: "scroll",
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <FlatList
          list={
            ReturnChats.length
              ? FindMy
                ? [...FindMy.content].reverse()
                : []
              : []
          }
          style={{ height: "70vh" }}
          renderItem={renderPerson}
          renderWhenEmpty={() => <div>You don't have any chat Yet!</div>}
          // groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
        />
      </div>
      {/* this is chat sening area */}
      <div className="typechatbottom">
        <textarea
          onInput={(e) => onChangeChatText(e.target.value)}
          rows={1}
          value={chatText}
          type="text"
          className="messagetypeui"
        />

        <img
          className="blackblue"
          onClick={() => {
            findInclude
              ? CreateProductChat(
                  chatid ? chatid : LastchatId,
                  chatText,
                  usercrd.username
                )
              : createFirstchat(usercrd.username, seller, adid, chatText);
            onChangeChatText("");
          }}
          width="30px"
          height="30px"
          alt="goback"
          src={require("../../../assets/icon/send.svg").default}
        />
      </div>
    </>
  );
};
