import React, { useState, useEffect } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./uploadimage.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export const UploadImages = () => {
  const [imagefile, setimagefile] = useState([]);

  const fileSelect = (e) => {
    const { files } = e.target;
    setimagefile([...imagefile, ...files]);
  };

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <Topbar title="Upload Images & Cover" />
      <div className="upload-image-container">
        <div className="image-max-warn">
          Max only 12 Images are allowed to upload
        </div>
        <div className="upload-image-button-container">
          <div className="upload-image-button">
            <input
              className="fileinput"
              onChange={fileSelect}
              // ref={imageUpload} id='fileinput' onClick={() => setimagefile([])} onChange={fileSelect}
              type="file"
              name="myfile"
              accept="image/*"
              multiple
            />
            UPLOAD IMAGES
            <img alt="images" src={require("../../../assets/icon/image.png")} />
          </div>
        </div>
        {imagefile && (
          <Slider {...settings}>
            {imagefile.map((x, i) => {
              return (
                <>
                  <div
                    style={{
                      backgroundImage:
                        "url(" + URL.createObjectURL(imagefile[i]) + ")",
                    }}
                    key={i}
                    className="show-image-container-image"
                  >
                    <img
                      onClick={() => {
                        const deleteImage = window.confirm(
                          "Are you sure to Delete this image ?"
                        );
                        if (deleteImage) {
                          setimagefile(
                            imagefile.filter((x) => x !== imagefile[i])
                          );
                        } else {
                        }
                      }}
                      className="upload-image-delete"
                      alt="delete"
                      src={require("../../../assets/icon/bin.png")}
                    />
                    <div className="image-cover-button">Use Cover</div>
                  </div>
                </>
              );
            })}
          </Slider>
        )}
      </div>
      <Link style={{ textDecoration: "none" }} to="/personal-info">
        <div style={{ margin: "10px" }} className=" next-button-properties">
          <h3 size={25} weight="bold">
            Next
          </h3>
        </div>
      </Link>
    </>
  );
};
