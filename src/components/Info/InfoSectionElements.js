import styled from "styled-components";
import { COLORS } from "../../colors";

export const InfoContainer = styled.section`
  margin: 10px 20px;
  padding: 20px 30px;
  background-color: ${COLORS.white};
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${COLORS.dark};
`;

export const HeaderImage = styled.img`
  height: 50px;
  width: 50px;
  margin: 0px 15px;
`;
