import styled from "styled-components";
import { COLORS } from "../../colors";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 180px;
  background-color: ${COLORS.white};
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  border-radius: 10px;
  margin-top: 30px;
`;

export const Filter = styled.div``;

export const Label = styled.label`
  font-size: 18px;
  width: 50%;
`;

export const Select = styled.select`
  width: 50%;
`;

export const Option = styled.option``;
