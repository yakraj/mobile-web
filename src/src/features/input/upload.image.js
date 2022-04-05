import React, { useState, useEffect, useContext } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./uploadimage.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { InputSellContext } from "./../../services/sell.input.context";
import imageCompression from "browser-image-compression";
import { UserContext } from "../../services/user.contex";
export const UploadImages = () => {
  const navigate = useNavigate();
  const { images, setImages, setThumbnail, Thumbnail, cmpImg, setcmpImg } =
    useContext(InputSellContext);

  const { signedin } = useContext(UserContext);
  const NavigateNext = () => {
    Thumbnail
      ? signedin
        ? navigate("/personal-info")
        : navigate("/login-user")
      : window.alert("Please select a cover Image.");
  };

  var cmpImages = [];

  async function handleImagecompress(files) {
    cmpImages = cmpImg;
    const imageFile = files;
    // console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1.2,
      maxWidthOrHeight: 1080,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // setcmpImg([...cmpImg, compressedFile]);
      cmpImages = [...cmpImages, compressedFile];
      setcmpImg(cmpImages);
    } catch (error) {
      console.log(error);
    }
  }

  const fileSelect = (e) => {
    const { files } = e.target;
    // console.log(files);
    // for (var i = 0; i < files.length; i++) {
    //   setTimeout(() => {
    //     console.log("hello there" + files[i]);
    //   }, 500);
    // setTimeout(
    //   function (y) {
    //     console.log(files[i]);
    //   },
    //   i * 500,
    //   i
    // ); // we're passing x
    // }
    for (var i = 0; i < files.length; i++) {
      handleImagecompress(files[i]);
    }
    setImages([...images, ...files]);
  };

  // const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
              // ref={imageUpload} id='fileinput' onClick={() => setImages([])} onChange={fileSelect}
              type="file"
              name="myfile"
              accept="image/*"
              multiple
            />
            UPLOAD IMAGES
            <img alt="images" src={require("../../../assets/icon/image.png")} />
          </div>
        </div>
        {images && (
          <Slider {...settings}>
            {images.map((x, i) => {
              return (
                <div key={i}>
                  <div
                    style={{
                      backgroundImage:
                        "url(" + URL.createObjectURL(images[i]) + ")",
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
                          setImages(images.filter((x) => x !== images[i]));
                          setcmpImg(
                            cmpImg.filter((x) => x.name !== images[i].name)
                          );
                          cmpImages = cmpImg.filter(
                            (x) => x.name !== images[i].name
                          );
                        } else {
                        }
                      }}
                      className="upload-image-delete"
                      alt="delete"
                      src={require("../../../assets/icon/bin.png")}
                    />
                    <div
                      style={{
                        opacity:
                          Thumbnail && Thumbnail.name === images[i].name
                            ? 1
                            : 0.7,
                        background:
                          Thumbnail && Thumbnail.name === images[i].name
                            ? "blue"
                            : "green",
                      }}
                      onClick={() => setThumbnail(images[i])}
                      className="image-cover-button"
                    >
                      Use Cover
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>

      <div
        onClick={() => NavigateNext()}
        style={{ margin: "10px" }}
        className=" next-button-properties"
      >
        <h3 size={25} weight="bold">
          Next
        </h3>
      </div>
    </>
  );
};
