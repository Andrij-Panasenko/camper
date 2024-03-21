import { EquipButton, EquipmentList } from "./CampersFilter.styled";

export const CampersFilter = () => {
  return (
    <>
      <div>
        <label>
          Location
          <input type="text" />
        </label>
        <p>Filters</p>
        <div>
          <p>Vehicle equipment</p>
          <EquipmentList>
            <EquipButton>
              <div>
                <p>AC</p>
              </div>
            </EquipButton>
            <EquipButton>
              <div>
                <p>Automatic</p>
              </div>
            </EquipButton>
            <EquipButton>
              <div>
                <p>Kitchen</p>
              </div>
            </EquipButton>
            <EquipButton>
              <div>
                <p>TV</p>
              </div>
            </EquipButton>
            <EquipButton>
              <div>
                <p>Shower/WC</p>
              </div>
            </EquipButton>
          </EquipmentList>
        </div>
        <div>
          <p>Vehicle type</p>
          <ul>
            <li>
              <button type="button"></button>{" "}
            </li>
            <li>
              <button type="button"></button>{" "}
            </li>
            <li>
              <button type="button"></button>{" "}
            </li>
          </ul>
        </div>
        <button type="submit"></button>
      </div>
    </>
  );
};
