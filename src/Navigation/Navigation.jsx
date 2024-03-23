import { Nav, NavLink } from "./Navigation.styled"

export const Navigation = () => {
    return (
      <>
        <Nav>
          <NavLink to="/">NomadVans</NavLink>
         <div>
           <NavLink to="/catalog">Catalog</NavLink>
           <NavLink to="/favorites">Favorites</NavLink>
         </div>
        </Nav>
      </>
    );
}
