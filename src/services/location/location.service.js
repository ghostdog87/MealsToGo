import { locations } from "./mock/location.mock";
import camelize from "camelize";

export const locationRequest = (searchInput) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchInput];
    console.log(searchInput);
    if (!locationMock) {
      reject("No location mock found!");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (response) => {
  const formattedResponse = camelize(response);
  const { geometry } = formattedResponse.results[0];
  const { lng, lat } = geometry.location;
  return { lng, lat };
};
