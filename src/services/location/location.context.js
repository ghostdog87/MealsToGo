import React, { useState, createContext, useEffect, useMemo } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      // don't do anything
      return;
    }
    setTimeout(() => {
      locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          console.log(result);
          setLocation(result);
        })
        .catch((result) => {
          setIsLoading(false);
          console.log(result);
          setError(result);
        });
    }, 2000);
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
