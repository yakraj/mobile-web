import React, { useState, useContext, useEffect } from "react";
import {
  TextInput,
  TouchableNativeFeedback,
  PermissionsAndroid,
  ImageBackground,
  ScrollView,
  Switch,
  StyleSheet,
  Alert,
} from "react-native";
import { Text } from "../../components/topography/text.component";
import { View } from "../../components/division/view.division";
import { HR1 } from "../../components/global/global.component";
import { Image } from "../../components/Image/image.component";
import { TopBar } from "../../components/global/topnavbar.global";
import { InputSellContext } from "../../services/sell.input.context";
import { Theme } from "./../../infrastructure/theme/index";
import { UserContext } from "../../services/user.contex";
import { SearchContext } from "../../services/search.context";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import Geolocation from "@react-native-community/geolocation";

import { Marker } from "react-native-maps";
import { host } from "./../../services/host.network";
export const PersonalInfo = ({ navigation }) => {
  const { bg, text, theme } = Theme.colors;

  const {
    LocationValue,
    setLocationValue,
    AddressAutocomplete,
    autocomplete,
    GetTextLocation,
    setautocomplete,
    RecentautocompleteKey,
  } = useContext(SearchContext);

  const { NewProductAd, isEnabled, setIsEnabled, MobNumber, setMobNumber } =
    useContext(InputSellContext);
  const {
    usercrd,
    signedin,
    setsearchaddressName,
    searchaddressName,
    GetAddress,
    GetLocation,
    userAddresssugg,
    LoadinguserAdd,
    lattitude,
    longitude,
    setlattitude,
    setlongitude,
  } = useContext(UserContext);

  useEffect(() => {
    const delayAutosuggestion = setTimeout(() => {
      if (LocationValue.length > 1) {
        searchaddressName !== LocationValue &&
          RecentautocompleteKey !== LocationValue &&
          AddressAutocomplete(LocationValue);
      }
    }, 1000);

    return () => clearTimeout(delayAutosuggestion);
  }, [LocationValue]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  var NewMap = {
    mapRegion: {
      latitude: lattitude ? parseFloat(lattitude) : 19.88134866090193,
      longitude: longitude ? parseFloat(longitude) : 73.97658792586263,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
  };

  const CurrentLocationReq = () => {
    const granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Access Required",
        message: "This App needs to Access your location",
      }
    );
    granted &&
      Geolocation.getCurrentPosition(
        (info) =>
          info && GetTextLocation([info.coords.latitude, info.coords.longitude])
      );
  };

  return (
    <>
      <TopBar navigation={navigation}>Personal Information</TopBar>
      <ScrollView>
        <View padd={10}>
          <View width="100%" fdr="row">
            <View
              marr={5}
              border="1px grey"
              ofl="hidden"
              borR={50}
              width="100px"
              height="100px"
            >
              <Image
                width={100}
                height={100}
                style={{ width: 100, height: 100, backgroundColor: bg.red }}
                source={{ uri: host + "/useravatar/" + usercrd.image }}
              />
            </View>
            <View marL={20} width="70%" ali="flex-start">
              <Text size="14" ali="left" weight="bold">
                Your name on Ad.
              </Text>
              {/* <TextInput
                defaultValue="Yakraj Pariyar"
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  borderRadius: 5,
                  padding: 8,
                  fontSize: 15,
                  marginTop: 5,
                  color: "grey",
                  width: "100%",
                }}
              /> */}
              <Text size="20" ali="left" weight="bold">
                {usercrd.firstname + " " + usercrd.lastname}
              </Text>
            </View>
          </View>
          <View padd={10} fdr="row" jus="space-between" width="100%">
            <Text size="16" weight="bold">
              Allow people to call you for this Ad.
            </Text>

            <Switch
              trackColor={{ false: bg.green, true: bg.skyblue }}
              thumbColor={isEnabled ? bg.green : bg.red}
              ios_backgroundColor={bg.grey}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <HR1 />
          <View
            padd={20}
            opacity={!isEnabled ? 0.3 : 1}
            fdr="row"
            jus="space-between"
          >
            <Text size="25" weight="bold" marR={15}>
              Phone:
            </Text>
            <TextInput
              onChangeText={(e) => setMobNumber(e)}
              defaultValue={MobNumber ? MobNumber : "+977 " + usercrd.mobile}
              keyboardType="phone-pad"
              style={{
                color: text.grey,
                borderWidth: 1,
                borderColor: bg.grey,
                borderRadius: 5,
                padding: 8,
                fontSize: 15,
                marginTop: 5,
                width: "60%",
              }}
            />
          </View>
          <HR1 />
          <View jus="flex-start" ali="flex-start" width="100%" padT={5}>
            <Text size="25" weight="bold">
              Location
            </Text>

            <View border="1px grey" borR={7} ofl="hidden" width="100%">
              <View width="100%">
                <TextInput
                  selectTextOnFocus
                  onChange={() =>
                    LocationValue.length < 2 ? setautocomplete([]) : null
                  }
                  defaultValue={
                    searchaddressName ? searchaddressName : LocationValue
                  }
                  // ref={locationinput}
                  onChangeText={(e) => setLocationValue(e)}
                  placeholder="Start typing your address"
                  style={{
                    borderWidth: 1,
                    borderColor: bg.grey,
                    borderRadius: 5,
                    padding: 8,
                    fontSize: 15,
                    width: "100%",
                  }}
                />
                <View
                  tblC={bg.purple}
                  Top={5}
                  tofl
                  touchable
                  jus="center"
                  ali="center"
                  Right={5}
                  position="absolute"
                  onpress={() => CurrentLocationReq()}
                >
                  <ImageBackground
                    style={{
                      height: 35,
                      width: 35,
                    }}
                    source={require("../../../assets/icon/my-location.png")}
                  />
                </View>
              </View>
              {autocomplete.map((x, i) => {
                return (
                  <View key={i} width="100%">
                    <HR1 />
                    <View
                      touchable
                      // onpress={() =>
                      //   UserSetAdd(
                      //     x.address_components[0].long_name +
                      //       " " +
                      //       x.address_components[1].long_name +
                      //       " " +
                      //       x.address_components[2].long_name +
                      //       " " +
                      //       x.address_components[3].long_name,
                      //     x.geometry.location.lat,
                      //     x.geometry.location.lng
                      //   )
                      // }
                      onpress={() => {
                        setLocationValue(x.description);
                        setsearchaddressName(x.description);
                        GetAddress(x.place_id);
                        // textinput.current.focus();
                      }}
                      fdr="row"
                      width="100%"
                      bcC="pink"
                      padd={10}
                    >
                      <Icon name="place" type="material" color="blue" />
                      <Text color={text.success} weight="bold">
                        {/* {x.address_components[0].long_name +
                        " " +
                        x.address_components[1].long_name +
                        " " +
                        x.address_components[2].long_name +
                        " " +
                        x.address_components[3].long_name} */}
                        {x.description}
                      </Text>
                    </View>
                  </View>
                );
              })}

              {lattitude && longitude ? (
                <MapView
                  mapType="satellite"
                  style={{ height: 400, width: "100%" }}
                  showsUserLocation={false}
                  zoomEnabled={true}
                  zoomControlEnabled={true}
                  followsUserLocation={true}
                  // onUserLocationChange={(event) => console.log("this is event",event.nativeEvent)}
                  showsUserLocation={true}
                  followsUserLocation={true}
                  region={NewMap.mapRegion}
                  // initialRegion={{
                  //   latitude: lattitude ? lattitude : 19.88134866090193,
                  //   longitude: longitude ? longitude : 73.97658792586263,
                  //   latitudeDelta: 0.0022,
                  //   longitudeDelta: 0.0021,
                  // }}
                >
                  <Marker
                    draggable
                    onDragEnd={(e) => {
                      GetTextLocation([
                        e.nativeEvent.coordinate.latitude,
                        e.nativeEvent.coordinate.longitude,
                      ]);
                      // setlattitude(e.nativeEvent.coordinate.latitude);
                      // setlongitude(e.nativeEvent.coordinate.longitude);
                    }}
                    coordinate={{
                      latitude: lattitude
                        ? parseFloat(lattitude)
                        : 19.88134866090193,
                      longitude: longitude
                        ? parseFloat(longitude)
                        : 73.97658792586263,
                    }}
                    title={"My Location"}
                    // description={"Java Training Institute"}
                  />
                </MapView>
              ) : (
                <View>
                  <Text>No address is selected</Text>
                </View>
              )}
            </View>
          </View>
          <View
            onpress={() => {
              signedin
                ? Alert.alert(
                    "Creating Ad.",
                    "We will let you soon once your ad will be published.",
                    [
                      {
                        text: "OK",
                        onPress: () => {
                          NewProductAd(usercrd);
                          navigation.navigate("sell-now");
                          navigation.navigate("explore");
                        },
                      },
                    ]
                  )
                : navigation.navigate("account");
            }}
            tblC={bg.green}
            touchable
            width="100%"
            padd={10}
            bcC={bg.skyblue}
            border="1px grey"
            borR={5}
            marT={10}
            marB={10}
          >
            <Text size={25} color={text.white} weight="bold">
              Submit
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
