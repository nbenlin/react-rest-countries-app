import { useState, UseEffect, useEffect } from "react";
import Countries from "./components/Countries";

const App = () => {
  const [data, setData] = useState();

  const fetchCountriesData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <>
      <Countries items={data} />
    </>
  );
};

export default App;
