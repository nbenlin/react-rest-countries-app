import React, { useState } from "react";
import { Filter, Label, Select, Option } from "./CountriesFilterElements";

const SelectFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  /* Get all regions and filter the same values */
  const regionNames = props.items.map((name) => {
    return name.region;
  });
  const filteredRegionNames = regionNames.filter((name, index) => {
    return regionNames.indexOf(name) === index && name !== "";
  });

  return (
    <Filter>
      <Label>Select countries by region:</Label>
      <Select
        onChange={dropdownChangeHandler}
        value={props.selected}
        selected={props.selected}
      >
        {filteredRegionNames.map((regionName) => (
          <Option value={regionName}>{regionName}</Option>
        ))}
      </Select>
    </Filter>
  );
};

export default SelectFilter;
