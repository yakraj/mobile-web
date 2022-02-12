import React from "react";
import "./chattingui.css";
import person from "../../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import FlatList from "flatlist-react";
const people = [
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
  { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
  { firstName: "John", lastName: "Doe", info: { age: 18 } },
  { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
  { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
  { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
  { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
  { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
  { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
  { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
];
export const ChattingUI = () => {
  const navigate = useNavigate();
  const renderPerson = (person, idx) => {
    return (
      <li key={idx}>
        <b>
          {person.firstName} {person.lastName}
        </b>
        (<span>{person.info.age}</span>)
      </li>
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
          alt="goback"
          src={require("../../../assets/icon/three-dot.svg").default}
        />
      </div>
      <FlatList
        list={people}
        style={{ height: "70vh" }}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
        reversed={true}
        sortBy={["firstName", { key: "lastName", descending: true }]}
        groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
      />
      {/* this is chat sening area */}
      <div className="typechatbottom">
        <textarea lineHeights={10} type="text" className="messagetypeui" />
        <img
          width="30px"
          height="30px"
          alt="goback"
          src={require("../../../assets/icon/launch.png")}
        />
      </div>
    </>
  );
};
