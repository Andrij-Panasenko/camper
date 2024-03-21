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

export const CampersItem = ({ value }) => {
  const {
    adults,
    children,
    consumption,
    description,
    engine,
    form,
    height,
    length,
    location,
    name,
    price,
    rating,
    tank,
    transmission,
    width,
    details,
    gallery,
    reviews,
  } = value;
  console.log(value);

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
          <Button type="button">Show more</Button>
        </div>
      </Item>
    </>
  );
};
