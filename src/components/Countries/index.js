import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import { CountriesContainer } from "./CountriesElements";

const Countries = (props) => {
  const [filteredCountriesByRegion, setFilteredCountriesByRegion] =
    useState("All countries");
  const [filteredCountriesByName, setFilteredCountriesByName] = useState();
  const [inputIsTouched, setInputIsTouched] = useState(false);

  /* Value handlers */
  const filterRegionChangeHandler = (selectedCountryByRegion) => {
    setFilteredCountriesByRegion(selectedCountryByRegion);
  };

  const filterNameChangeHandler = (selectedCountryByName) => {
    setFilteredCountriesByName(selectedCountryByName);
  };

  const inputFilterFocusHandler = () => {
    setInputIsTouched(true);
  };

  /* end value handlers */

  /* Value filters */
  const filteredCountriesWithSelectbox = props.items.filter((country) => {
    if (filteredCountriesByRegion === "All countries") {
      return country;
    }
    return country.region === filteredCountriesByRegion;
  });

  const filteredCountriesWithInput = props.items.filter((country) => {
    return country.name.toLowerCase() === filteredCountriesByName;
  });
  /* end value filters */

  return (
    <CountriesContainer>
      <CountriesFilter
        items={props.items}
        onChangeRegionFilter={filterRegionChangeHandler}
        onChangeNameFilter={filterNameChangeHandler}
        onFocusHandler={inputFilterFocusHandler}
        selected={filteredCountriesByRegion}
      />
      <CountriesList
        selectedHandler={props.selectedHandler}
        onShowDetail={props.onShowDetail}
        isTouchedToInput={inputIsTouched}
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
