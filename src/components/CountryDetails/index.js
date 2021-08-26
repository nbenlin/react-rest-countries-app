import React from "react";
import Modal from "../UI/Modal";
import {
  Card,
  CardHeader,
  Title,
  Image,
  CardBody,
  Subtitle,
  Paragraph,
  CloseButton,
} from "./CountryDetailsElements";

const CountryDetails = (props) => {
  return (
    <Modal>
      <Card>
        <CloseButton onClick={props.onHideDetail} />
        <CardHeader>
          <Title>{props.item.name}</Title>
          <Image></Image>
        </CardHeader>
        <CardBody>
          <Subtitle></Subtitle>
          <Paragraph></Paragraph>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default CountryDetails;
