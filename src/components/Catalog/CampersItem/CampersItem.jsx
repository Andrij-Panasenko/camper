import {
  Item,
  Image,
  Description,
  Button,
  Title,
  Price,
  Reviews,
  Location,
  TitleWrapper,
  InfoList,
  InfoListItem,
  Svg,
  RateSvg,
  CardInfo,
  RatingWrapper,
  LocationWrapper,
  MapPinSVG,
} from "./CampersItem.styled";
import sprite from "../../../assets/sprite.svg";

import { useSvgIcons } from "../../../hooks/useSvgIcons";
import { useState } from "react";
import { ModalShowMore } from "../../ModalShowMore.jsx/ModalShowMore";

export const CampersItem = ({ value }) => {
  const {
    adults,
    description,
    engine,
    location,
    name,
    price,
    rating,
    transmission,
    details,
    gallery,
    reviews,
  } = value;

  const [isOpenModal, setIsOpenModal] = useState(false);
  // console.log(value);

  const ratingSVG = (
    <RateSvg>
      <use xlinkHref={sprite + "#icon-Rating"}></use>
    </RateSvg>
  );

  const mapPinSVG = (
    <MapPinSVG>
      <use xlinkHref={sprite + "#icon-map-pin"}></use>
    </MapPinSVG>
  );

  const { adultsSVG, transmissionSVG, petrolSVG, kitchenSVG, bedsSVG, acSVG } =
    useSvgIcons();

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <Price>€{price}.00</Price>
          </TitleWrapper>
          <CardInfo>
            <RatingWrapper>
              {ratingSVG}
              <Reviews>
                {rating} ({reviews.length} Rewiews)
              </Reviews>
            </RatingWrapper>
            <LocationWrapper>
              {mapPinSVG}
              <Location>{location}</Location>
            </LocationWrapper>
          </CardInfo>

          <Description>{description}</Description>
          <InfoList>
            <InfoListItem>
              {adultsSVG}
              {adults}&nbsp;adults
            </InfoListItem>
            <InfoListItem>
              {transmissionSVG}
              {transmission}
            </InfoListItem>
            <InfoListItem>
              {petrolSVG}
              {engine}
            </InfoListItem>
            <InfoListItem>{kitchenSVG}Kitchen</InfoListItem>
            <InfoListItem>
              {bedsSVG}
              {details.beds}&nbsp;beds
            </InfoListItem>
            <InfoListItem>{acSVG}AC</InfoListItem>
          </InfoList>
          <Button
            type="button"
            onClick={() => {
              setIsOpenModal(true);
            }}>
            Show more
          </Button>
        </div>
      </Item>

      <ModalShowMore isModalOpen={isOpenModal} setIsOpen={setIsOpenModal} data={value} />
    </>
  );
};
