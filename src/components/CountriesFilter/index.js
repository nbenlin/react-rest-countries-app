import React from "react";
import { FilterContainer } from "./CountriesFilterElements";
import SelectFilter from "./SelectFilter";
import InputFilter from "./InputFilter";

const CountriesFilter = (props) => {
  return (
    <FilterContainer>
      <SelectFilter
        items={props.items}
        onChangeRegionFilter={props.onChangeRegionFilter}
        selected={props.selected}
      />
      <InputFilter
        onChangeNameFilter={props.onChangeNameFilter}
        onFocusHandler={props.onFocusHandler}
      />
    </FilterContainer>
  );
};

export default CountriesFilter;
