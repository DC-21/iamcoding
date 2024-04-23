import React, { ReactNode, useEffect } from "react";
import SideBar from "../Sidebar/Sidebar.tsx";
import NavBar from "../../../components/global/Navbar.tsx";
import { useRecoilValue } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../../../recoil/atom.ts";
import Profile from "../Profile/Profile.tsx";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = useRecoilValue(userDetailsAtom);
  const auth = useRecoilValue(isAuthenticatedAtom);
  useEffect(() => {
    if (auth === false || user === null) {
      window.location.pathname = "/login";
      return;
    }
  }, [auth, user]);
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className=" p-2 flex-1">{children}</main>
        <Profile />
      </div>
    </div>
  );
};

export default Layout;
