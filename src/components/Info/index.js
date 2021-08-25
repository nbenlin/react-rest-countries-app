import React from "react";
import { InfoContainer, HeaderTitle, HeaderImage } from "./InfoSectionElements";
import image from "../../images/world.svg";

const InfoSection = () => {
  return (
    <InfoContainer>
      <HeaderTitle>
        Explore the countries of the world and learn more
      </HeaderTitle>
      <HeaderImage src={image} alt="worldimage" />
    </InfoContainer>
  );
};

export default InfoSection;
