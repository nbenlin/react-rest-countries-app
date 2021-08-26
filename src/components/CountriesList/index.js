import React, { useEffect, useState } from "react";
import CountryItem from "../CountryItem";
import {
  CountriesListGroup,
  FallbackContainer,
  Fallback,
  CountriesListContainer,
  ButtonWrapper,
  Button,
} from "./CountriesListElements";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { COLORS } from "../../colors";

const CountriesList = (props) => {
  /* If user touched to text input filter and no items */
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 12;
  const isFallback = props.items.length === 0 && props.isTouchedToInput;

  /* If there is no items and input was touched */
  if (isFallback) {
    return (
      <FallbackContainer>
        <Loader
          type="Grid"
          color={`${COLORS.warning}`}
          height={60}
          width={60}
        />
        <Fallback>
          Please make sure you entered the country name correctly ...
        </Fallback>
      </FallbackContainer>
    );
  }

  const changePageHandler = (offset) => {
    setOffset(offset);
  };

  /* Countries list items */
  let listOfCountries = [];
  for (
    let i = offset * itemsPerPage;
    i < offset * itemsPerPage + itemsPerPage;
    i++
  ) {
    if (i >= props.items.length) {
      break;
    }
    listOfCountries.push(props.items[i]);
  }

  /* Create CountryItem components */
  listOfCountries = listOfCountries.map((item, index) => {
    return (
      <CountryItem
        key={index}
        onShowDetail={props.onShowDetail}
        selectedHandler={props.selectedHandler}
        id={item.callingCodes}
        name={item.name}
        population={item.population}
        capital={item.capital}
        region={item.region}
        subregion={item.subregion}
        area={item.area}
        flag={item.flag}
        alpha3Code={item.alpha3Code}
        latlng={item.latlng}
      />
    );
  });

  /*Create Button components */
  let listOfButtons = [];
  for (let i = 1; i <= Math.ceil(props.items.length / itemsPerPage); i++) {
    const buttonElement = (
      <Button key={i} onClick={() => changePageHandler(i - 1)}>
        {i}
      </Button>
    );
    listOfButtons.push(buttonElement);
  }
  return (
    <CountriesListContainer>
      <CountriesListGroup>{listOfCountries}</CountriesListGroup>
      <ButtonWrapper>{listOfButtons}</ButtonWrapper>
    </CountriesListContainer>
  );
};

export default CountriesList;
