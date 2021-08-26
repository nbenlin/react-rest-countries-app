import React from "react";
import { CountriesListItem, Title, SubTitle } from "./CountryItemElements";

const CountryItem = (props) => {
  const onSelectedCountryDetailHandler = () => {
    props.onShowDetail();
    return props.selectedHandler(props);
  };

  return (
    <CountriesListItem onClick={onSelectedCountryDetailHandler}>
      <Title>{props.name}</Title>
      <SubTitle>{props.alpha3Code}</SubTitle>
    </CountriesListItem>
  );
};

export default CountryItem;
