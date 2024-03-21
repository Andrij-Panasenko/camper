import { Nav, NavLink } from "./Navigation.styled"

export const Navigation = () => {
    return (
      <>
        <Nav>
          <NavLink to="/">Main page</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Nav>
      </>
    );
}
