import React from "react";
import { Image, View, Text, Modal, Dimensions } from "react-native";
// import ImageViewer from "react-native-image-zoom-viewer";
import { Icon } from "react-native-elements";

export const ZoomImage = ({ navigation }) => {
  const images = [
    {
      url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    },
    {
      url: "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Blue,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1547329278/wdvssqelmstkfgoyxac5.jpg",
    },
    {
      url: "https://petapixel.com/assets/uploads/2019/08/selfportraitfeattt.jpg",
    },
    {
      url: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/06/500.jpg?resize=750%2C499&ssl=1",
    },
    {
      url: "",
      props: {
        // Or you can set source directory.
        source: require("../../../assets/profile.jpg"),
      },
    },
  ];

  return (
    <></>
    // <Modal visible={true} transparent={true}>
    //   <ImageViewer
    //     renderHeader={() => (
    //       <Icon
    //         raised
    //         name="arrow-circle-left"
    //         type="font-awesome"
    //         color="#000"
    //         onPress={() => navigation.goBack()}
    //       />
    //     )}
    //     onSwipeDown={() => console.log("swipped down")}
    //     imageUrls={images}
    //   />
    // </Modal>
  );
};
