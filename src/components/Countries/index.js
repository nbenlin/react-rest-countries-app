import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import {} from "./CountriesElements";

const Countries = (props) => {
  const [filteredCountriesByRegion, setFilteredCountriesByRegion] =
    useState("All countries");
  // const [filteredCountriesByName, setFilteredCountriesByName] = useState();

  const filterChangeHandler = (selectedCountryByRegion) => {
    setFilteredCountriesByRegion(selectedCountryByRegion);
  };

  const filteredCountriesWithSelectbox = props.items.filter((country) => {
    if (filteredCountriesByRegion === "All countries") {
      return country;
    }
    return country.region === filteredCountriesByRegion;
  });

  return (
    <>
      <CountriesFilter
        items={props.items}
        onChangeFilter={filterChangeHandler}
        selected={filteredCountriesByRegion}
      />
      <CountriesList items={filteredCountriesWithSelectbox} />
    </>
  );
};

export default Countries;
