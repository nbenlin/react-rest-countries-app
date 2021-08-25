import styled from "styled-components";

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
