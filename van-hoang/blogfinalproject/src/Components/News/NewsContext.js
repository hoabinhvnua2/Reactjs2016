import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "f1513986ddbe4b668fe2ea286b8cb357";
  
    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=Apple&from=2021-11-06&sortBy=popularity&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    );
};