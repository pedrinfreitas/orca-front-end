import styled from "styled-components";
import cores from "../../global-css";

export const NavBar_div = styled.div`
* {
  font-size: 16px;
  font-family: 'Roboto';
}

.navbar {
  position: fixed;
  background-color: ${cores.azulEscuro};
  transition: width 600ms ease;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${cores.branco};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: ${cores.transitionSpeed};
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: ${cores.branco};
  color: ${cores.verde};
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: ${cores.transitionSpeed};
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  background: ${cores.cinza};
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  color: ${cores.azulEscuro};
  transform: rotate(0deg);
  transition: ${cores.transitionSpeed};
}

.logo-text
{
  display: inline;
  position: absolute;
  left: -999px;
  transition: ${cores.transitionSpeed};
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }

  .navbar:hover .link-text {
    display: inline;
  }

  .navbar:hover .logo svg
  {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text
  {
    left: 0px;
  }
}
`;
// export const NavBar_nav = styled.nav`
//   position: fixed;
//   background-color: ${cores.azulEscuro};
//   transition: width 600ms ease;
// `;

// export const NavBar_ul = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;
// `;


// export const Logo_li = styled.li`  
//   font-weight: bold;
//   text-transform: uppercase;
//   margin-bottom: 1rem;
//   text-align: center;
//   color: ${cores.azulEscuro};
//   background: ${cores.cinza};
//   font-size: 1.5rem;
//   letter-spacing: 0.3ch;
//   width: 100%;
//   svg {
//     transform: rotate(0deg);
//     transition: ${cores.transitionSpeed};
//     /* color: var(--laranja); */
//   }  
// `;


// export const Link_a = styled.a`
//   display: flex;
//   align-items: center;
//   height: 5rem;
//   color: ${cores.azulEscuro};
//   text-decoration: none;
//   filter: grayscale(100%) opacity(0.7);
//   transition: ${cores.transitionSpeed};
//   &:hover{
//     filter: grayscale(0%) opacity(1);
//     background: ${cores.verde};
//     color: ${cores.azulEscuro};
//   }
//   svg{
//     width: 2rem;
//     min-width: 2rem;
//     margin: 0 1.5rem;
//   }
// `
// export const Item_li = styled.li`  
//   width: 100%;

//   &:last-child {
//   margin-top: auto;
//     /* color: var(--laranja); */
//   }
// `;


// // .home-info h1{
// //   font-size: 3em;
// //   margin-bottom: 0.5em;
// //   color: var(--azul-escuro);
// // }

// // .home-info p{
// //   font-size: 1.25em;
// //   line-height: 1.4;
// //   margin-bottom: 1em;
// //   color: var(--azul-escuro);
// // }

// // .home-img{
// //   flex-grow: 1;
// //   max-width: 50%;
// //   min-width: 300px;
// //   margin-right: 10%;
// // }