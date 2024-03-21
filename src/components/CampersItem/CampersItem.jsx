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
  ReviewsWrapper,
  InfoList,
  InfoListItem,
  Svg,
} from "./CampersItem.styled";
import sprite from "../../assets/sprite.svg";

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

  const adultsSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-adults"}></use>
    </Svg>
  );

  const transmissionSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-trans"}></use>
    </Svg>
  );

  const petrolSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-petrol"}></use>
    </Svg>
  );

  const kitchenSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-kitchen"}></use>
    </Svg>
  );

  const bedsSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-bed"}></use>
    </Svg>
  );

  const acSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-AC"}></use>
    </Svg>
  );
  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <Price>€{price}.00</Price>
          </TitleWrapper>
          <ReviewsWrapper>
            <Reviews>
              {rating} ({reviews.length} Rewiews)
            </Reviews>
            <Location>{location}</Location>
          </ReviewsWrapper>
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
            <InfoListItem>{petrolSVG}{engine}</InfoListItem>
            <InfoListItem>{ kitchenSVG}Kitchen</InfoListItem>
            <InfoListItem>{ bedsSVG}{details.beds}&nbsp;beds</InfoListItem>
            <InfoListItem>{acSVG}AC</InfoListItem>
          </InfoList>
          <Button type="button">Show more</Button>
        </div>
      </Item>
    </>
  );
};
