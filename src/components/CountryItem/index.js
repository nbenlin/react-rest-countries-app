import React from "react";
import { CountriesListItem } from "./CountryItemElements";

const CountryItem = (props) => {
  return (
    <CountriesListItem>
      <h3>{props.name}</h3>
    </CountriesListItem>
  );
};

export default CountryItem;
