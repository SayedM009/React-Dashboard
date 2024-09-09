import { Outlet } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
const Applayout = styled.main`
  display: grid;
  grid-template-columns: 26rem 1fr;
  height: 100dvh;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-200);
  padding: 4rem 4.8rem 6.4rem;
  height: 90dvh;
  overflow-y: scroll;
`;

// const Spinner = styled.div`
//   width: 3rem;
//   height: 3rem;
//   border-radius: 50%;
//   border-left: 5px solid black;
//   border-top: 5px solid black;
//   border-right: 5px solid #bbb;
//   border-bottom: 5px solid #bbb;
//   animation: rotate 1s linear infinite forwards;
//   position: relative;
//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

function Layout() {
  return (
    <Applayout>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Applayout>
  );
}

export default Layout;
