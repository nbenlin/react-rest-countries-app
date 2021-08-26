import React from "react";
import { CountriesListItem, Title, SubTitle } from "./CountryItemElements";

const CountryItem = (props) => {
  const onSelectedCountryDetailHandler = () => {
    props.onShowDetail();
    return props.selectedHandler(props.items);
  };

  return (
    <CountriesListItem onClick={onSelectedCountryDetailHandler}>
      <Title>{props.items.name}</Title>
      <SubTitle>{props.items.alpha3Code}</SubTitle>
    </CountriesListItem>
  );
};

export default CountryItem;
