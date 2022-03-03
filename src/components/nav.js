import React from 'react';
import { Link } from "gatsby";
import styled from '@emotion/styled';

const Nav2 = styled.nav`
    display:flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'PT Sans', sans-serif;
      line-height: 1rem;
      text-decoration: none;
      padding: 1rem;
      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }

      &.pagina-actual {
        border-bottom: 2px solid #ffffff;
      }
`;

const Nav = () => {
  return (

    // Nav 2 es un styled component, osea, la etiqueta <nav></nav> se renombro como Nav2 y se le aplico un estilo css,
    // arriba esta el codigo
    <Nav2>
      {/* La etiqueta <Link></Link>, el cual es un componente de gatsby, 
          se renombro como NavLink (styled component), para aplicarle codigo css*/}
      <NavLink 
          to='/'
          activeClassName='pagina-actual' //se agrego una clase a este link
      >Inicio</NavLink>
      <NavLink 
          to='/nosotros'
          activeClassName='pagina-actual'
      >Nosotros</NavLink>
      
    </Nav2>
  );
};

export default Nav;

