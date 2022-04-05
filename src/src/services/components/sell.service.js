import { host } from "../host.network";

export const UploadImage = (images, adid, Clearall, thumbnail) => {
  const data = new FormData();
  data.append("adid", adid);
  data.append("thumbnail", thumbnail);

  images.map((images, i) => {
    data.append("fileData", images);
  });

  // images.map((image, index) => {
  //   let extArray = image.path.split("/");
  //   let extension = extArray[extArray.length - 1];
  //   data.append("fileData", {
  //     uri: image.path,
  //     type: "image/jpeg",
  //     name: extension,
  //   });
  // });

  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "multipart/form-data",
    },
    body: data,
  };
  fetch(host + "/uploadimage", config)
    .then((checkStatusAndGetJSONResponse) => {
      Clearall();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AdThumbnail = (image) => {
  return image.then((img) => {
    const data = new FormData();
    data.append("fileData", img);

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",
      },
      body: data,
    };
    return fetch(host + "/app/ad/thumbnail", config);
  });
};

export const CreateAd = (Data) => {
  const data = Data.data;

  fetch(`${host}/neplx/creating/new_post/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      seller: data.seller ? data.seller : null,
      title: data.adTitle ? data.adTitle : null,
      description: data.adDescription ? data.adDescription : null,
      thumbnail: data.Thumbnail ? data.Thumbnail : null,
      price: data.adPrice ? data.adPrice : null,
      location: data.address ? data.address : null,
      catogery: data.catogery ? data.catogery : null,
      subcatogery: data.subcatogery ? data.subcatogery : null,
      supercatogery: data.superCatogery ? data.superCatogery : null,
      brand: data.Brandname ? data.Brandname : null,
      processor: data.ComputerProcessor ? data.ComputerProcessor : null,
      ram: data.ComputerRam ? data.ComputerRam : null,
      storage: data.ComputerStorage ? data.ComputerStorage : null,
      screen_size: data.MonitorSize ? data.MonitorSize : null,
      camera: data.MobileCamera ? data.MobileCamera : null,
      battery: data.Mobilebattery ? data.Mobilebattery : null,
      os: data.MobileOs ? data.MobileOs : null,
      tags: data.tags ? data.tags : null,
      used_months: data.UsedMonths ? data.UsedMonths : null,
      used_years: data.UsedYears ? data.UsedYears : null,
      screen_l_size: data.LaptopScreen ? data.LaptopScreen : null,
      storage_type: data.ComputerStorageType ? data.ComputerStorageType : null,
      graphics_type: data.ComputerGraphics ? data.ComputerGraphics : null,
      graphics_storage: data.ComputerGraphicsMemory
        ? data.ComputerGraphicsMemory
        : null,
      monitor_included: data.ComputerMonitorAvail
        ? data.ComputerMonitorAvail
        : null,
      included_acc: data.ComputerAcc ? data.ComputerAcc : null,
      vehicle_brand: data.VehicleBrand ? data.VehicleBrand : null,
      model: data.VehicleModel ? data.VehicleModel : null,
      year: data.VehicleYear ? data.VehicleYear : null,
      fuel: data.VehicleFuel ? data.VehicleFuel : null,
      transmission: data.VehicleTransmission ? data.VehicleTransmission : null,
      KmDriver: data.KmDriver ? data.KmDriver : null,
      parts_type: data.VehiclePartType ? data.VehiclePartType : null,
      monitor_type: data.MonitorType ? data.MonitorType : null,
      published_year: data.Bookyear ? data.Bookyear : null,
      author: data.BookAuthor ? data.BookAuthor : null,
      mobile: data.mobile ? data.mobile : null,
    }),
  })
    .then((response) => response.json())
    .then((response) =>
      UploadImage(data.images, response, data.clearFunc, data.Thumbnail)
    );
};
