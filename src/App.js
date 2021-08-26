import { useState, useEffect, Fragment } from "react";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import InfoSection from "./components/Info";

const App = () => {
  const [data, setData] = useState([]);
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});

  const fetchCountriesData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const showDetailHandler = () => {
    setDetailIsShown(true);
  };
  const hideDetailHandler = () => {
    setDetailIsShown(false);
  };
  const selectedCountryHandler = (selectedCountryDetails) => {
    setSelectedCountry(selectedCountryDetails);
  };

  console.log("In app js", selectedCountry.name);

  return (
    <Fragment>
      {detailIsShown && (
        <CountryDetails
          onHideDetail={hideDetailHandler}
          item={selectedCountry}
        />
      )}
      <InfoSection />
      <main>
        <Countries
          items={data}
          onShowDetail={showDetailHandler}
          selectedHandler={selectedCountryHandler}
        />
      </main>
    </Fragment>
  );
};

export default App;
