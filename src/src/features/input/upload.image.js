import React, { useState, useContext } from "react";
import {
  TextInput,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  PermissionsAndroid,
  Alert,
} from "react-native";
import { Text } from "../../components/topography/text.component";
import { View } from "../../components/division/view.division";
import { HR1 } from "../../components/global/global.component";
// import { Image } from "../../components/Image/image.component";
import { TopBar } from "../../components/global/topnavbar.global";
import ImagePicker from "react-native-image-crop-picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InputSellContext } from "../../services/sell.input.context";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Theme } from "./../../infrastructure/theme/index";
import { UserContext } from "../../services/user.contex";

const { bg, text, theme } = Theme.colors;

export const UploadImages = ({ navigation }) => {
  // const [images, setImages] = useState([]);
  const { images, setImages, setThumbnail, Thumbnail } =
    useContext(InputSellContext);
  const { signedin } = useContext(UserContext);

  const [filePath, setFilePath] = useState();

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
          }
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
          }
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert("Write permission err", err);
      }
      return false;
    } else return true;
  };

  const ChooseImage = (type) => {
    let options = {
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.5,
      maxFiles: 10,
      mediaType: "photo",
    };

    ImagePicker.openPicker(options).then(
      (response) => {
        let extArray = response[0].path.split("/");
        let filename = extArray[extArray.length - 1];
        !Thumbnail && setThumbnail(filename);
        setImages([...images, ...response]);
      }

      // response.map((res, i) => setImages([...images, response[i].path]))
    );
    // launchImageLibrary(options, (response) => {
    //   console.log("Response = ", response);

    //   if (response.didCancel) {
    //     alert("User cancelled camera picker");
    //     return;
    //   } else if (response.errorCode == "camera_unavailable") {
    //     alert("Camera not available on device");
    //     return;
    //   } else if (response.errorCode == "permission") {
    //     alert("Permission not satisfied");
    //     return;
    //   } else if (response.errorCode == "others") {
    //     alert(response.errorMessage);
    //     return;
    //   }
    //   let source = response.assets[0].uri;
    //   setImages([...images, source]);
    // });
  };
  const captureImage = async (type) => {
    let options = {
      mediaType: "photo",
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        if (response.didCancel) {
          alert("User cancelled camera picker");
          return;
        } else if (response.errorCode == "camera_unavailable") {
          alert("Camera not available on device");
          return;
        } else if (response.errorCode == "permission") {
          alert("Permission not satisfied");
          return;
        } else if (response.errorCode == "others") {
          alert(response.errorMessage);
          return;
        } else {
          let source = response.assets[0].uri;
          setImages([...images, source]);
        }
      });
    }
  };
  // const OpenCamera = () => {
  //   const options = {
  //     storageOptions: {
  //       path: "images",
  //       mediaType: "photo",
  //     },
  //     includeBase64: true,
  //   };
  //   launchCamera(options, (response) => {
  //     if (response.didCancel) {
  //       console.log("User cancelled image picker");
  //     } else if (response.error) {
  //       console.log("ImagePicker Error: ", response.error);
  //     } else if (response.customButton) {
  //       console.log("User tapped custom button: ", response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       let source = {
  //         uri: "data:image/jpeg;base64," + response.assets[0].base64,
  //       };
  //       setImages([...images, source]);
  //     }
  //   });
  // };
  const ImagesMap = () => {
    return (
      <View>
        <ScrollView pagingEnabled horizontal>
          {images &&
            images.map((as, i) => {
              return (
                <View
                  key={i}
                  padd={10}
                  // bcC={bg.green}
                  // marr={5}
                  ofl="hidden"
                  // border="1px grey"
                  ofl="hidden"
                  borR={5}
                  width={Dimensions.get("window").width + "px"}
                  height="400px"
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: bg.red,
                    }}
                    source={{ uri: images[i].path }}
                  />
                  <View
                    width="100%"
                    jus="center"
                    fdr="row"
                    opacity={0.7}
                    position="absolute"
                    Bottom="10"
                  >
                    <View
                      onpress={() => {
                        Alert.alert(
                          "Delete",
                          "Are you sure to delete this image.",
                          [
                            {
                              text: "No",

                              style: "cancel",
                            },
                            {
                              text: "Yes",
                              onPress: () =>
                                setImages(
                                  images.filter((x) => x !== images[i])
                                ),
                            },
                          ]
                        );
                      }}
                      touchable
                      tblC={bg.white}
                      borR={10}
                      height="50px"
                      width="50px"
                      bcC={bg.red}
                      padding="10"
                      marr={5}
                      jus="center"
                    >
                      <Image
                        style={{
                          width: 40,
                          height: 40,
                        }}
                        source={require("../../../assets/icon/bin.png")}
                      />
                    </View>
                    <View
                      opacity={images[i].path.includes(Thumbnail) ? 1 : 0.7}
                      touchable
                      onpress={() => {
                        let extArray = images[i].path.split("/");
                        let filename = extArray[extArray.length - 1];
                        setThumbnail(filename);
                      }}
                      tblC={bg.white}
                      borR={10}
                      marr={5}
                      height="50px"
                      width="40%"
                      bcC={bg.green}
                      padding="10"
                      jus="center"
                    >
                      <Text color={text.white} size={22} weight="bold">
                        Use Cover
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      <TopBar navigation={navigation}>Upload Images & Cover</TopBar>
      <Text ali="center" weight="bold" size={15}>
        Max only 12 Images are allowed to upload.
      </Text>
      <HR1 />

      <View jus="center" fdr="row">
        <View
          touchable
          onpress={() => ChooseImage()}
          tblC={bg.pink}
          marr={10}
          padd={20}
          jus="center"
          bcC={bg.purple}
          fdr="row"
          borR={5}
        >
          <Text
            marR={10}
            color={text.white}
            trans="uppercase"
            size="20"
            weight="bold"
          >
            Upload Images
          </Text>
          <Image
            width="30"
            height="30"
            source={require("../../../assets/icon/image.png")}
          />
        </View>
      </View>

      <HR1 />
      <View jus="space-between" fdr="row" fwr="wrap">
        <ImagesMap items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </View>
      <View
        onpress={() =>
          signedin
            ? navigation.navigate("personal-info")
            : navigation.navigate("account")
        }
        tblC="green"
        touchable
        width="95%"
        padd={10}
        opacity={signedin ? 1 : 0.5}
        bcC={bg.skyblue}
        border="1px grey"
        borR={5}
        marT={10}
        marR={20}
        marL={10}
      >
        <Text size={25} color={text.white} weight="bold">
          Next
        </Text>
      </View>
    </>
  );
};
