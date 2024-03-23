import {
  ContentName,
  Contetn,
  EquipButton,
  Title,
  EquipmentList,
  Filters,
  Input,
  InputWrapper,
  Label,
  LineSvg,
  MapPin,
} from "./CampersFilter.styled";
import { useSvgIcons } from "../../../hooks/useSvgIcons.jsx";
import sprite from "../../../assets/sprite.svg";

export const CampersFilter = () => {
  const {
    adultsSVG,
    transmissionSVG,
    petrolSVG,
    kitchenSVG,
    bedsSVG,
    acSVG,
    tvSVG,
    showerSVG,
  } = useSvgIcons();

  const mapPinSVG = (
    <MapPin>
      <use xlinkHref={sprite + "#icon-map-pin"}></use>
    </MapPin>
  );

  const lineSVG = (
    <LineSvg>
      <use xlinkHref={sprite + "#icon-line"}></use>
    </LineSvg>
  );

  return (
    <>
      <div>
        <InputWrapper>
          {mapPinSVG}
          <Label>Location</Label>
          <Input type="text" />
        </InputWrapper>

        <Filters>Filters</Filters>

        <div>
          <Title>Vehicle equipment</Title>
          {lineSVG}
          <EquipmentList>
            <EquipButton>
              <Contetn>
                {acSVG}
                <ContentName>AC</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {transmissionSVG}
                <ContentName>Automatic</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {kitchenSVG}
                <ContentName>Kitchen</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {tvSVG}
                <ContentName>TV</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {showerSVG}
                <ContentName>Shower/WC</ContentName>
              </Contetn>
            </EquipButton>
          </EquipmentList>
        </div>
        <div>
          <Title>Vehicle type</Title>
          {lineSVG}
          <ul>
            <li>
              <p>свг</p>
              <p></p>
            </li>
            <li>
              <p>свг</p>
              <p></p>
            </li>
            <li>
              <p>свг</p>
              <p></p>
            </li>
          </ul>
        </div>
        <button type="submit">Search</button>
      </div>
    </>
  );
};
