import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import { COLORS } from "../../colors";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
  height: 50px;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  border-radius: 10px;
  width: 100%;
`;

export const Image = styled.img`
  margin: 0 5px;
  width: 60px;
  border-radius: 8px;
  height: auto;
`;

export const Title = styled.h2`
  margin: 0 10px;
  font-weight: 400;
`;

export const CardBody = styled.div`
  -webkit-box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(69, 123, 157, 0.5);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div``;

export const BodyItem = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`;

export const Subtitle = styled.h4`
  font-weight: 500;
  font-size: 15px;
`;

export const Paragraph = styled.p`
  margin: 0 6px;
`;

export const CloseButton = styled(FaWindowClose)`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 22px;
  cursor: pointer;
  color: ${COLORS.AmaranthRedDye};
`;

export const Sup = styled.sup``;
