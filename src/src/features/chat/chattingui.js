import React, { useState } from "react";
import "./chattingui.css";
import person from "../../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import FlatList from "flatlist-react";
// var people = [{ firstName: "Elson", lastName: "Correia", info: { age: 24 } }];

export const ChattingUI = () => {
  const [people, setpeople] = useState([]);
  const addExt = () => {
    setpeople([
      ...people,
      { firstName: "John", lastName: "Doe", info: { age: people.length + 1 } },
    ]);
  };

  const navigate = useNavigate();
  const renderPerson = () => {
    return (
      <>
        <div>
          <div className="leftChat">
            <div className="bubble-chat">
              Here i'm to stay here in left side of column.
            </div>
          </div>
          <div className="chat-time">10:20 am</div>
        </div>
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
              Ok i'm good with you, stay at your side i'll be here at right.
            </div>
          </div>
          <div className="chat-time">10:20 am</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="topNavchatui">
        {/* leftside */}
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
              style={{ backgroundImage: `url(${person})` }}
            />
          </div>
          <h3>ashmita pariyar</h3>
          {/* rightside */}
        </div>
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
          list={[...people].reverse()}
          style={{ height: "70vh" }}
          renderItem={renderPerson}
          renderWhenEmpty={() => <div>You don't have any chat Yet!</div>}
          // groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
        />
      </div>
      {/* this is chat sening area */}
      <div className="typechatbottom">
        <textarea
          onInput={(e) => console.log(e)}
          rows={1}
          type="text"
          className="messagetypeui"
        />

        <img
          className="blackblue"
          onClick={() => addExt()}
          width="30px"
          height="30px"
          alt="goback"
          src={require("../../../assets/icon/send.svg").default}
        />
      </div>
    </>
  );
};
