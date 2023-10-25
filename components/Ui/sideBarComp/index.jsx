"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./style.scss";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";

import { FaBeer } from "react-icons/fa";
import useWindowWidth from "@/hooks/windowWidth";
import { useAuthContext } from "@/context/auth";

export default function SideBarComp() {
  const { push } = useRouter();
  const windowWidth = useWindowWidth();

  const { isAuth } = useAuthContext();

  console.log(isAuth, "auth");

  return (
    <Sidebar collapsed={windowWidth < 800} className="side-bar">
      <Menu>
        {routes.map((el, index) =>
          !el.items ? (
            <MenuItem
              icon={<FaBeer />}
              onClick={() => push(el.url)}
              key={index}
            >
              {el.title}
            </MenuItem>
          ) : (
            <SubMenu
              disabled={!isAuth}
              icon={<FaBeer />}
              label={windowWidth > 800 && el.label}
              key={index}
            >
              {el.items.map((el, index) => (
                <MenuItem onClick={() => push(el.url)} key={index}>
                  {el.title}
                </MenuItem>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
    </Sidebar>
  );
}
