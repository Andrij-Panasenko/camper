import { useEffect } from "react";
import { getAllCampers } from "../redux/operations";
import { useDispatch } from "react-redux";

export default function CatalogPage() {
const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getAllCampers())
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog Page</h1>
    </div>
  );
}
