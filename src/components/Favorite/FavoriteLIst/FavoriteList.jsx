import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../../redux/selectors";
import {FavoritesItem} from '../FavoritesItem/FavoritesItem'

export const FavoriteList = () => {
  const favorites = useSelector(selectFavoriteCampers);
    return (
      <>
        <ul>
          {favorites.map((item) => (
            <FavoritesItem key={item._id} data={item} />
          ))}
        </ul>
      </>
    );
};
