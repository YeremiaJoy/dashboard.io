import React, { useContext, useEffect } from "react";
import {
  CalendarIcon,
  DragHandleIcon,
  HamburgerIcon,
  PlusSquareIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { SidebarItem, SidebarStyle } from "../../styles/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarContext } from "../../pages/_app";

const sidebarItem = [
  {
    title: "Dashboard",
    route: "/",
    icon: <CalendarIcon w={5} h={5} color="black.300" />,
  },
  {
    title: "Users",
    route: "/users",
    icon: <DragHandleIcon w={6} h={6} color="black.300" />,
  },
  {
    title: "Registration",
    route: "/register",
    icon: <PlusSquareIcon w={6} h={6} color="black.300" />,
  },
  {
    title: "Search",
    route: "/search",
    icon: <SearchIcon w={5} h={5} color="black.300" />,
  },
];

function Sidebar() {
  const router = useRouter();
  const { toggleSidebar, setToggleSidebar } = useContext(sidebarContext);

  return (
    <>
      <SidebarStyle toggle={toggleSidebar}>
        <SidebarItem
          onClick={() => {
            setToggleSidebar(!toggleSidebar);
            localStorage.setItem("SIDEBAR", !toggleSidebar);
          }}
        >
          <HamburgerIcon w={6} h={6} color="black.300" />
          {toggleSidebar && <p>Menu</p>}
        </SidebarItem>
        {sidebarItem.map((val, i) => {
          return (
            <Link href={val.route} key={i}>
              <a>
                <SidebarItem active={router.pathname === val.route}>
                  {val.icon}
                  {toggleSidebar && <p>{val.title}</p>}
                </SidebarItem>
              </a>
            </Link>
          );
        })}
      </SidebarStyle>
    </>
  );
}

export default Sidebar;
