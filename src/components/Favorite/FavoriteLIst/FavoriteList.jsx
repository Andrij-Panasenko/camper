import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../../redux/selectors";
import { FavoritesItem } from "../FavoritesItem/FavoritesItem";
import { List } from "./FavoriteList.styled";

export const FavoriteList = () => {
  const favorites = useSelector(selectFavoriteCampers);
  return (
    <>
      <List>
        {favorites.map((item) => (
          <FavoritesItem key={item._id} data={item} />
        ))}
      </List>
    </>
  );
};
