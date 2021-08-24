import React from "react";
import CountryItem from "../CountryItem";
import { CountriesListGroup } from "./CountriesListElements";

const CountriesList = (props) => {
  return (
    <CountriesListGroup>
      {props.items.map((item) => (
        <CountryItem
          key={item.numericCode}
          name={item.name}
          alpha3Code={item.alpha3Code}
        />
      ))}
    </CountriesListGroup>
  );
};

export default CountriesList;
