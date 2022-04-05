import React, { useState, useEffect, lodash } from "react";
import { UploadImage, CreateAd, AdThumbnail } from "./components/sell.service";
import imageCompression from "browser-image-compression";
export const InputSellContext = React.createContext();

export const InputSellProvider = ({ children }) => {
  // these are cagoterizing
  const [catogery, setcatogery] = useState();
  const [subcatogery, setsubcatogery] = useState();
  const [superCatogery, setsuperCatogery] = useState();

  // states for apratments and house
  const [images, setImages] = useState([]);
  const [cmpImg, setcmpImg] = useState([]);
  // THESE ARE SOME STATES FOR IMPORTANT INFORMATION;
  const [adTitle, setadTitle] = useState("");
  const [adDescription, setadDescription] = useState("");
  const [adPrice, setadPrice] = useState("");
  const [TextC, setTextC] = useState("");
  const [tags, setTags] = useState([]);
  const [facingDropdown, setFacingDropdown] = useState("hello there");
  const [SelectedItem, setSelectedItem] = useState([]);
  const [Bedrooms, setBedrooms] = useState([]);
  const [Bathrooms, setBathrooms] = useState([]);
  const [Furnishing, setFurnishing] = useState([]);
  const [ConstructionStatus, setConstructionStatus] = useState([]);
  const [ListedBy, setListedBy] = useState([]);
  const [Bachlors, setBachlors] = useState([]);
  const [CarParking, setCarParking] = useState([]);
  const [buildArea, setBuildArea] = useState();
  const [CarpetArea, setCarpetArea] = useState();
  const [ApartFaceing, setApartFaceing] = useState("select");
  // states for rent and sell shop and offinces
  const [Washrooms, setWashrooms] = useState();
  // states for Sell Rent Land and Plot
  const [PlotArea, setPlotArea] = useState();
  const [PlotLength, setPlotLength] = useState();
  const [PlotBreadth, setPlotBreadth] = useState();
  // states for paying guest
  const [MealsInc, setMealsInc] = useState();
  // States for roommate
  const [SearchGender, setSearchGender] = useState();
  const [ageRange, setageRange] = useState();
  const [RoommateFor, setRoommateFor] = useState();
  const [AgeRange, setAgeRange] = useState();
  // States for Sell Car
  const [VehicleBrand, setVehicleBrand] = useState();
  const [VehicleModel, setVehicleModel] = useState();
  const [VehicleYear, setVehicleYear] = useState();
  const [VehicleFuel, setVehicleFuel] = useState();
  const [VehicleTransmission, setVehicleTransmission] = useState();
  const [KmDriver, setKmDriver] = useState();
  const [VehiclePartType, setVehiclePartType] = useState();
  // Used Duration
  const [UsedMonths, setUsedMonths] = useState();
  const [UsedYears, setUsedYears] = useState();
  const [UsedDuration, setUsedDuration] = useState();

  // For Job
  const [SalaryPeriod, setSalaryPeriod] = useState();
  const [WorkPosition, setWorkPosition] = useState();
  const [SalaryAmount, setSalaryAmount] = useState();
  // for computer processor
  const [ComputerProcessor, setComputerProcessor] = useState();
  const [ComputerRam, setComputerRam] = useState();
  const [ComputerStorage, setComputerStorage] = useState();
  const [ComputerStorageType, setComputerStorageType] = useState();
  const [ComputerGraphics, setComputerGraphics] = useState();
  const [ComputerGraphicsMemory, setComputerGraphicsMemory] = useState();
  const [ComputerMonitorAvail, setComputerMonitorAvail] = useState();
  const [ComputerAcc, setComputerAcc] = useState();
  // console.log(ComputerStorage, ComputerStorageType);
  // for Laptop
  const [LaptopScreen, setLaptopScreen] = useState();
  //  for Monitor
  const [MonitorType, setMonitorType] = useState();
  const [MonitorSize, setMonitorSize] = useState();
  // for Brand
  const [Brandname, setBrandname] = useState();

  // for mobile
  const [MobileCamera, setMobileCamera] = useState();
  const [Mobilebattery, setMobilebattery] = useState();
  const [MobileOs, setMobileOs] = useState();
  //  for printers
  const [Printer, setPrinter] = useState();
  //  for Books

  const [Bookyear, setBookyear] = useState();
  const [BookAuthor, setBookAuthor] = useState();
  //  for Fashion
  const [ClothSize, setClothSize] = useState();
  //  for Pets
  const [PetGender, setPetGender] = useState();
  // this is for product thumbnail
  const [Thumbnail, setThumbnail] = useState();

  //  this is for mobile number
  const [isEnabled, setIsEnabled] = useState(true);
  const [MobNumber, setMobNumber] = useState();
  const [allowMobile, setAllowMobile] = useState(true);

  async function singleFileCompressor(files, setfile, extendfile) {
    // console.log(files);
    const imageFile = files;
    // console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // console.log(
      //   "compressedFile instanceof Blob",
      //   compressedFile instanceof Blob
      // ); // true
      // console.log(
      //   `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      // ); // smaller than maxSizeMB
      // setfile && setfile(compressedFile);
      return compressedFile;
      // extendfile && extendfile([...cmpImg, compressedFile]);

      // await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
      console.log(error);
    }
  }

  const SellProducts = () => {
    UploadImage(images, "yakraj");
  };

  const clearFunc = () => {
    setcatogery("");
    setsubcatogery("");
    setsuperCatogery("");
    // setseller();
    setThumbnail("");
    setadTitle("");
    setadDescription("");
    setadPrice("");
    setTags([]);
    // setaddress();
    setBrandname("");
    setMonitorSize("");
    setComputerProcessor("");
    setComputerRam("");
    setComputerStorage("");
    setMobileCamera("");
    setMobilebattery("");
    setMobileOs("");
    setUsedYears("");
    setImages([]);
    setUsedMonths("");
    setComputerStorageType("");
    setComputerGraphics("");
    setComputerGraphicsMemory("");
    setComputerMonitorAvail("");
    setComputerAcc("");
    setLaptopScreen("");
    setVehicleBrand("");
    setVehicleModel("");
    setVehicleYear("");
    setVehicleFuel("");
    setVehicleTransmission("");
    setKmDriver("");
    setVehiclePartType("");
    setMonitorType("");
    setBookyear("");
    setBookAuthor("");
  };

  const NewProductAd = (thumb, username) => {
    CreateAd({
      data: {
        catogery: catogery,
        subcatogery: subcatogery,
        superCatogery: superCatogery,
        seller: username.username,
        Thumbnail: thumb,
        adTitle: adTitle,
        adDescription: adDescription,
        adPrice: adPrice,
        tags: tags,
        address: "midc malegaon sinnar",
        Brandname: Brandname,
        MonitorSize: MonitorSize,
        ComputerProcessor: ComputerProcessor,
        ComputerRam: ComputerRam,
        ComputerStorage: ComputerStorage,
        MobileCamera: MobileCamera,
        Mobilebattery: Mobilebattery,
        MobileOs: MobileOs,
        UsedYears: UsedYears,
        images: cmpImg,
        UsedMonths: UsedMonths,
        ComputerStorageType: ComputerStorageType,
        ComputerGraphics: ComputerGraphics,
        ComputerGraphicsMemory: ComputerGraphicsMemory,
        ComputerMonitorAvail: ComputerMonitorAvail,
        ComputerAcc: ComputerAcc,
        LaptopScreen: LaptopScreen,
        VehicleBrand: VehicleBrand,
        VehicleModel: VehicleModel,
        VehicleYear: VehicleYear,
        VehicleFuel: VehicleFuel,
        VehicleTransmission: VehicleTransmission,
        KmDriver: KmDriver,
        VehiclePartType: VehiclePartType,
        MonitorType: MonitorType,
        Bookyear: Bookyear,
        BookAuthor: BookAuthor,
        clearFunc: clearFunc,
        mobile: allowMobile ? (MobNumber ? MobNumber : username.mobile) : null,
      },
    });
  };
  const cotogeryJoiner = (catogery, subcatogery, superCatogery) => {
    setcatogery(catogery);
    setsubcatogery(subcatogery);
    setsuperCatogery(superCatogery);
  };

  const confirminput = () => {
    // console.log(MonitorType, MonitorSize);
  };

  const UploadAdThumbnail = (user) => {
    // console.log(Thumbnail);
    AdThumbnail(singleFileCompressor(Thumbnail)).then((response) =>
      response.status === 200
        ? response.json().then((res) => NewProductAd(res, user))
        : console.log("something went wrong")
    );
  };

  return (
    <InputSellContext.Provider
      value={{
        // for stll and rent and sell apart and rooms
        facingDropdown,
        setFacingDropdown,
        SelectedItem,
        setSelectedItem,
        Bedrooms,
        setBedrooms,
        Furnishing,
        setFurnishing,
        ConstructionStatus,
        setConstructionStatus,
        ListedBy,
        setListedBy,
        Bachlors,
        setBachlors,
        CarParking,
        setCarParking,
        Bathrooms,
        setBathrooms,
        buildArea,
        setBuildArea,
        ApartFaceing,
        setApartFaceing,
        CarpetArea,
        setCarpetArea,
        allowMobile,
        setAllowMobile,
        // for rent and sell offices
        Washrooms,
        setWashrooms,
        // for Rent and Sell Plot and land
        PlotArea,
        setPlotArea,
        PlotLength,
        setPlotLength,
        PlotBreadth,
        setPlotBreadth,
        // for Paying guests an
        MealsInc,
        setMealsInc,
        // for RoomMate
        SearchGender,
        setSearchGender,
        ageRange,
        setageRange,
        RoommateFor,
        setRoommateFor,
        AgeRange,
        setAgeRange,
        // for Vehicle
        VehicleBrand,
        setVehicleBrand,
        VehicleModel,
        setVehicleModel,
        VehicleYear,
        setVehicleYear,
        VehicleFuel,
        setVehicleFuel,
        VehicleTransmission,
        setVehicleTransmission,
        KmDriver,
        setKmDriver,
        VehiclePartType,
        setVehiclePartType,
        // used duration
        UsedMonths,
        setUsedMonths,
        UsedYears,
        setUsedYears,
        // for Jobs
        SalaryPeriod,
        setSalaryPeriod,
        WorkPosition,
        setWorkPosition,
        SalaryAmount,
        setSalaryAmount,
        // For computer
        ComputerProcessor,
        setComputerProcessor,
        ComputerRam,
        setComputerRam,
        ComputerStorage,
        setComputerStorage,
        ComputerStorageType,
        setComputerStorageType,
        ComputerGraphics,
        setComputerGraphics,
        ComputerGraphicsMemory,
        setComputerGraphicsMemory,
        ComputerMonitorAvail,
        setComputerMonitorAvail,
        ComputerAcc,
        setComputerAcc,
        LaptopScreen,
        setLaptopScreen,
        // for Monitor
        MonitorType,
        setMonitorType,
        MonitorSize,
        setMonitorSize,
        // for Brandname
        Brandname,
        setBrandname,
        // for mobile
        MobileCamera,
        setMobileCamera,
        Mobilebattery,
        setMobilebattery,
        MobileOs,
        setMobileOs,

        Printer,
        setPrinter,
        // this is for books
        Bookyear,
        setBookyear,
        BookAuthor,
        setBookAuthor,

        ClothSize,
        setClothSize,
        PetGender,
        setPetGender,

        // this is for special important information
        adTitle,
        setadTitle,
        adDescription,
        setadDescription,
        adPrice,
        setadPrice,
        tags,
        setTags,
        TextC,
        setTextC,

        // this is for images of product
        images,
        setImages,
        // this for sell product
        SellProducts,
        NewProductAd,

        // this is for product thumbnail
        Thumbnail,
        setThumbnail,

        // these are for cato and subcatogery
        cotogeryJoiner,
        // for confirm that
        confirminput,
        isEnabled,
        setIsEnabled,
        MobNumber,
        setMobNumber,
        cmpImg,
        setcmpImg,
        UsedDuration,
        setUsedDuration,
        UploadAdThumbnail,
      }}
    >
      {children}
    </InputSellContext.Provider>
  );
};
