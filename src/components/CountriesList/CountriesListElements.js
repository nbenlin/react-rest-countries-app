import styled from "styled-components";
import { COLORS } from "../../colors";

export const CountriesListContainer = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background-color: ${COLORS.white};
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  border-radius: 10px;
`;

export const CountriesListGroup = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
`;

export const FallbackContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Fallback = styled.p`
  padding-top: 10px;
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  margin: 20px auto;
`;

export const Button = styled.button`
  border: none;
  font-size: 12px;
  border-radius: 6px;
  margin: 12px 4px;
  padding: 7px 11px;
  cursor: pointer;
  background-color: ${COLORS.white};
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  transition: 0.1s all ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;
