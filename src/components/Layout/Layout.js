import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Aside from "./Aside";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  .aside {
    flex-basis: 20%;
  }

  .main {
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    background-color: #d4d4d4;
  }
`;

const Layout = () => {
  return (
    <Container>
      <Aside className="aside" />
      <div className="main">
        <Header />
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
