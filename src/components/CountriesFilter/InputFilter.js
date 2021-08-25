import React from "react";
import { Filter, Input, Label } from "./CountriesFilterElements";

const InputFilter = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeNameFilter(event.target.value.toLowerCase());
  };
  const inputFocusHandler = () => {
    props.onFocusHandler();
  };

  return (
    <Filter>
      <Label inputlabel>Search country:</Label>
      <Input
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        type="text"
        placeholder="Enter the country name"
      />
    </Filter>
  );
};

export default InputFilter;
