import React, { useState } from "react";
import CountryItem from "../CountryItem";
import {
  CountriesListGroup,
  FallbackContainer,
  Fallback,
} from "./CountriesListElements";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { COLORS } from "../../colors";

const CountriesList = (props) => {
  /* If user touched to text input filter and no items */
  if (props.items.length === 0 && props.isTouchedToInput) {
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
