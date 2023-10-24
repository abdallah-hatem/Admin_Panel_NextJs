"use client";
import Cookies from "js-cookie";
import "./style.scss";

import { useRouter } from "next/navigation";
import isAuth from "@/utils/auth";

export default function NavBarComp() {
  const { push } = useRouter();
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <button
        disabled={!isAuth()}
        onClick={() => {
          Cookies.remove("jwt", { path: "/" });
          push("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
}
