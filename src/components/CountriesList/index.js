import React from "react";
import CountryItem from "../CountryItem";
import { CountriesListGroup } from "./CountriesListElements";

const CountriesList = (props) => {
  return (
    <CountriesListGroup>
      {props.items.map((item) => (
        <CountryItem key={item.numericCode} name={item.name} />
      ))}
    </CountriesListGroup>
  );
};

export default CountriesList;
