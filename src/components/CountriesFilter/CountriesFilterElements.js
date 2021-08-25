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

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${COLORS.dark};
  font-weight: 500;
  width: ${({ inputlabel }) => (inputlabel ? "18%" : "30%")};
`;

/* Select filter elements */
export const Select = styled.select`
  width: 40%;
`;

export const Option = styled.option``;

/* Input filter elements */
export const Input = styled.input`
  width: 50%;
  padding: 5px;
  font-size: 15px;
  border: none;
  border: 1px solid ${COLORS.weebyBlue};
  border-radius: 4px;
  color: ${COLORS.dark};

  &:focus {
    outline: none;
  }
`;
