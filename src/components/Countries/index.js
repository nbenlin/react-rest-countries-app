import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import {} from "./CountriesElements";

const Countries = (props) => {
  const [filteredCountriesByRegion, setFilteredCountriesByRegion] = useState();
  const [filteredCountriesByName, setFilteredCountriesByName] = useState();

  const filterChangeHandler = (selectedRegion) => {
    setFilteredCountriesByRegion(selectedRegion);
  };

  return (
    <>
      <CountriesFilter
        items={props.items}
        onChangeFilter={filterChangeHandler}
        selected={filteredCountriesByRegion}
      />
      <CountriesList />
    </>
  );
};

export default Countries;
