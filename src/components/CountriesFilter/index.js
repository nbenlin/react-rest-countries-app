import React from "react";
import { FilterContainer } from "./CountriesFilterElements";
import SelectFilter from "./SelectFilter";
import InputFilter from "./InputFilter";

const CountriesFilter = (props) => {
  return (
    <FilterContainer>
      <SelectFilter
        items={props.items}
        onChangeFilter={props.onChangeFilter}
        selected={props.selected}
      />
      <InputFilter />
    </FilterContainer>
  );
};

export default CountriesFilter;
