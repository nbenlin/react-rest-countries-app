import styled from "styled-components";
import { COLORS } from "../../colors";

export const CountriesListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 140px;
  background-color: #fff;
  list-style: none;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background-color: ${COLORS.white};
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
`;

export const Title = styled.h2`
  color: ${COLORS.dark};
  font-size: 20px;
  padding: 20px;
`;

export const SubTitle = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
