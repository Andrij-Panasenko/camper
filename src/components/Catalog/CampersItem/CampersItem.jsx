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

import { useState } from "react";
import { ModalShowMore } from "../../ModalShowMore.jsx/ModalShowMore";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../../redux/catalogSlice";
import { selectCampers, selectFavoriteCampers } from "../../../redux/selectors";

export const CampersItem = ({ value }) => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavoriteCampers);

  const isFavoriteValue = favorites.map((item) => item.isFavorite);
  console.log(isFavoriteValue);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCardFavorite, setIsCardFavorite] = useState(
    isFavoriteValue ?? false
  );

  // const handleToggleFavorite = () => {
  //   setIsCardFavorite(!isCardFavorite);
  // }

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

  const adultsSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-adults"}></use>
    </Svg>
  );

  const kitchenSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-kitchen"}></use>
    </Svg>
  );

  const transmissionSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-trans"}></use>
    </Svg>
  );

  const petrolSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-petrol"}></use>
    </Svg>
  );

  const bedsSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-bed"}></use>
    </Svg>
  );

  const acSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-tv"}></use>
    </Svg>
  );

  const heartSvgIcon = (
    <Svg
      onClick={() => {
        dispatch(addToFavorite(value));
        setIsCardFavorite(!isCardFavorite);
      }}>
      <use xlinkHref={sprite + "#icon-heart"}></use>
    </Svg>
  );

  const redHeartSvg = (
    <Svg
      onClick={() => {
        dispatch(removeFromFavorite(value));
        setIsCardFavorite(!isCardFavorite);
      }}>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </Svg>
  );

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <Price>
              €{price}.00 {isCardFavorite ? heartSvgIcon : redHeartSvg}
            </Price>
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
              {adultsSvgIcon}
              {adults}&nbsp;adults
            </InfoListItem>
            <InfoListItem>
              {transmissionSvgIcon}
              {transmission}
            </InfoListItem>
            <InfoListItem>
              {petrolSvgIcon}
              {engine}
            </InfoListItem>
            <InfoListItem>{kitchenSvgIcon}Kitchen</InfoListItem>
            <InfoListItem>
              {bedsSvgIcon}
              {details.beds}&nbsp;beds
            </InfoListItem>
            <InfoListItem>{acSvgIcon}AC</InfoListItem>
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

      <ModalShowMore
        isModalOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        data={value}
      />
    </>
  );
};
