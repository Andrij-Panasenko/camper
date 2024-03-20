import { Item, Image, Description, Button } from "./CampersItem.styled";

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
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{price}.00</p>
          <p>
            {rating}
            <span>({reviews.length} Rewiews)</span> <span>{location}</span>
          </p>
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
