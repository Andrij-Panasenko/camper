import sprite from '../assets/sprite.svg'
import { Svg } from '../components/Catalog/CampersItem/CampersItem.styled';

export const useSvgIcons = () => {
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

  const heartSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-heart"}></use>
    </Svg>
  );

  const redHeartSVG = (
    <Svg>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </Svg>
  );

  return {
    adultsSVG,
    transmissionSVG,
    petrolSVG,
    kitchenSVG,
    bedsSVG,
    acSVG,
    heartSVG,
    redHeartSVG,
  };
}