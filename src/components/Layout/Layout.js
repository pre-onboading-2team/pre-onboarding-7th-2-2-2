import { Outlet } from "react-router-dom";

import Aside from "./Aside";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Aside />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
