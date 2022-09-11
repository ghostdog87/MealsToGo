import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No mock found!");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.floor(Math.random() * mockImages.length)],
    ];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status == "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
