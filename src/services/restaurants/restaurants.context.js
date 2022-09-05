import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (currentLocation) => {
    setIsLoading(true);
    console.log("set restaurants");
    console.log(currentLocation);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(currentLocation)
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((result) => {
          setIsLoading(false);
          console.log(result);
          setError(result);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
