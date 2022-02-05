import React from "react";
import "./style/product.css";
import { Topbar } from "./../../components/global/topbar";
import user from "../../../assets/profile.jpg";
export const ProductView = () => {
  const tryit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div style={{ marginBottom: "10%" }}>
      <Topbar title="Lenovo new set" />
      {/* this is for image section */}
      <div className="product-images">
        <img alt="product " src={require("../../../assets/mobile.jpg")} />
      </div>
      {/* this is for product and user info */}
      <div className="user-product-info">
        <div className="user-product-info-left">
          {/* icons */}
          <div className="product-icons">
            <img
              width="30px"
              alt="like"
              src={require("../../../assets/icon/like.svg").default}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>1015</p>
          </div>
          <div className="product-icons">
            <img
              width="30px"
              alt="heart"
              src={require("../../../assets/icon/heart.svg").default}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
              wishlist
            </p>
          </div>
          <div className="product-icons">
            <img
              width="30px"
              alt="view"
              src={require("../../../assets/icon/view.svg").default}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "grey" }}>54</p>
          </div>
        </div>
        <div className="userinfo">
          <div className="information">
            <h3>Ashmita Pariyar</h3>
            <p>View Profile</p>
          </div>
          <div
            className="userimage"
            style={{ backgroundImage: `url(${user})` }}
          />
        </div>
      </div>
      {/* product main info */}
      <div className="product-imp-info">
        <h3 className="product-title">Lenovo new set</h3>
        <div className="product-price-date">
          <h3>₹ 25000</h3>
          <p>27 June 2021</p>
        </div>
        <div className="product-location">
          <img
            className="blackblue"
            width="20px"
            src={require("../../../assets/icon/location.png")}
            alt="location"
          />
          <p>midc malegaon sinnar</p>
        </div>
      </div>
      {/* product details container */}
      <div class="product-details">
        <div className="product-details-title">
          <img
            width="12%"
            height="12%"
            src={require("../../../assets/decorate.png")}
            alt="decorate"
          />
          <h3>Product Details</h3>
          <img
            width="12%"
            height="12%"
            src={require("../../../assets/decorate.png")}
            alt="decorate"
          />
        </div>
        {tryit.map((x, i) => {
          return (
            <div key={i} className="product-details-items">
              <strong>Processor:</strong>
              <p style={{ marginLeft: "5px" }}>intel</p>
            </div>
          );
        })}
      </div>
      {/* product description */}
      <div class="product-details">
        <div className="product-details-title">
          <img
            width="12%"
            height="12%"
            src={require("../../../assets/decorate.png")}
            alt="decorate"
          />
          <h3>Product Description</h3>
          <img
            width="12%"
            height="12%"
            src={require("../../../assets/decorate.png")}
            alt="decorate"
          />
        </div>
        <p style={{ margin: "5px", textAlign: "center" }}>
          What is description with example? The definition of a description is a
          statement that gives details about someone or something. An example of
          description is a story about the places visited on a family trip. ...
          The type description of the fungus was written by a botanist.
        </p>
      </div>

      {/* chat call action */}
      <div className="chatcall-section">
        <div className="chat-call-action">
          <img
            alt="chat"
            src={require("../../../assets/navigation/chat.svg").default}
          />
          <h4>Chat</h4>
        </div>
        <div className="chat-call-action">
          <img
            width="15%"
            alt="chat"
            src={require("../../../assets/icon/call.png")}
          />
          <h4>Call</h4>
        </div>
      </div>
    </div>
  );
};
