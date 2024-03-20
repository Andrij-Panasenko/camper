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
} from "./CampersItem.styled";

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
          <ul>
            <li>{adults}&nbsp;adults</li>
            <li>{transmission}</li>
            <li>{engine}</li>
            <li>Kitchen</li>
            <li>{details.beds}&nbsp;beds</li>
            <li>AC</li>
          </ul>
          <Button type="button">Show more</Button>
        </div>
      </Item>
    </>
  );
};
