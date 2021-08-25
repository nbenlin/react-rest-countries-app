import React from "react";
import { Filter, Input, Label } from "./CountriesFilterElements";

const InputFilter = (props) => {
  return (
    <Filter>
      <Label inputlabel>Search country:</Label>
      <Input type="text" />
    </Filter>
  );
};

export default InputFilter;
