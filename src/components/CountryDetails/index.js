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
  BodyItem,
  Column,
  Sup,
} from "./CountryDetailsElements";

const CountryDetails = (props) => {
  return (
    <Modal>
      <Card>
        <CloseButton onClick={props.onHideDetail} />
        <CardHeader>
          <Title>{props.item.name}</Title>
          <Image src={props.item.flag} />
        </CardHeader>
        <CardBody>
          <Column>
            <BodyItem>
              <Subtitle>Native name:</Subtitle>
              <Paragraph>{props.item.nativeName}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Capital:</Subtitle>
              <Paragraph>{props.item.capital}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Region:</Subtitle>
              <Paragraph>{props.item.region}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Subregion:</Subtitle>
              <Paragraph>{props.item.subregion}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Population:</Subtitle>
              <Paragraph>{props.item.population}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Area:</Subtitle>
              <Paragraph>
                {props.item.area}
                km<Sup>2</Sup>
              </Paragraph>
            </BodyItem>
          </Column>
          <Column>
            <BodyItem>
              <Subtitle>Native name:</Subtitle>
              <Paragraph>{props.item.nativeName}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Demonym:</Subtitle>
              <Paragraph>{props.item.demonym}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Region:</Subtitle>
              <Paragraph>{props.item.region}</Paragraph>
            </BodyItem>
            <BodyItem>
              <Subtitle>Numeric code:</Subtitle>
              <Paragraph>{props.item.numericCode}</Paragraph>
            </BodyItem>
          </Column>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default CountryDetails;
