import { host } from "../host.network";

export const UploadImage = (images, adid, Clearall, thumbnail) => {
  const data = new FormData();
  data.append("adid", adid);
  data.append("thumbnail", thumbnail);
  images.map((image, index) => {
    let extArray = image.path.split("/");
    let extension = extArray[extArray.length - 1];
    data.append("fileData", {
      uri: image.path,
      type: "image/jpeg",
      name: extension,
    });
  });

  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: data,
  };
  fetch(host + "/uploadimage", config)
    .then((checkStatusAndGetJSONResponse) => {
      // Clearall();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const CreateAd = (data) => {
  fetch(`${host}/neplx/creating/new_post/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      seller: data.seller,
      title: data.adTitle,
      description: data.adDescription,
      thumbnail: data.Thumbnail,
      price: data.adPrice,
      location: data.address,
      catogery: data.catogery,
      subcatogery: data.subcatogery,
      supercatogery: data.superCatogery,
      brand: data.Brandname,
      processor: data.ComputerProcessor,
      ram: data.ComputerRam,
      storage: data.ComputerStorage,
      screen_size: data.MonitorSize,
      camera: data.MobileCamera,
      battery: data.Mobilebattery,
      os: data.MobileOs,
      tags: data.tags,
      used_months: data.UsedMonths,
      used_years: data.UsedYears,
      screen_l_size: data.LaptopScreen,
      storage_type: data.ComputerStorageType,
      graphics_type: data.ComputerGraphics,
      graphics_storage: data.ComputerGraphicsMemory,
      monitor_included: data.ComputerMonitorAvail,
      included_acc: data.ComputerAcc,
      vehicle_brand: data.VehicleBrand,
      model: data.VehicleModel,
      year: data.VehicleYear,
      fuel: data.VehicleFuel,
      transmission: data.VehicleTransmission,
      KmDriver: data.KmDriver,
      parts_type: data.VehiclePartType,
      monitor_type: data.MonitorType,
      published_year: data.Bookyear,
      author: data.BookAuthor,
      mobile: data.Mobile,
    }),
  })
    .then((response) => response.json())
    .then((response) =>
      UploadImage(data.images, response, data.clearFunc, data.Thumbnail)
    );
};
