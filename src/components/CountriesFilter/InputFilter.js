import React from "react";
import { Filter, Input, Label } from "./CountriesFilterElements";

const InputFilter = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeNameFilter(event.target.value);
  };

  return (
    <Filter>
      <Label inputlabel>Search country:</Label>
      <Input onChange={inputChangeHandler} type="text" />
    </Filter>
  );
};

export default InputFilter;
