import React from "react";
import { FilterContainer } from "./CountriesFilterElements";
import SelectFilter from "./SelectFilter";

const CountriesFilter = (props) => {
  return (
    <FilterContainer>
      <SelectFilter
        items={props.items}
        onChangeFilter={props.onChangeFilter}
        selected={props.selected}
      />
    </FilterContainer>
  );
};

export default CountriesFilter;
