import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import { CountriesContainer } from "./CountriesElements";

const Countries = (props) => {
  const [filteredCountriesByRegion, setFilteredCountriesByRegion] =
    useState("All countries");
  const [filteredCountriesByName, setFilteredCountriesByName] = useState();

  const filterRegionChangeHandler = (selectedCountryByRegion) => {
    setFilteredCountriesByRegion(selectedCountryByRegion);
  };

  const filterNameChangeHandler = (selectedCountryByName) => {
    setFilteredCountriesByName(selectedCountryByName);
  };

  const filteredCountriesWithSelectbox = props.items.filter((country) => {
    if (filteredCountriesByRegion === "All countries") {
      return country;
    }
    return country.region === filteredCountriesByRegion;
  });

  const filteredCountriesWithInput = props.items.filter((country) => {
    return country.name.toLowerCase() === filteredCountriesByName;
  });

  return (
    <CountriesContainer>
      <CountriesFilter
        items={props.items}
        onChangeRegionFilter={filterRegionChangeHandler}
        onChangeNameFilter={filterNameChangeHandler}
        selected={filteredCountriesByRegion}
      />
      <CountriesList
        items={
          filteredCountriesByName
            ? filteredCountriesWithInput
            : filteredCountriesWithSelectbox
        }
      />
    </CountriesContainer>
  );
};

export default Countries;
