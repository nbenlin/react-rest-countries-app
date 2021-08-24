import React from "react";
import { CountriesListItem, Title, SubTitle } from "./CountryItemElements";

const CountryItem = (props) => {
  return (
    <CountriesListItem>
      <Title>{props.name}</Title>
      <SubTitle>{props.alpha3Code}</SubTitle>
    </CountriesListItem>
  );
};

export default CountryItem;
