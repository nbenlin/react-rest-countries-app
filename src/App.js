import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import InfoSection from "./components/Info";

const App = () => {
  const [data, setData] = useState([]);

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
      <InfoSection />
      <Countries items={data} />
    </>
  );
};

export default App;
