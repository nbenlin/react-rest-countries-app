import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import { COLORS } from "../../colors";

export const Card = styled.div`
  position: relative;
`;

export const CardHeader = styled.div``;

export const Image = styled.img``;

export const Title = styled.h2``;

export const CardBody = styled.div``;

export const Subtitle = styled.h4``;

export const Paragraph = styled.p``;

export const CloseButton = styled(FaWindowClose)`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 22px;
  cursor: pointer;
  color: ${COLORS.AmaranthRedDye};
`;
