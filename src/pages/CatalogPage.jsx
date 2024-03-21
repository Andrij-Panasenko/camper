import { useEffect } from "react";
import { getAllCampers } from "../redux/operations";
import { useDispatch } from "react-redux";
// import { CatalogList } from "../components/Catalog/CatalogList/CatalogList";
// import { CampersFilter } from "../components/Catalog/CampersFilter/CampersFilter";
import { Catalog } from "../components/Catalog/Catalog";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog Page</h1>
      <Catalog/>
    </div>
  );
}
